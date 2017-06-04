import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngf-simple-portfolio',
  templateUrl: './simple-portfolio.component.html',
  styleUrls: ['./simple-portfolio.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplePortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
