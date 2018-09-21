import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UsuariosService } from '../shared/services/usuarios.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    responseData: any;
    userData = {"username": "", "password": ""};
    divAccess = false;

    constructor(private usuarioService: UsuariosService, private router: Router) { }


    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login() {
        console.log("login: ");
        
        console.log(this.userData.username);
        console.log(this.userData.password);
        
        if (this.userData.username  && this.userData.password) {
        this.usuarioService.postData(this.userData, 'login').then((result) => {   
            this.responseData = result;
            if (this.responseData.userData) {
              localStorage.setItem('userData', JSON.stringify(this.responseData));
              localStorage.setItem('isLoggedin', 'true');
              this.router.navigate(['/dashboard', this.responseData]);
            } else {
              this.divAccess = true;
            }
          });
        }
      }


}
