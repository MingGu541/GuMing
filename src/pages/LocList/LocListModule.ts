import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocList } from './LocList';
import {popoverList} from './popover'

@NgModule({
  declarations: [
    LocList,popoverList
  ],
  imports: [
    IonicPageModule.forChild(LocList),
    IonicPageModule.forChild(popoverList),
  ],
  exports: [
    LocList,popoverList
  ]
})
export class LocListModule {}
