import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngf-flexbox-layout',
  templateUrl: './flexbox-layout.component.html',
  styleUrls: ['./flexbox-layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexboxLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
