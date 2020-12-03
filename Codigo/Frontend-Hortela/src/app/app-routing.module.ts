import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CulturaComponent } from './cultura/cultura.component';
import { HomeComponent } from './home/home.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
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
