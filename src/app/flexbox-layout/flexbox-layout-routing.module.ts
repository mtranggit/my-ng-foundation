import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexboxLayoutComponent } from './flexbox-layout.component';

const routes: Routes = [
    { path: '', component: FlexboxLayoutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlexboxLayoutRoutingModule { }

export const routedComponents = [
    FlexboxLayoutComponent
];
