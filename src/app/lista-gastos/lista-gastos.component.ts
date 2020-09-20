import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service'
import { Router } from '@angular/router';


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