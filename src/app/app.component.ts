import { Component } from '@angular/core';

@Component({
  selector: 'ngf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navs = [
    {link: 'card', title: 'Card Component'},
    {link: 'flex', title: 'Flexbox Layout'},
    {link: 'navbar', title: 'Navigation Bar'},
    {link: 'simple', title: 'Simple Portfolio'}
  ];
}
