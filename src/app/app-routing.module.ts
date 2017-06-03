import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplePorfolioComponent } from './simple-porfolio/simple-porfolio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { FlexboxLayoutComponent } from './flexbox-layout/flexbox-layout.component';
const routes: Routes = [
  {
    path: '', component: SimplePorfolioComponent, pathMatch: 'full',
    children: []
  },
  {
    path: 'navbar', component: NavBarComponent, pathMatch: 'full'
  },
  {
    path: 'flex', component: FlexboxLayoutComponent, pathMatch: 'full'
  },
  {
    path: 'card', component: CardComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
