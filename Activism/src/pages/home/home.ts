import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProfilePage} from '../profile/profile';
import {OrganizationsPage} from "../organizations/organizations";
import {ActivistPage} from "../activist/activist";
import {activistdata} from '../../providers/activistdata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [activistdata],
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoOrg(event){
    this.navCtrl.push(OrganizationsPage);
  }

  gotoAct(event){
    this.navCtrl.push(ActivistPage);
  }

}
