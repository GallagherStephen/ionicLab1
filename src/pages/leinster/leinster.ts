import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeinsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leinster',
  templateUrl: 'leinster.html',
})
export class LeinsterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeinsterPage');
  }

  openLeinsterPage(){

    this.navCtrl.push('LeinsterPage'); //push u to the leinster page when method called
   }

   openLeinsterCountiesPage(){
    console.log("hello");
    this.navCtrl.push('LeinsterCountiesPage'); //push u to the leinsterCounties page when method called
   }
}
