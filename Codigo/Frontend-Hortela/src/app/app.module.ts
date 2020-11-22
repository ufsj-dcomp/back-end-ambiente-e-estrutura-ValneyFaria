// Permite importar componentes que queira usar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CulturaComponent, MngCulturaDialog } from './cultura/cultura.component';
import { VendaComponent } from './venda/venda.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CulturaComponent,
    VendaComponent,
    MngCulturaDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  entryComponents: [
    MngCulturaDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
