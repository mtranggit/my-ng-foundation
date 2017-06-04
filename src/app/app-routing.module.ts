import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', redirectTo: 'simple', pathMatch: 'full' },
  {
    path: 'navbar',
    loadChildren: 'app/nav-bar/nav-bar.module#NavBarModule'
  },
  {
    path: 'simple',
    loadChildren: 'app/simple-portfolio/simple-portfolio.module#SimplePortfolioModule'
  },
  {
    path: 'flex',
    loadChildren: 'app/flexbox-layout/flexbox-layout.module#FlexboxLayoutModule'
  },
  {
    path: 'card',
    loadChildren: 'app/card/card.module#CardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
