import { Component, OnInit } from "@angular/core";
import { GastosService } from "../services/gastos.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { RubrosService } from "../services/rubros.service";
import { IgxToastPosition } from "igniteui-angular";


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

  constructor(
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

  onChangeofOptions(newGov) {
    console.log(newGov);
  }

  obtenerRubros() {
    this.rubrosService.getAll().subscribe(
      a => {
        console.log(a);
        this.rubros = a["rubros"];
        console.log("Se consulto el listado de rubros");
      },
      err => {
        if (err.status === 500) {
          console.log("Ha ocurrido un error en el servidor");
        }
      }
    );
  }

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
          console.log(gasto);
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
