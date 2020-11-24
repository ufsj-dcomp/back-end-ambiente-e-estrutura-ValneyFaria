import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CulturaService } from '../cultura.service';

export class Cultura {
  idcultura: number;
  tipo_cultura: string;
  data_plantio: string;
  dias_colheita: number;
  qtd_plantada: number;
}

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent implements OnInit {

  displayedColumns: string[] = ['idcultura', 'tipo_cultura', 'data_plantio', 'dias_colheita', 'qtd_plantada', 'acoes'];

  dataSource = new MatTableDataSource<Cultura>();

  constructor(private service: CulturaService, public dialog: MatDialog) { }

  // Método chamado quando a página é renderizada
  ngOnInit() {
    this.service.getCulturas().subscribe(culturas => this.dataSource.data = culturas);
  }

  openNewDialog(): void {
    const dialogRef = this.dialog.open(MngCulturaDialog, {
      width: '750px',
      data: new Cultura()
    });

    dialogRef.afterClosed().subscribe(cultura => {
      console.log(cultura);
      this.service.adicionar(cultura).subscribe(culturaId => {
        this.service.getCultura(culturaId).subscribe(newCultura => {
          this.dataSource.data = this.dataSource.data.concat(newCultura);
        });
      });
    })
  }

  openEditDialog(cultura: Cultura): void {
    const dialogRef = this.dialog.open(MngCulturaDialog, {
      width: '750px',
      data: cultura
    });

    dialogRef.afterClosed().subscribe(cultura => {
      console.log(cultura);
      this.service.editar(cultura).subscribe(_ => {
        this.dataSource.data = this.dataSource.data.map(oldCultura => {
          if (oldCultura.idcultura == cultura.idcultura) return cultura;

        });
      });
    })
  }

  excluir(cultura: Cultura): void {
    this.service.remover(cultura.idcultura).subscribe(_ => {
      this.dataSource.data = this.dataSource.data.filter(oldCultura => oldCultura.idcultura != cultura.idcultura);
    })
  }

}

@Component({
  selector: 'dialog-mng-cultura',
  templateUrl: 'dialog-mng-cultura.html'
})

export class MngCulturaDialog {

  constructor(public dialogRef: MatDialogRef<MngCulturaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Cultura) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

