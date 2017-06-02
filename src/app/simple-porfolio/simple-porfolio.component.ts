import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngf-simple-porfolio',
  templateUrl: './simple-porfolio.component.html',
  styleUrls: ['./simple-porfolio.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplePorfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
