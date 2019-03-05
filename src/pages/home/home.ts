import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 openUlsterPage(){

  this.navCtrl.push('UlsterPage'); //push u to the ulster page when method called
 }

openMunsterPage(){

  this.navCtrl.push('MunsterPage'); //push u to the Munster page when method called
 }

openConnaughtPage(){

  this.navCtrl.push('ConnaughtPage'); //push u to the connaught page when method called
 }

 openLeinsterPage(){

  this.navCtrl.push('LeinsterPage'); //push u to the leinster page when method called
 }

}


