import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: "root"
})
export class AuthService {

  apiUrl:string = 'http://happypez.cf/AuthServices/api/index.php/';


  constructor(public http: Http) {
  }


signUp( usuario: Usuario) {

  let body = JSON.stringify(usuario);
  let headers = new Headers({
    'Content-Type': 'application/json'
  });

  // return this.http.post( this.apiUrl, body, { headers:headers } )
  //      .map( res =>{
  //      console.log(res.json());
  //      return res.json();
  //      });

}

   postData(credenciales, type) {

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(this.apiUrl + type, JSON.stringify(credenciales), { headers: headers })
        .subscribe(
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
