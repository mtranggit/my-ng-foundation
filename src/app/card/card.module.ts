import { NgModule } from '@angular/core';
import { CardRoutingModule, routedComponents } from './card-routing.module';

@NgModule({
    imports: [CardRoutingModule],
    declarations: routedComponents
})
export class CardModule { }
