import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Home } from '../home/home';
import { Home1 } from '../home1/home1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Home1;

  constructor() {

  }
}
