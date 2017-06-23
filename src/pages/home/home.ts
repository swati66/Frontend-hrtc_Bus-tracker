import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirstpagePage} from "../firstpage/firstpage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  comment: any = ["xyz", "ghj", "fjr"];
  students: any = [{
    "name": "xyz",
    "batch": "2013",
    "year": "second"
  },

    {
      "name": "abs",
      "batch": "2014",
      "year": "third"
    },

    {
      "name": "mrt",
      "batch": "2012",
      "year": "first"
    }


  ];
  addcomment: string;
  student_name: string;
  student_batch: string;
  student_year: string;

  constructor(public navCtrl: NavController) {

  }

  // gotosecond()
  // {
  //   this.navCtrl.setRoot(SecondPage);
  // }

  login() {
    if (this.username == "Swati" && this.password == "12345")
      this.navCtrl.push(FirstpagePage, {"user": this.username});
  }

  addcomments() {
    this.comment.push(this.addcomment);
    this.addcomment = "";
  }

  delcomments(item) {
    // this.comment.pop(indexForItem);
    let index = this.comment.indexOf(item);

    if (index > -1) {
      this.comment.splice(index, 1);
    }

    // this.comment.splice(i, 1);

  }

  addStudent() {
    this.students.push({"name":this.student_name,
                      "batch": this.student_batch,
                        "year": this.student_year});
    this.student_name="";
    this.student_batch="";
    this.student_year="";


  }

}
