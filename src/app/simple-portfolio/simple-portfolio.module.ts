import { NgModule } from '@angular/core';

import { SimplePortfolioRoutingModule, routedComponents } from './simple-portfolio-routing.module';

@NgModule({
    imports: [SimplePortfolioRoutingModule],
    declarations: routedComponents
})
export class SimplePortfolioModule { }
