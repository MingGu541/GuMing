import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemberList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {
  member:Array<any>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.member = [
      {id:1,name:"shennan",tel:110},
      {id:4,name:"jinpo",tel:119}]
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
