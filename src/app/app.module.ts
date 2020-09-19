import { NgModule } from "@angular/core";
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


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component:  LoginComponent},
      { path: "gastos", component:  ListaGastosComponent},
      { path: "registro", component:  RegistroComponent},

    ])
  ],
  declarations: [AppComponent, TopBarComponent, ListaGastosComponent, FooterComponent, RegistroComponent, LoginComponent, ListaRubrosComponent],
  bootstrap: [AppComponent],

})
export class AppModule {}
