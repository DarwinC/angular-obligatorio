import { Component, OnInit } from '@angular/core';
import { RubrosService } from '../services/rubros.service';

@Component({
  selector: 'app-lista-rubros',
  templateUrl: './lista-rubros.component.html',
  styleUrls: ['./lista-rubros.component.css']
})
export class ListaRubrosComponent implements OnInit {

  constructor(
    private rubrosService: RubrosService,
  ) { }

  ngOnInit() {
  }

}