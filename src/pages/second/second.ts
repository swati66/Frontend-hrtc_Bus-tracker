import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {FormBuilder, FormGroup} from "@angular/forms";

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  username: string;


  // slideTwoForm: FormGroup;
  // constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
  //
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.username=this.navParams.get("user")
    console.log("Hello");
  }

  // login(){
  //  if(this.username.maxLength(30) && this.name.pattern('[a-zA-Z ]*') )
  //     this.navCtrl.push( accounthomepage);
  //   }
  // }
}
