import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplePorfolioComponent } from './simple-porfolio/simple-porfolio.component';
const routes: Routes = [
  {
    path: '', component: SimplePorfolioComponent, pathMatch: 'full',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
