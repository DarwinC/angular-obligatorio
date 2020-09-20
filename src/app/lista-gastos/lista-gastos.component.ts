import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service'
import { Router } from '@angular/router';
import { RubrosService } from '../services/rubros.service';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements OnInit {
gastos;
rubros;
test=['a','b','c'];
  constructor(
    private gastosService: GastosService,
    private rubrosService: RubrosService,
    private router: Router,
  ) { }


  /*
  clickMe(){
    alert("Bootstap working");
  }
  */
  ngOnInit() {

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

/*
  this.rubrosService.getAll().subscribe(a => {
  //    this.gastosService.getAll().subscribe(res => {
      console.log(a);
      //this.rubros = a.rubros;
      console.log("Se consulto el listado de gastos");
    },err => {

      if(err.status === 500){
        console.log("Ha ocurrido un error en el servidor");
      }
    });
  */
  }

}