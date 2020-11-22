import { Component, OnInit } from '@angular/core';
import { CulturaService } from '../cultura.service';

export class Cultura {
  idcultura: number;
  tipo_cultura: string;
  data_plantio: string;
  dias_colheita: number;
  qtd_plantada: number;
}

const CULTURAS: Cultura[] = [
  { idcultura: 1, tipo_cultura: 'alface', data_plantio: '29/05/2020', dias_colheita: 50, qtd_plantada: 30 },
  { idcultura: 2, tipo_cultura: 'couve', data_plantio: '12/07/2020', dias_colheita: 80, qtd_plantada: 45 }
];


@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent implements OnInit {

  displayedColumns: string[] = ['idcultura', 'tipo_cultura', 'data_plantio', 'dias_colheita', 'qtd_plantada'];
  dataSource = CULTURAS;

  constructor(private service: CulturaService) { }

  // Método chamado quando a página é renderizada
  ngOnInit() {
    this.service.getCulturas().subscribe(culturas => this.dataSource = culturas);
  }

}
