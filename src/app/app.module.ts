import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Home } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import { LocList } from '../pages/LocList/LocList';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocListModule } from '../pages/LocList/LocListModule';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    Home,
    TabsPage//,
    //LocList
  ],
  imports: [
    BrowserModule,LocListModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    Home,
    //LocList,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
