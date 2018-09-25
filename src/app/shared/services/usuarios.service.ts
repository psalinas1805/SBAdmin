import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl:string = 'http://happypez.tk/AuthServices/api/index.php/';


  constructor(private http: Http) { }


  getUsers(method){
    console.log("getUsers usuario service");
    
    return this.http.get(this.apiUrl + method)
        .map( res=> res.json());
  }
  
  getUser(user_id, method){
    console.log("search usuario service");
    
    let userData = {'user_id':''}
    userData.user_id = user_id;
    let body = JSON.stringify(userData);
    console.log(userData);
    
    let headers = new Headers();

    console.log("El metodo es: " , method , "y el body es: ", body);

    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          console.log("respuesta: ");
          console.log(res.json());
          return res.json();
        });
  }



  
  searchUsers(usuario:string, method){
    console.log("search usuario service");
    
    let body = JSON.stringify(usuario);
    let headers = new Headers();

console.log(body);


    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          //console.log(res.json);
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
          (data: any ) => {         
            resolve(data.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getAcuarios(method){
    console.log("getAcuarios");
    
    return this.http.get(this.apiUrl + method)
        .map( res=> res.json());
  }

  getAcuario(method, user_id){
    console.log("getAcuario");
    let userData = {'user_id':''}
    userData.user_id = user_id;
    let body = JSON.stringify(userData);
    let headers = new Headers();

    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          //console.log(res.json);
          return res.json();
        });
  }

  getAcuarioId(method, idacuario){
    console.log("getAcuarioId");
    let userData = {'idacuario':''}
    userData.idacuario = idacuario;
    let body = JSON.stringify(userData);
    let headers = new Headers();

    console.log();
    
    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          //console.log(res.json);
          return res.json();
        });
  }

  getDetailAcuario(method, idacuario){
    console.log("sigUp usuario service");
    let userData = {'idacuario':''}
    userData.idacuario = idacuario;
    let body = JSON.stringify(userData);
    let headers = new Headers();

    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          //console.log(res.json);
          return res.json();
        });
  }

  setConfigWeb(usuario:Usuario, method){
    console.log("setConfigWeb service");
    
    let body = JSON.stringify(usuario);
    let headers = new Headers();

    return this.http.post(this.apiUrl + method, body, {headers})
        .map( res=>{
          console.log(res.json);
          return res.json();
        });
  }

}
