import { Component, OnInit } from '@angular/core';

export class Cultura {
  id: number;
  variedade: string;
  data_plantio: string;
  dias_colheita: number;
  qtd_plantada: number;
}

const CULTURAS: Cultura[] = [
  { id: 1, variedade: 'alface', data_plantio: '29/05/2020', dias_colheita: 50, qtd_plantada: 30 },
  { id: 2, variedade: 'couve', data_plantio: '12/07/2020', dias_colheita: 80, qtd_plantada: 45 }
];


@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'variedade', 'data_plantio', 'dias_colheita', 'qtd_plantada'];
  dataSource: typeof CULTURAS;

  constructor() { }

  ngOnInit(): void {
  }

}
