import { Component } from '@angular/core';
import {IonicPage,NavController, NavParams} from 'ionic-angular';
import {Http, RequestOptions,Headers} from "@angular/http";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
  comment: any = ["xyz", "ghj", "fjr"];
  students: any;
  addcomment: string;
  student_name: string;
  student_batch: string;
  student_year: string;
  student_all: any;
  update: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataFetch: DatafetchProvider, public http: Http) {
    this.getdata();
  }

  getdata(){
    this.dataFetch.load().then((data) => {
      this.students=data;
      this.student_all = this.students.students;
      console.log(data);
    });
  }

  // gotosecond()
  // {
  //   this.navCtrl.setRoot(SecondPage);
  // }

  // login() {
  //   if (this.username == "Swati" && this.password == "12345")
  //     this.navCtrl.push(FirstpagePage, {"user": this.username});
  // }

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

  setdata(){

    this.update = {
      username: this.username,
      password: this.password,
    }

    console.log("data sending");
    var headers = new Headers();

    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin','*');
    let options = new RequestOptions({headers: headers});

    this.http.post(' https://summervehicle.herokuapp.com/well', JSON.stringify(this.update), options)
      .map(res=> res.json()).subscribe(data=> {
      console.log(data)
    }, err=>{
      console.log("Error:", err.json);
    });
  }


  ionViewDidLoad(){
    console.log('ionviewdidload loginpage');
  }

}
