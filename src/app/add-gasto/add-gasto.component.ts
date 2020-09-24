import { Component, OnInit } from "@angular/core";
import { GastosService } from "../services/gastos.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { RubrosService } from "../services/rubros.service";
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";

@Component({
  selector: "app-add-gasto",
  templateUrl: "./add-gasto.component.html",
  styleUrls: ["./add-gasto.component.css"]
})
export class AddGastoComponent implements OnInit {
  
  errMsg;
  addGastoForm;
  rubros;
  myDropDown;

/* tipos de toast
'success'
'danger'
'warning'
'info'
'primary'
'secondary'
'dark'
'light'
*/
  constructor(
    private toaster: Toaster,
    private gastosService: GastosService,
    private router: Router,
    private rubrosService: RubrosService,
    private formBuilder: FormBuilder
  ) {
    this.addGastoForm = this.formBuilder.group({
      nombre: "",
      monto: "",
      rubro: ""
    });
  }

  ngOnInit() {
    this.obtenerRubros();
    
  }
// evento de cambio del select
  onChangeofOptions(newGov) {
    console.log(newGov);
  }
// obtengo los rubros
  obtenerRubros() {
    this.rubrosService.getAll().subscribe(
      a => {
        console.log(a);
        this.rubros = a["rubros"];
        console.log("Se consulto el listado de rubros");
      },
      err => {
        if (err.status === 500) {
          this.showToast('warning','Titulo','Un mensaje','top-center');
          console.log("Ha ocurrido un error en el servidor");
        }
      }
    );
  }
// el toast
  showToast(tipo,title,msg,posicion) {
    const type=tipo;
    this.toaster.open({
      text: msg,
      caption: type + ' ' + title,
      type: type,
      position: posicion,
    });
  }
// el agregado de gasto
  onSubmit(registerData) {
    this.errMsg = undefined;
    // Process checkout data here
    this.addGastoForm.reset();

    console.warn("Gasto information", registerData);

    //const { usuario, password } = registerData;

    this.gastosService
      .add(registerData.nombre, registerData.monto, registerData.rubro)
      .subscribe(
        gasto => {
          this.showToast('success','Agregado','Se agregó el gasto','top-center');
          this.router.navigate(["/gastos"]);
        },
        err => {
          if (err.status === 409) {
            this.errMsg = "Error.";
          }
        }
      );
  }
}