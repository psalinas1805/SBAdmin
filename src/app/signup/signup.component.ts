import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router ,ActivatedRoute} from "@angular/router";
import { UsuariosService } from '../shared/services/usuarios.service';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Usuario } from '../shared/interfaces/usuario.interface';
import { Observable } from "rxjs/Rx";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    forma: FormGroup;
    
    regiones: any;
    comunas: any;
    idregion: number;
    idusuario: any;
    result;
    submit;
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

    constructor(private usuarioService: UsuariosService, private activatedRoute: ActivatedRoute) {

        this.forma = new FormGroup({
            'usuario': new FormControl("", [ Validators.required, Validators.minLength(3)], this.validaUsuario.bind(this) ),
            'password': new FormControl("", [Validators.required, Validators.minLength(6)]),
            'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
            'apellido': new FormControl("", [Validators.required]),
            'correo': new FormControl("", [Validators.required, Validators.email]),
            'telefono': new FormControl("", [Validators.required, Validators.minLength(11),Validators.maxLength(11)]),
            'direccion': new FormControl("", [Validators.required, Validators.minLength(3)]),
            'region': new FormControl("Selecciona", [Validators.required]),
            'comuna': new FormControl("Selecciona", [Validators.required])
          })

          this.usuarioService.getRegion('getRegiones')
          .subscribe(data => {
            this.regiones = data.regionesData;
            //console.log(this.regiones);
    
          });

          this.forma.controls.region.valueChanges
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

    ngOnInit() {}

    addUser() {
        console.log(this.forma);
        this.submit = true;
        
        if(this.idusuario==="nuevo"){
          //insertando
          console.log("Insertando");
          
          this.usuarioService.signUp(this.forma.value, 'signup')
          .subscribe(data => {
            if (data.userData) {
              this.result = true;
              // this.limpiarForma();
            }
            else {
              this.result = false;
            }
          });
        }else{
          //actualizando
          console.log("Editando");
          
          this.usuarioService.editUser(this.forma.value, 'editUser')
          .subscribe(data => {
            if (data.userData) {
              this.result = true;
              // this.limpiarForma();
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
    
}
