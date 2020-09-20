import { Component, OnInit } from '@angular/core';
import { RubrosService } from '../services/rubros.service';

@Component({
  selector: 'app-lista-rubros',
  templateUrl: './lista-rubros.component.html',
  styleUrls: ['./lista-rubros.component.css']
})
export class ListaRubrosComponent implements OnInit {
rubros;
  constructor(
    private rubrosService: RubrosService,
  ) { }

  ngOnInit() {

  this.rubrosService.getAll().subscribe(a => {
      console.log(a);
      this.rubros = a['rubros'];
      console.log("Se consulto el listado de rubros");
    },
    err => {
      if(err.status === 500){
        console.log("Ha ocurrido un error en el servidor");
      }
    });

  }

}