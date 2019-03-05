import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UlsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ulster',
  templateUrl: 'ulster.html',
})
export class UlsterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UlsterPage');
  }

  openUlsterPage(){

    this.navCtrl.push('UlsterPage'); //push u to the Ulster page when method called
   }
}
