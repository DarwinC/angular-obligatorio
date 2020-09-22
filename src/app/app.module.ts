import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ListaGastosComponent } from './lista-gastos/lista-gastos.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListaRubrosComponent } from './lista-rubros/lista-rubros.component';
import { AddGastoComponent } from './add-gasto/add-gasto.component';
import { ListaGastos2Component } from './lista-gastos2/lista-gastos2.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component:  LoginComponent},
      { path: "login", component:  LoginComponent},
      { path: "gastos", component:  ListaGastosComponent},
      { path: "gastos2", component:  ListaGastos2Component},
      { path: "gastos/agregar-gasto", component:  AddGastoComponent},
      { path: "rubros", component:  ListaRubrosComponent},
      { path: "registro", component:  RegistroComponent},

    ])

],
    schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [AppComponent, TopBarComponent, ListaGastosComponent, FooterComponent, RegistroComponent, LoginComponent, ListaRubrosComponent, AddGastoComponent, ListaGastos2Component],
  bootstrap: [AppComponent],

})
export class AppModule {}
