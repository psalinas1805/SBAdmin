import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";

import { Router, ActivatedRoute } from '@angular/router';

import { UsuariosService } from '../../shared/services/usuarios.service';
import { Usuario } from "../../shared/interfaces/usuario.interface";

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.scss'],
  animations: [routerTransition()]
})
export class DetailuserComponent implements OnInit {
  usuarios: Usuario;
  pushRightClass: string = 'push-right'
  acuarios: any
  user_id = { "user_id": "" };



  constructor(private usuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params
      .subscribe(param => {
        
        this.user_id.user_id = param['user_id'];
      })
    this.usuarioService.getAcuario('getAcuario', this.user_id)
      .subscribe(data => {
        this.acuarios = data.acuarioData;
        console.log(this.acuarios);
      });

    console.log("ira a buscar usuario:");
    console.log(this.user_id);


    this.usuarioService.getUser(this.user_id, 'getUser')
      .subscribe(data => {
        
        this.usuarios = data.userData[0];
        console.log(this.usuarios);
      });


  }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(param => {
      this.user_id = param['user_id'];
    })
    this.usuarioService.getAcuario('getAcuario', this.user_id)
      .subscribe(data => {
        this.acuarios = data.acuarioData;
        console.log(this.acuarios);

      });
  }

  detailAcuario(idacuario) {
    this.router.navigate(['/detailacuario', this.user_id, idacuario]);
  }

  addAcuario() {
    this.router.navigate(['/addacuario',this.user_id]);
  }
  volver() {
    this.router.navigate(['/usuarios']);
  }


}

