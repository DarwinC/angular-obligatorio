import { Component, OnInit } from "@angular/core";
import { GastosService } from "../services/gastos.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-gasto",
  templateUrl: "./add-gasto.component.html",
  styleUrls: ["./add-gasto.component.css"]
})
export class AddGastoComponent implements OnInit {
  errMsg;
  addGastoForm;

  constructor(private gastosService: GastosService, private router: Router) {}

  ngOnInit() {}

  onSubmit(registerData) {
    this.errMsg = undefined;
    // Process checkout data here
    this.addGastoForm.reset();

    console.warn("Login information", registerData);

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
