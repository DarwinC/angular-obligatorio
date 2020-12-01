import { Component, OnInit, Inject } from "@angular/core";
import { GastosService } from "../services/gastos.service";
import { Router } from "@angular/router";
import { UsuarioService } from "../services/usuario.service";
import { RubrosService } from "../services/rubros.service";

@Component({
  selector: "app-lista-gastos",
  templateUrl: "./lista-gastos.component.html",
  styleUrls: ["./lista-gastos.component.css"]
})
export class ListaGastosComponent implements OnInit {
  gastos;
  rubros;
  constructor(
    private gastosService: GastosService,
    private rubrosService: RubrosService,
    private router: Router,
    private userService: UsuarioService
  ) {}

  /*
  clickMe(){
    alert("Bootstap working");
  }
  */
  ngOnInit() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate([""]);
    }
    this.obtenerRubros();

  }

  obtenerGastos() {
    this.gastosService.getAll().subscribe(
      a => {
        console.log(a);
        this.gastos = a["gastos"];
        console.log("Se consulto el listado de gastos");
      },
      err => {
        if (err.status === 500) {
          console.log("Ha ocurrido un error en el servidor");
        }
      }
    );
  }

  eliminar(idgasto) {
    this.gastos;
    this.gastosService.remove(idgasto).subscribe(
      a => {
        this.obtenerGastos();
      },
      err => {
        console.log("Ha ocurrido un error");
        console.log(err);
      }
    );
  }

obtenerRubros(){
      this.rubrosService.getAll().subscribe(a => {

      this.rubros = a['rubros'];
      this.obtenerGastos();
      console.log("Se consulto el listado de rubros");
    },
    err => {
      if(err.status === 500){
        console.log("Ha ocurrido un error en el servidor");
      }
    });
  }

  obtenerNombreRubro(idRubro){
    return this.rubros.find(element=>element['id']===idRubro)['nombre'];
  }
}
