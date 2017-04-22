import { Component } from '@angular/core';

/**
 * Generated class for the Member component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'member',
  templateUrl: 'member.html'
})
export class Member {

  text: string;

  constructor() {
    console.log('Hello Member Component');
    this.text = 'Hello World';
  }

}
