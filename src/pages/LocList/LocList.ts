import { Component } from '@angular/core';
// import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {popoverList} from './popover'

import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-LocList',
  templateUrl: 'LocList.html',
})
export class LocList {
  authHeaders = new Headers()
  hostURL = "http://host.cloud.anasit.com:8001/parse/"
  scenic:any 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController,
    public popCtrl:PopoverController,
    public http: Http) 
  {
    this.authHeaders.append("X-Parse-Application-Id","dev.cloud")
    this.authHeaders.append("X-Parse-Master-Key","angularionic")
    this.authHeaders.append("Content-Type","application/json; charset=utf-8")
    
    let url = this.hostURL+ "classes/"+"Scenic" 
    this.http.get(url,{   
       headers:this.authHeaders
    }).toPromise().then(data=>{
      if(data&&data.json().results)
      {
        this.scenic = data.json().results
      }
    }).catch(err=>{
    console.log(err)
  })

    //  this.member = [
    //   {id:1,name:"冰峪沟",tel:110,img:"../../assets/icon/img/bingyugou.jpg"},
    //   {id:5,name:"樱花园",tel:112,img:"../../assets/icon/img/yinghuayuan.jpg"},
    //   {id:2,name:"星海公园",tel:119,img:"../../assets/icon/img/xinghai.jpg"},
    //   {id:3,name:"大黑石",tel:112,img:"../../assets/icon/img/daheishi.jpg"},
    //   {id:4,name:"付家庄",tel:129,img:"../../assets/icon/img/fujiazhuang.jpg"}];
  }
   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '景区排序',
      buttons: [
        {
          text: '升序',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.scenic.sort(function(a,b){return a.id -b.id;});
          }
        },{
          text: '降序',
          handler: () => {
            console.log('Archive clicked');
            this.scenic.sort(function(a,b){return b.id -a.id;});
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
  itemClick(sc) {

            console.log('itemClick');
            console.log(sc.img);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1');
  }

presentPopover(myEvent){ 
 // this.popCtrl.create(popoverList);
    let pop = this.popCtrl.create(popoverList);
    // pop.onDidDismiss(data=>{
    //   console.log(data)
    //   if(data){
    //     if(data == "user") {
    //       this.presentUserEditModal()
    //     }
    //     if(data == "top") {
    //       return
    //     }
    //   }
    // })
    pop.present({
      ev: myEvent
    })
  }

}
