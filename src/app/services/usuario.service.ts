import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn:'root'
  }
)
export class UsuarioService {
user;
  constructor(
    private http: HttpClient,
  ) { }

  isLoggedIn(){
    return !!this.user;
  }

  getUser() {
    return this.user;
  }

  setUser(user){
    this.user = user;
  }

  login(usuario, password){
    const headers = { 'Content-Type': 'application/json' };

    const body = JSON.stringify({usuario,password});
    
    return this.http.post("https://xpense.develotion.com/login.php",body,{ headers });
  }

    register(usuario, password){
    const headers = { 'Content-Type': 'application/json' };

    const body = JSON.stringify({usuario,password});
    
    return this.http.post("https://xpense.develotion.com/usuarios.php",body,{ headers });
  }

}