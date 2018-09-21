import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router } from '@angular/router';

import { UsuariosService } from '../../shared/services/usuarios.service';
import { Usuario } from "../../shared/interfaces/usuario.interface";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [routerTransition()]
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario;
  pushRightClass: string = 'push-right';


  constructor(private usuarioService: UsuariosService, private router: Router) {



    this.usuarioService.getUsers('getUsers')
    .subscribe(data => {
      this.usuarios = data.userData;
      console.log(this.usuarios);
    });


   }

  ngOnInit() {
  }

  addUser() {
    this.router.navigate(['signup','nuevo']);
  }
  editUser(user_id) {
    this.router.navigate(['signup','user_id']);
  }
 
}
