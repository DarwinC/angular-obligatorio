import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService} from '../services/usuario.service';

@Injectable(
    providedIn: "root"
)
export class RubrosService {

  constructor(
          private http: HttpClient,
          private usuarioService: UsuarioService,
  ) { }

  getAll() {
    const user = this.usuarioService.getUser();
    const headers = { 'Content-Type': 'application/json','apiKey':user.apiKey};
   // const body = JSON.stringify({itemIndex});
    return this.http.get(`https://xpense.develotion.com/rubros.php?id=${user.id}`,{ headers })

  }
}