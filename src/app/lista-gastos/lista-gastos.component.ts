import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service'
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit {
gastos;
  constructor(
    private gastosService: GastosService,
    private router: Router,
    private userService: UsuarioService,
  ) { }


  /*
  clickMe(){
    alert("Bootstap working");
  }
  */
  ngOnInit() {
if(!this.userService.isLoggedIn()){
  this.router.navigate(['']);
}
  this.gastosService.getAll().subscribe(a => {
  //    this.gastosService.getAll().subscribe(res => {
      console.log(a);
      this.gastos = a['gastos'];
      console.log("Se consulto el listado de gastos");
    },
    err => {
      if(err.status === 500){
        console.log("Ha ocurrido un error en el servidor");
      }
    });
  }
  
  eliminar(idgasto){
    this.gastosService.remove(idgasto).subscribe(a => {
      console.log(a);
    },
    err=>{
      console.log("Ha ocurrido un error");
      console.log(err);
    });
  }

}