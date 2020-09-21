import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioService } from "../services/usuario.service";

@Injectable({
  providedIn: "root"
})
export class GastosService {
  //list=[];
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  getAll() {
    const user = this.usuarioService.getUser();
    const headers = { "Content-Type": "application/json", apiKey: user.apiKey };
    // const body = JSON.stringify({itemIndex});
    return this.http.get(
      `https://xpense.develotion.com/gastos.php?id=${user.id}`,
      { headers }
    );
  }

  add(nombre, monto, idRubro) {
    const user = this.usuarioService.getUser();
    const idUsuario = user.id;
    const headers = { "Content-Type": "application/json", apiKey: user.apiKey };

    const body = JSON.stringify({ nombre, monto, idRubro, idUsuario });

    return this.http.post(`https://xpense.develotion.com/gastos.php`, body, {
      headers
    });
  }

  /*
  clearItems() {
    //this.list = [];
  }*/
  /*
  findItem(itemIndex){
    const headers = { 'Content-Type': 'application/json' };

    const index = JSON.stringify({itemIndex});
    return this.http.get("https://xpense.develotion.com/gastos.php"+"id="+index,{ headers })
  }
*/
  remove(index) {
    // this.list.splice(itemIndex);
    const user = this.usuarioService.getUser();
    const body = { idGasto: index };
    const headers = { "Content-Type": "application/json", apiKey: user.apiKey };
    //return this.http.delete(`https://xpense.develotion.com/gastos.php`,{[headers,body]);

    return this.http.request(
      "delete",
      `https://xpense.develotion.com/gastos.php`,
      { body: body, headers: headers }
    );
  }

  removeAll() {}
}
