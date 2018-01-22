import { Component, Renderer } from '@angular/core';
import { NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { ResultPage } from '../result/result';
import { IvgInfoPage } from '../ivg-info/ivg-info';
import { CGUPage } from '../cgu/cgu';
import Questions from './questionFile';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Device } from '@ionic-native/device';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})

export class HomePage {
	@ViewChild('sliderOne') sliderOne: Slides;
	@ViewChild('realFormButton') realFormButton;
	@ViewChild(Nav) nav: Nav;
	cgu=false;
	Questions = [];
	Answers = [];
	questionForm:any;
	Question:any;

	totalStep = 0;
	currentStep = 0;
	activeLogo = false;
	activeLogoWrapper = false;
	activeWelcomeContent = false;
	isInitialized = false;
	apiUrlStat:string;
	apiUrlCGU:string;
	apiUrlAnswer:string;
	test:any;
	changing = false;
	number = false;
	yes:boolean;
	no:boolean;
	idn:boolean;
	yesSave:boolean;
	noSave:boolean;
	idnSave:boolean;
	date:any;
	answer:any;
	idyes:any;
	idno:any;
	ididn:any;

	data:any;
	dateR:any;
	CGU:any;
	verifCgu='false';

	constructor(private renderer: Renderer, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http, private device: Device) 
	{ 
		this.apiUrlStat = "https://ciconia.io/api/addStat/";
		this.apiUrlCGU = "https://ciconia.io/api/addCgu/";
		this.apiUrlAnswer = "https://ciconia.io/api/getAnswer/";
		this.Questions = Questions;

		this.http.post(this.apiUrlStat+"begin&launch App&"+Date.now()+"&"+this.device.uuid, "")
		.map(res => res.json()).subscribe(data => {	}, err => { });
		this.ngOnInit();
	}

	insertDB(obj)
	{
		this.http.post("https://ciconia.io/api/addAnswer/"
			+this.device.uuid+"&"
			+obj.idTable+"&"
			+obj.id+"&"
			+obj.answerUser+"&"
			+obj.answerUser1+"&"
			+obj.answerUser2+"&"
			+obj.answerUser3+"&"
			+obj.answerUser4+"&"
			+obj.answerUser5+"&"
			+obj.answerUser6+"&"
			+obj.answerUser7+"&"
			+obj.answerUser8+"&"
			+obj.answerUser9+"&"
			+obj.answerUser10+"&"
			+obj.answerUser11+"&"
			+obj.answerUser12+"&"
			+obj.answerUser13+"&"
			+Date.now(), "")
		.map(res => res.json()).subscribe(data => {	}, err => { });
	}

	goHome(){
		this.navCtrl.setRoot(HomePage, {});

	}

	ngOnInit() {
		this.Questions = Questions;
		var self = this;
		this.activeLogoWrapper = true;
		setTimeout(function() {
			self.activeLogo = true;
		}, 2500);
		setTimeout(function() {
			self.activeLogoWrapper = false;
			self.activeWelcomeContent = true;
		}, 5);
		console.log('ici');
		this.answer = [];
		this.no = false;
		this.yes = false;
		this.idn = false;
		this.yesSave = false;
		this.noSave = false;
		this.idnSave = false;
		if (this.device.uuid)
		{
			this.http.request(this.apiUrlAnswer+"0&"+this.device.uuid.toString())
			.subscribe((res => 
			{
				this.test = "passe la";
				console.log(res);
				if (res)
					this.data = res.json();
				this.test = this.apiUrlAnswer+"0&"+this.device.uuid.toString();
				console.log(this.data);

				var i = 0;
				while (this.data[i])
				{
				this.test = this.data[0][0].answerUser;
          if (this.data[i][0].idTable != "error")
          {
            if (this.data[i][0].idTable != 2)
            {
							this.Questions[this.data[i][0].idTable].answerUser = parseInt(this.data[i][0].answerUser); 
							this.Questions[this.data[i][0].idTable].answerUser1 = parseInt(this.data[i][0].answerUser1); 
							this.Questions[this.data[i][0].idTable].answerUser2 = parseInt(this.data[i][0].answerUser2); 
							this.Questions[this.data[i][0].idTable].answerUser3 = parseInt(this.data[i][0].answerUser3); 
							this.Questions[this.data[i][0].idTable].answerUser4 = parseInt(this.data[i][0].answerUser4); 
							this.Questions[this.data[i][0].idTable].answerUser5 = parseInt(this.data[i][0].answerUser5); 
							this.Questions[this.data[i][0].idTable].answerUser6 = parseInt(this.data[i][0].answerUser6); 
							this.Questions[this.data[i][0].idTable].answerUser7 = parseInt(this.data[i][0].answerUser7); 
							this.Questions[this.data[i][0].idTable].answerUser8 = parseInt(this.data[i][0].answerUser8); 
							this.Questions[this.data[i][0].idTable].answerUser9 = parseInt(this.data[i][0].answerUser9); 
							this.Questions[this.data[i][0].idTable].answerUser10 = parseInt(this.data[i][0].answerUser10); 
							this.Questions[this.data[i][0].idTable].answerUser11 = parseInt(this.data[i][0].answerUser11); 
							this.Questions[this.data[i][0].idTable].answerUser12 = parseInt(this.data[i][0].answerUser12); 
							this.Questions[this.data[i][0].idTable].answerUser13 = parseInt(this.data[i][0].answerUser13); 
						}
						else
							this.Questions[this.data[i][0].idTable].answerUser = new Date(this.data[i][0].answerUser); 
					}
					i++;
				}}),);
			this.test = this.Questions[0].answerUser;
			this.http.request("https://ciconia.io/api/getCgu/"+this.device.uuid.toString())
			.subscribe((res => 
			{
				if (res){
					this.data = res.json();
					if (this.data[0][0].idUser != "error")
					{
						this.verifCgu = 'true';
					}
					else
					{
						this.verifCgu = 'false';
					}
				}
			}),);
		}
		else
		{
			console.log(this.apiUrlAnswer+"0&991ede3502faa4d7");
			this.http.request(this.apiUrlAnswer+"0&991ede3502faa4d7")
			.subscribe((res => 
			{
				if (res)
					this.data = res.json();
				console.log(res);
				var i = 0;
				while (this.data[i])
				{
					if (this.data[i][0].idTable != "error")
					{
						if (this.data[i][0].idTable != 2)
						{
							this.Questions[this.data[i][0].idTable].answerUser = parseInt(this.data[i][0].answerUser); 
							this.Questions[this.data[i][0].idTable].answerUser1 = parseInt(this.data[i][0].answerUser1); 
							this.Questions[this.data[i][0].idTable].answerUser2 = parseInt(this.data[i][0].answerUser2); 
							this.Questions[this.data[i][0].idTable].answerUser3 = parseInt(this.data[i][0].answerUser3); 
							this.Questions[this.data[i][0].idTable].answerUser4 = parseInt(this.data[i][0].answerUser4); 
							this.Questions[this.data[i][0].idTable].answerUser5 = parseInt(this.data[i][0].answerUser5); 
							this.Questions[this.data[i][0].idTable].answerUser6 = parseInt(this.data[i][0].answerUser6); 
							this.Questions[this.data[i][0].idTable].answerUser7 = parseInt(this.data[i][0].answerUser7); 
							this.Questions[this.data[i][0].idTable].answerUser8 = parseInt(this.data[i][0].answerUser8); 
							this.Questions[this.data[i][0].idTable].answerUser9 = parseInt(this.data[i][0].answerUser9); 
							this.Questions[this.data[i][0].idTable].answerUser10 = parseInt(this.data[i][0].answerUser10); 
							this.Questions[this.data[i][0].idTable].answerUser11 = parseInt(this.data[i][0].answerUser11); 
							this.Questions[this.data[i][0].idTable].answerUser12 = parseInt(this.data[i][0].answerUser12); 
							this.Questions[this.data[i][0].idTable].answerUser13 = parseInt(this.data[i][0].answerUser13); 
						}
						else
							this.Questions[this.data[i][0].idTable].answerUser = new Date(this.data[i][0].answerUser); 
					}
					this.verifCgu = 'true';
					i++;
				}
			}));
			this.http.request("https://ciconia.io/api/getCgu/991ede3502faa4d7")
			.subscribe((res => 
			{
				if (res){
					this.data = res.json();
					if (this.data[0][0].idUser != "error")
						this.verifCgu = 'true';
					else
						this.verifCgu = 'false';
				}
				console.log(this.data);

			}),);
		}
	}

	init() {
		this.isInitialized = true;
		this.currentStep = this.sliderOne.getActiveIndex();
		this.totalStep = this.sliderOne.length();
		this.sliderOne.lockSwipes(true);

	}

	ionSlideDidChange() { 
		this.changing = false; 
	}

	ionSlideWillChange() {	
		this.changing = true; 
	}

	slideChanged() { 
		this.currentStep = this.sliderOne.getActiveIndex(); 
	}

	ngAfterViewInit() {	

	}

	handleNext() {
		let mouseclick = new MouseEvent('click', {bubbles: false});
		setTimeout(() => {
			this.renderer.invokeElementMethod(this.realFormButton.nativeElement, 'dispatchEvent', [mouseclick]);
		}, 10);
	}

	reintialiseValue(idn, no, yes) {
		this.no = no;
		this.yes = yes;
		this.idn = idn;
		this.yesSave = yes;
		this.noSave = no;
		this.idnSave = idn;
	}

	presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Sélectionnez au moins une des réponses',
			message: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
			buttons: ['OK']
		});
		alert.present();
	}

	alertInfo(id) {
		let alert = this.alertCtrl.create({
			title: this.Questions[id].infoTitle,
			message: this.Questions[id].infoText,
			buttons: ['OK']
		});
		alert.present();

	}

	nextForm(question) {
		this.http.post(this.apiUrlStat+question.type+"&clic next&"+Date.now()+"&"+question.id+"&"+this.device.uuid, "")
		.map(res => res.json()).subscribe(data => {	}, err => { });
		console.log(this.Questions);
		this.questionForm = question;
		if (this.questionForm.type == "number")
		{
			this.currentStep = this.questionForm.nextStep;
			if (this.questionForm.idTable == 9 && this.Questions[7].answerUser == this.number)
				this.currentStep = 12;
			this.Questions[this.questionForm.idTable].prevStep = this.questionForm.idTable;
			this.Questions[this.questionForm.idTable].answerUser = this.number;
			this.insertDB(this.Questions[this.questionForm.idTable]);
			if	(this.questionForm.answerUser < 0 || this.questionForm.answerUser === false)
			{
				let alert = this.alertCtrl.create({
					title: '',
					message: 'Veuillez rentrer un nombre valide',
					buttons: ['OK']
				});
				alert.present();
			}
			else if (this.questionForm.answerUser < 13 && this.questionForm.id == 1 || this.questionForm.answerUser > 46 && this.questionForm.id == 1)
			{
				let alert = this.alertCtrl.create({
					title: '',
					message: 'Avez-vous réellement '+this.questionForm.answerUser+' ans ?',
					buttons: 
					[
					{
						text: 'Oui',
						handler: () => {
							console.log('bien rentré');
							let alert = this.alertCtrl.create({
								title: 'Ce test n\'est pas adapté à votre situation',
								message: 'À votre âge une grossesse est nécessairement à très haut risque. Consultez un gynécologue.',
								buttons: ['OK']
							});
							alert.present();
						}
					},
					{
						text: 'Non',
						handler: () => { }	
					}
					]

				});
				alert.present();
			}
			else if	(this.questionForm.answerUser < 100 && this.questionForm.id == 27 || this.questionForm.answerUser > 220 && this.questionForm.id == 27)
			{
				let alert = this.alertCtrl.create({
					title: '',
					message: 'Mesurez-vous réellement '+this.questionForm.answerUser+' cm ?',
					buttons: 
					[
					{
						text: 'Oui',
						handler: () => {
							let alert = this.alertCtrl.create({
								title: 'Ce test n\'est pas adapté à votre situation',
								message: '',
								buttons: ['OK']
							});
							alert.present();
						}
					},
					{
						text: 'Non',
						handler: () => { }	
					}
					]
				});
				alert.present();
			}
			else if	(this.questionForm.answerUser < 30 && this.questionForm.id == 28 || this.questionForm.answerUser > 150 && this.questionForm.id == 28)
			{
				let alert = this.alertCtrl.create({
					title: '',
					message: 'Pesez-vous réellement '+this.questionForm.answerUser+' kg ?',
					buttons: 
					[
					{
						text: 'Oui',
						handler: () => {
							let alert = this.alertCtrl.create({
								title: 'Ce test n\'est pas adapté à votre situation',
								message: '',
								buttons: ['OK']
							});
							alert.present();
						}
					},
					{
						text: 'Non',
						handler: () => {	}	
					}
					]

				});
				alert.present();
			}
			else if	(this.questionForm.answerUser > 1440 && this.questionForm.id == 30)
			{
				let alert = this.alertCtrl.create({
					title: '',
					message: 'Mesurez-vous réellement '+this.questionForm.answerUser+' cm ?',
					buttons: 
					[
					{
						text: 'Oui',
						handler: () => {
							let alert = this.alertCtrl.create({
								title: 'Ce test n\'est pas adapté à votre situation',
								message: '',
								buttons: ['OK']
							});
							alert.present();
						}
					},
					{
						text: 'Non',
						handler: () => {	}	
					}
					]

				});
				alert.present();
			}
			else if	(this.questionForm.answerUser > 220 && this.questionForm.id == 31)
			{
				console.log(this.questionForm.answerUser);

				let alert = this.alertCtrl.create({
					title: '',
					message: 'Mesurez-vous réellement '+this.questionForm.answerUser+' cm ?',
					buttons: [
					{
						text: 'Oui',
						handler: () => {
							let alert = this.alertCtrl.create({
								title: 'Ce test n\'est pas adapté à votre situation',
								message: '',
								buttons: ['OK']
							});
							alert.present();
						}
					},
					{
						text: 'Non',
						handler: () => {	}	
					}
					]

				});
				alert.present();
			}
			else
				this.manageSlideTo();
		}
		else if (this.questionForm.type == "yesNoIdn")
		{
			if (this.yes)
			{
				this.currentStep =this.questionForm.nextStep1;
				this.Questions[this.questionForm.idTable].answerUser = 1;			
				this.insertDB(this.Questions[this.questionForm.idTable]);
				this.manageSlideTo();
			}
			else if (this.no)
			{
				this.currentStep =this.questionForm.nextStep2;
				this.Questions[this.questionForm.idTable].answerUser = 0;				
				this.insertDB(this.Questions[this.questionForm.idTable]);

				if (this.currentStep == 250)
				{
					this.reintialiseValue(false, true, false);
					this.navCtrl.setRoot(IvgInfoPage, { userParams: this.Questions });
				}
				this.manageSlideTo();
			}
			else if (this.idn)
			{
				this.currentStep = this.questionForm.nextStep3;
				this.Questions[this.questionForm.idTable].answerUser = 2;
				this.insertDB(this.Questions[this.questionForm.idTable]);
				if (this.currentStep == 250)
					this.navCtrl.setRoot(IvgInfoPage, { userParams: this.Questions });
				this.manageSlideTo();
			}
			else
				this.presentAlert();
		}
		else if (this.questionForm.type == "yesNo")
		{
			if (this.yes)
			{
				console.log(this.questionForm.idTable);
				console.log(this.Questions[7].answerUser);
				this.currentStep = this.questionForm.nextStep1;
				if (this.questionForm.idTable == 8 && this.Questions[7].answerUser == 1)
					this.currentStep = 12;
				if (this.questionForm.idTable == 14 && this.Questions[7].answerUser == 1)
					this.currentStep = 17
				this.Questions[this.questionForm.idTable].answerUser = 1;		
				this.insertDB(this.Questions[this.questionForm.idTable]);
				this.manageSlideTo();
			}
			else if (this.no)
			{
				this.currentStep = this.questionForm.nextStep2;
				this.Questions[this.questionForm.idTable].answerUser = 0;
				this.insertDB(this.Questions[this.questionForm.idTable]);
				this.manageSlideTo();
			}
			else
				this.presentAlert();
		}
		else if (this.questionForm.type == "date")
		{
			if (this.Questions[1].answerUser == 2)
				this.Questions[3].title = "Désireriez-vous cette grossesse ?";
			if (this.date)
			{
				this.currentStep = this.questionForm.nextStep;
				this.Questions[this.questionForm.idTable].answerUser = new Date(this.date);
				this.dateR =  Math.round((( new Date().getTime() - this.questionForm.answerUser.getTime() ) / (1000 * 60 * 60 * 24 )) / 7);
				if (this.device.uuid)
					this.insertDB(this.Questions[this.questionForm.idTable]);
				if (this.dateR < 42 && this.dateR >= 0)
					this.manageSlideTo();
			}
			else if (!this.Questions[this.questionForm.idTable].answerUser)
				this.presentAlert();
			if (this.dateR > 42)
			{
				let alert = this.alertCtrl.create({
					title: 'Vérifiez la date',
					message: 'D\'après votre réponse vous seriez enceinte depuis plus de 9 mois ce qui est impossible.' ,
					buttons: ['OK']
				});
				alert.present();

			}
			if (this.dateR < 0)
			{
				let alert = this.alertCtrl.create({
					title: 'Vérifiez la date',
					message: 'La question est la date de vos dernière règle et non des prochaines veuillez renseigner cette date.',
					buttons: ['OK']
				});
				alert.present();

			}
		}
		else if (this.questionForm.type == "multipleChoice"
			|| this.questionForm.type == "multipleIf"
			|| this.questionForm.type == "Psycho1")
		{
			if (this.questionForm.id == 18 && !this.answer.one)
				this.questionForm.nextStep = 20;
			this.currentStep = this.questionForm.nextStep;
			this.Questions[this.questionForm.idTable].answerUser1 = this.answer.one;
			this.Questions[this.questionForm.idTable].answerUser2 = this.answer.two;
			this.Questions[this.questionForm.idTable].answerUser3 = this.answer.three;
			this.Questions[this.questionForm.idTable].answerUser4 = this.answer.four;
			this.Questions[this.questionForm.idTable].answerUser5 = this.answer.five;
			this.Questions[this.questionForm.idTable].answerUser6 = this.answer.six;
			this.Questions[this.questionForm.idTable].answerUser7 = this.answer.seven;
			this.Questions[this.questionForm.idTable].answerUser8 = this.answer.eight;
			this.Questions[this.questionForm.idTable].answerUser9 = this.answer.nine;
			this.Questions[this.questionForm.idTable].answerUser10 = this.answer.ten;
			this.Questions[this.questionForm.idTable].answerUser11 = this.answer.eleven;
			this.Questions[this.questionForm.idTable].answerUser12 = this.answer.twelve;
			if (this.device.uuid)
				this.insertDB(this.Questions[this.questionForm.idTable]);
			this.manageSlideTo();
		}
		if (this.currentStep == 99) {
			this.navCtrl.setRoot(ResultPage, {	userParams: this.Questions });
		}
		if (this.Questions[this.currentStep-1])
			this.Questions[this.currentStep-1].prevStep = this.questionForm.id;
		this.number = false;
		this.yes = false;
		this.no = false;
		this.idn = false;
		this.date = 0;
		this.answer.one = false;
		this.answer.two = false;
		this.answer.three = false;
		this.answer.four = false;
		this.answer.five = false;
		this.answer.six = false;
		this.answer.seven = false;
		this.answer.eight = false;
		this.answer.nine = false;
		this.answer.ten = false;
		this.answer.eleven = false;
		this.answer.twelve = false;
	}

	manageSlideTo() {
		this.sliderOne.lockSwipes(false);
		if (this.currentStep == 99)
			this.navCtrl.setRoot(ResultPage, {	userParams: this.Questions });
		else
			this.sliderOne.slideTo(this.currentStep, 350);
		this.sliderOne.lockSwipes(true);
	}

	next() {
		console.log("toto");
		console.log(this.verifCgu);
		if(this.verifCgu == 'false' )
		{
			if (this.cgu == false)
			{
				let alert = this.alertCtrl.create({
					title: 'CGU',
					message: 'Acceptez les CGU avant de commencer',
					buttons: ['OK']
				});
				alert.present();
			}
			else
			{
				this.http.post(this.apiUrlCGU+this.device.uuid+"&"+Date.now(), "")
				.map(res => res.json()).subscribe(data => {	}, err => { });
			this.http.post(this.apiUrlStat+"begin&clic next after begin&"+Date.now()+"&"+this.device.uuid, "")
				.map(res => res.json()).subscribe(data => {	}, err => { });

				if(!this.isInitialized)
					this.init();
				this.currentStep++;
				this.manageSlideTo();
			}


		}
		else { 
			
				console.log("LALALALAL");
				this.verifCgu == 'true';
				console.log(this.apiUrlCGU+this.device.uuid+"&"+Date.now());
				this.http.post(this.apiUrlStat+"begin&clic next after begin&"+Date.now()+"&"+this.device.uuid, "")
				.map(res => res.json()).subscribe(data => {	}, err => { });

				if(!this.isInitialized)
					this.init();
				this.currentStep++;
				this.manageSlideTo();
			}
	}
	prev() {
		this.currentStep--;
		this.manageSlideTo();
	}
	prevStepFunction(question) {
		this.http.post(this.apiUrlStat+question.type+"&clic prev&"+Date.now()+"&"+question.id+"&"+this.device.uuid, "")
		.map(res => res.json()).subscribe(data => {	}, err => { });

		this.currentStep = question.prevStep;
		this.manageSlideTo();
	}
	testCheck(answer, id)
	{
		answer = answer.toLocaleString();
		if (answer === "yes")
		{
			if (this.yesSave == false || !this.yesSave)
			{
				this.http.post(this.apiUrlStat+"yes"+"&question&"+Date.now()+"&"+this.currentStep+"&"+this.device.uuid, "")
				.map(res => res.json()).subscribe(data => {	}, err => { });

				this.reintialiseValue(false, false, true);
			}
			else
				this.yesSave = false;
		}
		else if (answer === "no")
		{
			this.http.post(this.apiUrlStat+"no"+"&question&"+Date.now()+"&"+this.currentStep+"&"+this.device.uuid, "")
			.map(res => res.json()).subscribe(data => { }, err => {	});

			if (this.noSave === false)
				this.reintialiseValue(false, true, false);
			else
				this.noSave = false;
		}
		else
		{
			if (this.idnSave === false)
			{
				this.http.post(this.apiUrlStat+"idn&question&"+Date.now()+"&"+this.currentStep+"&"+this.device.uuid, "")
				.map(res => res.json()).subscribe(data => {	}, err => { });

				this.reintialiseValue(true, false, false);
			}
			else
				this.idnSave = false;
		}
	}
	clickCgu(cgu)
	{
		if (cgu == true)
			this.cgu = true;
		else
			this.cgu = false;
	}
	goCGU()
	{
		this.navCtrl.setRoot(CGUPage, {});
	}
}