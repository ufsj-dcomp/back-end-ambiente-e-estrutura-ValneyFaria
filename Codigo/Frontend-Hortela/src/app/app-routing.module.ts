import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaComponent } from './cultura/cultura.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  { path: 'cultura', component: CulturaComponent },
  { path: 'venda', component: VendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
