import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Home } from '../home/home';
import { LocList } from '../LocList/LocList';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LocList;

  constructor() {

  }
}
