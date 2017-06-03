import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplePorfolioComponent } from './simple-porfolio/simple-porfolio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { FlexboxLayoutComponent } from './flexbox-layout/flexbox-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplePorfolioComponent,
    NavBarComponent,
    CardComponent,
    FlexboxLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
