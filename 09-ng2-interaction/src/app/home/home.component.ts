import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'simple-form',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.Native
})
export class HomeComponent {
  public imageBox = require('../../assets/img/ipt-box.png');
}