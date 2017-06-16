import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirstpagePage} from "../firstpage/firstpage";
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  firstpage=FirstpagePage;
  constructor(public navCtrl: NavController) {

  }

  goto()
  {
    this.navCtrl.push(FirstpagePage,{"name": "Swati"});
  }



gotosecond()
{
  this.navCtrl.setRoot(SecondPage);
}
}
