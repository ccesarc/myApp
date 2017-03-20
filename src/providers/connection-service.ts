import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ConnectionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectionService {
  
  usuarios:any;

  constructor(public http: Http) {
    console.log('Hello ConnectionService Provider');
  }

  //https://randomuser.me/api/?results=10

  getLoginUser(email:string,senha:string) : Promise <Response> {
    if(email==undefined){
      email = '00000000';
    }
    return this.http.get('http://viacep.com.br/ws/'+ email.trim() +'/json/').toPromise();
  }

  getLoginUser2(page:string,results:string) : Promise <Response> {
    if(page==''){
      page = '1';
    }
    if(results==''){
      results = '10';
    }
    return this.http.get('https://randomuser.me/api/?page='+page+'&results='+results).toPromise();
  }

  getUser(){
    this.usuarios = localStorage.getItem("usuarios");
    return JSON.parse(this.usuarios)
  }

  logOutUser(){
    this.usuarios = localStorage.removeItem("usuarios");
  }

}