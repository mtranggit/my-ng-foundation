import { NgModule } from '@angular/core';
import { NavBarRoutingModule, routedComponents } from './nav-bar-routing.module';

@NgModule({
    imports: [NavBarRoutingModule],
    declarations: routedComponents
})
export class NavBarModule { }
