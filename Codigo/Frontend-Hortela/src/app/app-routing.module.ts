import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaComponent } from './cultura/cultura.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'cultura', component: CulturaComponent },
      { path: 'venda', component: VendaComponent }
    ]
  },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
