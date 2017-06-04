import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplePortfolioComponent } from './simple-portfolio.component';

const routes: Routes = [
  { path: '', component: SimplePortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplePortfolioRoutingModule { }

export const routedComponents = [SimplePortfolioComponent];