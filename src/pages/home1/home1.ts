import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1 {

  member:Array<any>
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController) {
     this.member = [
      {id:1,name:"shennan",tel:110},
      {id:5,name:"guoqiang",tel:112},
      {id:2,name:"shihai",tel:119},
      {id:3,name:"jisheng",tel:112},
      {id:4,name:"jinpo",tel:129}];

  }
   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选项',
      buttons: [
        {
          text: '升序',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.member.sort(function(a,b){return a.id -b.id;});
          }
        },{
          text: '降序',
          handler: () => {
            console.log('Archive clicked');
            this.member.sort(function(a,b){return b.id -a.id;});
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1');
  }

}
