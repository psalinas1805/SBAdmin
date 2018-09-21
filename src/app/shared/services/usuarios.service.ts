import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // tslint:disable-next-line:no-inferrable-types
  apiUrl: string = 'http://happypez.tk/AuthServices/api/index.php/';


  constructor(private http: Http) { }


  getUsers(method) {
    console.log( 'getUsers usuario service' );
    return this.http.get(this.apiUrl + method)
        .map ( res => res.json());
      }


  searchUsers(usuario: string, method) {
    console.log("search usuario service");
    // tslint:disable-next-line:prefer-const
    let body: string = JSON.stringify(usuario);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();

console.log(body);


    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res => {
          // console.log(res.json);
          return res.json();
        });
  }

  getRegion(method){
    console.log("getUsers regiones service");
    
    return this.http.get(this.apiUrl + method)
        .map( res=> res.json());
  }


  getComuna(idregion,method){
    console.log("getUsers comunas service");
    
    
    let Url = this.apiUrl + method +"?idregion=" +idregion;
     
    return this.http.get(Url + method)
        .map( res=> res.json());
  }

  signUp(usuario:Usuario, method){
    console.log("sigUp usuario service");
    
    let body = JSON.stringify(usuario);
    let headers = new Headers();

    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          //console.log(res.json);
          return res.json();
        });
  }

  editUser(usuario:Usuario, method){
    console.log("sigUp usuario service");

    let body = JSON.stringify(usuario);
    let headers = new Headers();

    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          //console.log(res.json);
          return res.json();
        });
  }



  postData(data, type) {   
    return new Promise((resolve, reject) => {
      let body = JSON.stringify(data);
      let headers = new Headers();
      this.http.post(this.apiUrl + type, body, { headers: headers })
        .subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (data: any ) => {         
            resolve(data.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

}
