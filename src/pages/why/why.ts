import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-why',
 	templateUrl: 'why.html',
 })
 export class WhyPage {
 	tableAnswer:any;
 	last:any;
 	result:any;
	apiUrlStat:string;
	pregnant:any;
	datetest:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, private device: Device, public http: Http) {
 
 		this.apiUrlStat = "https://ciconia.io/api/addStat/";
		this.http.post(this.apiUrlStat+"why"+"&visite&"+Date.now()+"&why&"+this.device.uuid, "")
				.map(res => res.json()).subscribe(data => {	}, err => { });

 	}

 	ionViewDidLoad() {
	 	}

    nextBegin(){
    	window.location.reload();
    }
 }
