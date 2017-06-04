import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SimplePorfolioComponent } from './simple-porfolio/simple-porfolio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
const routes: Routes = [
  { path: '', redirectTo: 'simple', pathMatch: 'full' },
  {
    path: 'navbar', component: NavBarComponent
  },
  {
    path: 'simple', component: SimplePorfolioComponent, pathMatch: 'full'
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
