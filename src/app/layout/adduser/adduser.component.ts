import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router, ActivatedRoute } from '@angular/router';

import { UsuariosService } from '../../shared/services/usuarios.service';
import { Usuario } from "../../shared/interfaces/usuario.interface";
import { ToastrService } from 'ngx-toastr';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  animations: [routerTransition()]

})
export class AdduserComponent implements OnInit {

  result: boolean;
  forma: FormGroup;
  regiones: any;
  comunas: any;
  submit: boolean = false;
  idregion: number;
  idusuario: any;
  nuevo: boolean = true;
  user_id = { "user_id": "" };

  usuario: Usuario = {
    username: "",
    password: "",
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    comuna: "Seleccione",
    ciudad: "Seleccione",
    telefono: ""
  }

  usuariov: Usuario = {
    username: "",
    password: "",
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    comuna: "Seleccione",
    ciudad: "Seleccione",
    telefono: ""
  }
  usuarioc: any = {
    username: "",
    password: "",
    nombre: "",
    apellido: "",
    correo: "",
    direccion: "",
    comuna: "Seleccione",
    ciudad: "Seleccione",
    telefono: ""
  }


  constructor(private usuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {


    console.log("usuario inicial ");
    console.log(this.usuario);


    this.forma = new FormGroup({
      'username': new FormControl("", [Validators.required, Validators.minLength(3)], this.validaUsuario.bind(this)),
      'password': new FormControl("", [Validators.required, Validators.minLength(6)]),
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl("", [Validators.required]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'telefono': new FormControl("", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      'direccion': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'ciudad': new FormControl("Selecciona", [Validators.required]),
      'comuna': new FormControl("Selecciona", [Validators.required])
    })

    this.activatedRoute.params
      .subscribe(param => {
        this.idusuario = param['user_id'];
        this.user_id.user_id = this.idusuario;
        console.log("El id usuario es: ");
        console.log(this.idusuario);

        if (this.idusuario != "nuevo") {
          this.nuevo = false;
          this.cargaDatosForma(this.user_id);
        }
      });


    this.usuarioService.getRegion('getRegiones')
      .subscribe(data => {
        this.regiones = data.regionesData;

      });


    
      

      this.forma.controls.ciudad.valueChanges
        .subscribe(data => {
          this.idregion = data;
          console.log(this.idregion);

          if (this.idregion > 0) {
            console.log("Entra a comunas");

            this.usuarioService.getComuna(this.idregion, 'getComunas')
              // tslint:disable-next-line:no-shadowed-variable
              .subscribe(data => {
                this.comunas = data.comunasData;
                console.log(this.comunas);
              });
          }

        })
    
  }

  ngOnInit() {


  }

  addUser() {
    console.log(this.forma);
    this.submit = true;

    if (this.idusuario === "nuevo") {
      //insertando
      console.log("Insertando");

      this.usuarioService.signUp(this.forma.value, 'signup')
        .subscribe(data => {
          if (data.userData) {
            this.result = true;
            this.limpiarForma();
            this.showSuccess('Usuario creado exitosamente');

          }
          else {
            this.result = false;
          }
        });
    } else {
      //actualizando
      console.log("Editando");

      this.usuarioService.editUser(this.forma.value, 'editUser')
        .subscribe(data => {
          if (data.userData) {
            this.result = true;
            //this.limpiarForma();
            this.showSuccess('Configuración guardada exitosamente');

          }
          else {
            this.result = false;
          }
        });
    }
  }


  validaUsuario(control: FormControl): Promise<any> | Observable<any> {

    let user: any = { "username": "" };
    user.username = control.value;
    let promesa = new Promise(
      (resolve, reject) => {

        this.usuarioService.searchUsers(user, 'searchUsers')
          .subscribe(data => {
            let usuarios = data.userData;
            //console.log(usuarios);

            //console.log(usuarios[0].cantidad);
            if (usuarios[0].cantidad > 0) {
              resolve({ existe: true });
            } else {
              resolve(null);
            }
          })
      }
    )
    return promesa;
  }

  limpiarForma() {
    this.forma.reset(this.usuariov);
  }

  cargaDatosForma(user_id) {
    this.forma.controls['username'].disable();
    this.forma.controls['password'].disable();

    this.usuarioService.getUser(user_id, 'getUser')
      .subscribe(data => {
        this.usuarioc = data.userData[0];

        console.log("cargando data: ");
        console.log(this.usuarioc);
        this.forma.setValue(this.usuarioc);
      });

  }


  showSuccess(text) {
    this.toastr.success(text, 'Felicidades!');
  }


  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }
  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }
  showInfo() {
    this.toastr.info('Just some information for you.');
  }


}
