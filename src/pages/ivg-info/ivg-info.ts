import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Device } from '@ionic-native/device';
import { HomePage } from '../home/home';

/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-ivg-info',
 	templateUrl: 'ivg-info.html',
 })
 export class IvgInfoPage {
 	tableAnswer:any;
 	last:any;
 	result:any;
	apiUrlStat:string;
	pregnant:any;
	datetest:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, private device: Device, public http: Http) {
 
 		this.apiUrlStat = "https://ciconia.io/api/addStat/";
		this.tableAnswer = navParams.get('userParams');
		this.http.post(this.apiUrlStat+"yes"+"&question&"+Date.now()+"&ivg-step&"+this.device.uuid, "")
				.map(res => res.json()).subscribe(data => {	}, err => { });

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad IvgInfoPage');

 		this.tableAnswer.push({ answerUser :  Math.round((( new Date().getTime() - this.tableAnswer[2].answerUser.getTime() ) / (1000 * 60 * 60 * 24 )) / 7)});
 		this.tableAnswer.push({ answerUser: 14 - this.tableAnswer[33].answerUser});
 		console.log(this.tableAnswer[33].answerUser);
 		this.datetest = 28 - (this.tableAnswer[33].answerUser * 7);
 		console.log(this.datetest);
 		this.result = 14 - this.tableAnswer[33].answerUser;
 		this.pregnant = this.tableAnswer[1].answerUser;
	 	}

    nextBegin(){
    	this.navCtrl.setRoot(HomePage, { });
    }
 }
