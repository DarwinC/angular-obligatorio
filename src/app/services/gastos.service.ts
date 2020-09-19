import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService} from '../services/usuario.service';

@Injectable({
  providedIn: "root"
})
export class GastosService {
//list=[];
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
  ) { }


  getAll() {
    const user = this.usuarioService.getUser();
    const headers = { 'Content-Type': 'application/json','apiKey':user.apiKey};
   // const body = JSON.stringify({itemIndex});
    return this.http.get(`https://xpense.develotion.com/gastos.php?id=${user.id}`,{ headers })

  }

  addItem(gasto) {
    //this.list.push(item);
    const headers = { 'Content-Type': 'application/json' };

    const body = JSON.stringify({gasto});
    return this.http.post("https://xpense.develotion.com/gastos.php",body,{ headers })

  }


  clearItems() {
    //this.list = [];
  }

  findItem(itemIndex){
    const headers = { 'Content-Type': 'application/json' };

    const index = JSON.stringify({itemIndex});
    return this.http.get("https://xpense.develotion.com/gastos.php"+"id="+index,{ headers })
  }

  removeItem(itemIndex){
   // this.list.splice(itemIndex);
    const headers = { 'Content-Type': 'application/json' };
    const index = +itemIndex;
    return this.http.delete("https://xpense.develotion.com/gastos.php"+"id="+index,{ headers })
  }

}