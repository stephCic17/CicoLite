import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import Questions from '../home/questionFile';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Device } from '@ionic-native/device';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
    selector: 'page-result',
    templateUrl: 'result.html',
})
export class ResultPage {
    @ViewChild(Slides) slides: Slides;
    activeWelcomeContent = false;
    isInitialized = false;
    answers: any;
    Questions:any;
    resultRisk:number;
    resultPsycho1:number;
    resultPsycho2:number;
    resultPsycho3:number;
    resultPsycho4:number;
    IMC:number;
    result:any;
    resultSlide:any;
    psycho:any;
    riskAssessment:any;
    conseil:any;
    positif:any;
    apiUrlStat:string;
    resultBlock:any;
    apiUrlAnswer= "https://ciconia.io/api/getAnswer/";
    data:any;
    tests = [];
    Question:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private device: Device, public alertCtrl: AlertController) {
         this.apiUrlStat = "https://ciconia.io/api/addStat/";
       if (this.device.uuid)
        this.http.post(this.apiUrlStat+"begin"+"&result&"+Date.now()+"&result-step&"+this.device.uuid, "")
                .map(res => res.json()).subscribe(data => {    }, err => { });
        this.Questions = navParams.get('userParams');
        console.log(this.Questions);
       if (!this.Questions){
          this.Questions = Questions;

        }
        console.log(this.Questions);
        this.tests = this.Questions;
        this.resultRisk = 0;

             //   this.test = this.Questions[28].answerUser;
    }
    nextBegin(){
        this.http.post(this.apiUrlStat+"end result"+"&clic return home&"+Date.now()+"&result-step&"+this.device.uuid, "")
                .map(res => res.json()).subscribe(data => {    }, err => { });
        

        this.navCtrl.setRoot(HomePage);   
         }

    ngAfterViewInit() {
        this.slides.lockSwipes(false);
//        this.slides.freeMode = true;
    }
alertInfo() {
    let alert = this.alertCtrl.create({
        title: "<h6 class=\"h6Center\">Les types de maternité correspondent à un certain niveau de prise en charge pour la mère.</h6>",
        message: "<p class=\"sizeMin\"><b>Maternité de Type I :</b> <br/>Elle est adaptée aux grossesses, accouchements et nouveau-nés ne réclamant pas une technicité particulière.<br/><br/><b>Maternité de Type II A :</b><br/>  Elle dispose d'une unité de soins aux nouveau-nés. <br/><br/><b>Maternité de Type II B :</b><br/> Elle dispose une unité de soins aux nouveau-nés comportant des soins intensifs.<br/><br/><b>Maternité de Type III :</b><br/> Elle dispose d'une unité de soins adaptée aux nouveau-nés atteints de pathologie sévère ainsi qu'un service de réanimation néonatale.</p>",
        buttons: ['OK']
    });
    alert.present();

}
    ngOnInit() {
       var self = this;

        setTimeout(function() {
            self.activeWelcomeContent = true;
        }, 250);

  //      this.slides.lockSwipes(false);
        this.IMC = this.Questions[27].answerUser / Math.pow(this.Questions[26].answerUser / 100, 2);
        this.result = [];
        this.resultSlide = [];
        this.conseil = [];
        this.positif = [];

        this.resultPsycho1 = 0;
        if (this.Questions[4].answerUser1 == true)
        {
            this.resultPsycho1 += 1;
            if (this.Questions[4].answerUser3 <= 2 && this.Questions[4].answerUser2 >= 0)
                this.resultPsycho1 += 1;
            else if (this.Questions[4].answerUser2 > 2)
                this.resultPsycho1 += 2;
        }
        if (this.Questions[4].answerUser3 == true)
            this.resultPsycho1 += 2;
        if (this.Questions[4].answerUser2 == true)
            this.resultPsycho1 += 2;

        this.resultPsycho2 = 0;
        if (this.Questions[17].answerUser1 == true) 
            this.resultPsycho2 += 2;
        if (this.Questions[17].answerUser2 == true) 
            this.resultPsycho2 += 1;
        if (this.Questions[17].answerUser3 == true) 
            this.resultPsycho2 += 1;   
        if (this.Questions[17].answerUser4 == true) 
            this.resultPsycho2 += 2;
        if (this.Questions[17].answerUser5 == true) 
            this.resultPsycho2 += 2;       
        if (this.Questions[17].answerUser6 == true) 
            this.resultPsycho2 += 3;        
        if (this.Questions[17].answerUser7 == true) 
            this.resultPsycho2 += 3;        
        if (this.Questions[17].answerUser8 == true) 
            this.resultPsycho2 += 1;        
        if (this.Questions[17].answerUser9 == true) 
            this.resultPsycho2 += 3;        
        if (this.Questions[17].answerUser10 == true) 
            this.resultPsycho2 += 2;        
        if (this.Questions[17].answerUser11 == true) 
            this.resultPsycho2 += 10;        
        if (this.Questions[17].answerUser12 == true) 
            this.resultPsycho2 += 10;

        this.resultPsycho3 = 0;
        if (this.Questions[16].answerUser1 == true) 
            this.resultPsycho3 += 1;
        if (this.Questions[16].answerUser2 == true) 
            this.resultPsycho3 += 2;
        if (this.Questions[16].answerUser3 == true) 
            this.resultPsycho3 += 2;   
        if (this.Questions[16].answerUser4 == true) 
            this.resultPsycho3 += 1;
        if (this.Questions[16].answerUser5 == true) 
            this.resultPsycho3 += 2;       
        if (this.Questions[16].answerUser6 == true) 
            this.resultPsycho3 += 5;        
        if (this.Questions[16].answerUser7 == true) 
            this.resultPsycho3 += 2;        
        if (this.Questions[16].answerUser8 == true) 
            this.resultPsycho3 += 5;        
        if (this.Questions[16].answerUser9 == true) 
            this.resultPsycho3 += 5;

        this.resultPsycho4 = 0;
        if (this.Questions[32].answerUser1 == true) 
            this.resultPsycho4 += 2;
        if (this.Questions[32].answerUser2 == true) 
            this.resultPsycho4 += 2;
        if (this.Questions[32].answerUser3 == true) 
            this.resultPsycho4 += 2;   
        if (this.Questions[32].answerUser4 == true) 
            this.resultPsycho4 += 1;
        if (this.Questions[32].answerUser5 == true) 
            this.resultPsycho4 += 2;       
        if (this.Questions[32].answerUser6 == true) 
            this.resultPsycho4 += 2;        
        if (this.Questions[32].answerUser7 == true) 
            this.resultPsycho4 += 1;        
        if (this.Questions[32].answerUser8 == true) 
            this.resultPsycho4 += 2;        
        if (this.Questions[32].answerUser9 == true) 
            this.resultPsycho4 += 2;
        
        this.psycho = [];
        if (this.resultPsycho1 >= 2 || this.resultPsycho2 >= 5 || this.resultPsycho3 > 4 || this.resultPsycho4 >= 2 )
        {
            this.psycho.push(
            {
                    type: "psycho",
                    risk:"D'après vos antécédents vous présentez un risque de dépression post-partum.",
                    positif: "Consulter un spécialiste <i>(psychologue, psychiatre, pédopsychiatre)</i> vous permettra de l'anticiper.",
                    conseil:"Parlez-en à votre gynécologue ou à votre sage femme.",

            });
        }
        if ( this.Questions[0].answerUser > 42)
            this.resultRisk += 50;
        else if (this.Questions[0].answerUser == 42)
            this.resultRisk += 20;
        else if (this.Questions[0].answerUser > 38)
            this.resultRisk += 2;

        if (this.Questions[18].answerUser > 10)
            this.resultRisk += 400;
        if(this.Questions[5].answerUser == true)
            this.resultRisk += 2;
        if (this.Questions[6].answerUser == true)
        {
            if (this.Questions[14].answerUser == true)
                this.resultRisk += 2;
            if (this.Questions[8].answerUser == true)
                this.resultRisk += 50;
            if (this.Questions[10].answerUser == true)
                this.resultRisk += 50;
            if (this.Questions[12].answerUser == true)
                this.resultRisk += 50;
            if (this.Questions[13].answerUser == true)
                this.resultRisk += 2;
            if (this.Questions[11].answerUser == true)
                this.resultRisk += 50;

        }
        if (this.Questions[17].answerUser > 0)
            this.resultRisk += 2;
        if (this.Questions[22].answerUser == true)
            this.resultRisk += 50;
        if (this.Questions.epilepsy == true)
            this.resultRisk += 200;
        if (this.Questions[21].answerUser == true)
            this.resultRisk += 2;
        if (this.Questions[20].answerUser == true)
            this.resultRisk += 2;
        if (this.Questions[23].answerUser == true)
        {
            if (this.Questions.medicament1 == true)
                this.resultRisk += 200;
            if (this.Questions.medicament2 == true)
                this.resultRisk += 200;
            if (this.Questions.medicament3 == true)
                this.resultRisk += 2;
            if (this.Questions.medicament4 == true)
                this.resultRisk += 200;
            if (this.Questions.medicament5 == true)
                this.resultRisk += 2;
        }
        if (this.Questions.IMC > 28)
            this.resultRisk += 50;
        if (this.Questions.IMC > 22)
            this.resultRisk += 20;
        if (this.Questions.IMC > 17)
            this.resultRisk += 0;
        if (this.Questions.IMC < 17)
            this.resultRisk += 50;

        if (this.Questions[27].answerUser == true)
        {
            if (this.Questions[29].answerUser > 90)
                this.resultRisk += 2;
            if (this.Questions[29].answerUser == true)
                this.resultRisk += 2;
            if (this.Questions[28].answerUser > 10)
                this.resultRisk += 2;
        }
        
        if (this.Questions[1].answerUser == 2)
        {
            this.Questions[33].answerUser =  Math.round((( new Date().getTime() - this.Questions[2].answerUser.getTime() ) / (1000 * 60 * 60 * 24 )) / 7);
            this.Questions[34].answerUser = this.Questions[33].answerUser;

            this.result = 4 - this.Questions[33].answerUser;
            if (this.result > 0)
                this.resultSlide.push(
                {
                    type: "result",
                    risk :"",
                    positif: "Attendez encore un peu pour faire un test de grossesse.",
                    conseil:"",
                });
            else
                this.resultSlide.push(
                {
                    type: "result",
                    risk :"",
                    positif: "Faites un test de grossesse.",
                    conseil:"",
                });
        }
        if (this.Questions[6].answerUser == 0 && this.Questions[3].answerUser == 1)
        {
            if (this.Questions[3].answerUser == 1)
            {
                this.resultSlide.push(
                {
                    type: "result",
                    risk:"",
                    positif: "Félicitations vous allez avoir votre premier enfant.",
                    conseil:"",
                });
            }
        }
        else if (this.Questions[3].answerUser == 1 && this.Questions[1].answerUser == 1)
        {
            this.resultSlide.push(
            {
                type: "result",
                risk:"",
                positif:"Félicitations vous êtes enceinte !",
                conseil:"",
            });
        }
if (this.Questions[1].answerUser == true)
        {
            if (this.resultRisk >= 200)
                this.riskAssessment = "D'après vos <br/> réponses, vous présentez une grossesse à risque. Il serait préférable d'être suivie dans une maternité de type 3.";
            else if (this.resultRisk >= 50)
                this.riskAssessment = "D'après vos <br/>réponses, vous présentez une grossesse à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else if (this.resultRisk >= 20)
                this.riskAssessment = "D'après vos <br/>réponses vous présentez une grossesse à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else
                this.riskAssessment = "D'après vos <br/>réponses vous présentez une grossesse à bas risque.";
        }
        else 
        {
            if (this.resultRisk >= 200)
                this.riskAssessment = "D'après vos <br/>réponses, votre futur grossesse sera à risque. Il serait préférable d'être suivie dans une maternité de type 3.";
            else if (this.resultRisk >= 50)
                this.riskAssessment = "D'après vos <br/>réponses, votre futur grossesse sera à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else if (this.resultRisk >= 20)
                this.riskAssessment = "D'après vos <br/>réponses votre futur grossesse sera à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else
                this.riskAssessment = "D'après vos <br/>réponses votre futur grossesse sera à bas risque.";
        }
        if (this.Questions[0].answerUser < 17 && this.Questions[0].answer > 12)
        {
        this.resultSlide.push(
            {
                type: "result",
                risk: "Votre jeune âge peut rendre l'accueil de votre bébé difficile.",
                positif:"Parlez en à votre entourage.",
                conseil: "Il existe des structures comme le <a href=\"http://www.planning-familial.org\">planning familliale</a>, <a href=\"http://www.aide-sociale.fr\">l'assistance sociale</a> pour vous guider en cas de difficultés. "
            });
        }
        else if (this.Questions[0].answerUser < 42 && this.Questions[0].answerUser >= 38)
            this.resultSlide.push(
            {
                type: "result",
                risk:"A votre âge, vous présentez un risque d'anomalie chromosomique foetale qui n'est pas négligeable.",
                positif:"Être plus âgée pour élever ses enfants est aussi un gage de maturité !",
                conseil:"Nous vous conseillons d'effectuer les dépistages d'anomalies chromosiques foetale(s).",
            });
        else if (this.Questions[0].answerUser > 42)
            this.resultSlide.push(
            {
                type: "result",
                risk:"A votre âge, vous présentez un risque élevé d'anomalie chromosomique foetale.",
                positif:"Être plus âgée pour élever ses enfants est aussi un gage de maturité !",
                conseil:"Nous vous conseillons d'en effectuer le dépistage, parlez-en à votre médecin.",
            });
        else if (this.Questions[0].answerUser < 38)
            {
            this.resultSlide.push(
            {
                type: "result",
                risk: "",
                positif:"Vous avez l'âge optimal pour faire un enfant.",
                conseil: ""
            });
        }
        if (this.Questions[5].answerUser == true && this.Questions[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous fumez, ce qui peut entrainer de nombreuses complications.",
                positif:"",
                conseil:"Faites vous aider pour arrêter de fumer et prévenir d'éventuelles complications pour votre bébé.",
            });
        else if (this.Questions[5].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous fumez, ce qui peut entrainer de nombreuses complications lors d'une future grossesse.",
                positif:"",
                conseil:"Avant de tomber enceinte faites vous aider pour arrêter de fumer et prévenir d'éventuelles complications pour votre bébé.",
            });
        if (this.Questions[8].answerUser == true && this.Questions[13].answerUser == true)
            this.resultSlide.push(
            { 
                type: "result",
                risk:"Vous avez eu un enfant de plus de 4kg, vous risquez de développer un diabète de grossesse.",
                positif:"",
                conseil: "Effectuez un dépistage, parlez-en à votre médecin."
            });
        else if (this.Questions[8].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous avez eu un enfant de plus de 4kg, vous risquez de développer un diabète de grossesse.",
                positif:"",
                conseil:"Anticipez ! Effectuez un dépistage de diabète gestationnel dès le début de la grossesse.",
            });
        
        if (this.Questions[11].answerUser == false && this.Questions[10].answerUser == true)
        {
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin. ",
                positif:"Vous avez 9 chances sur 10 d’avoir un bébé de poids normal cette fois ci !",
                conseil:"",
            });           
        }
         if (this.Questions[12].answerUser == 1 && this.Questions[1].answerUser == 1)
        {
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous avez eu une pré-éclampsie.",
                positif:"Vous avez entre 70 et 90% de chance que cela ne se reproduise pas !",
                conseil:"Faites-vous suivre par un médecin, des dépistages réguliers complémentaires sont à effectuer.",
            });           
        }
        else if (this.Questions[12].answerUser == 1)
        {
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous avez eu une pré-éclampsie.",
                positif:"Vous avez entre 70 et 90% de chance que cela ne se reproduise pas !",
                conseil:"Faites-vous suivre par un médecin, des dépistages réguliers complémentaires seront à effectuer.",
            });           
        }
        if (this.Questions[18].answerUser >= 3)
        {
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous avez un nombre élevé de fausses couches.",
                positif:"",
                conseil:"Vos fausses couches à répétition vous angoissent certainement. Prenez RDV chez un spécialiste pour vous faire confirmer qu’elles sont accidentelles.",
            });
        }
        if (this.Questions.IMG)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous avez déjà subi une IMG mais votre risque de récidive est faible.",
                positif:"La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare.Prenez rendez-vous pour une consultation spécialisée pour vous le faire confirmer.",
                conseil:"",
            });
        if (this.Questions[19].answerUser < 10 && this.Questions[19].answerUser > 0 && this.Questions[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk: "Vous consommez de l'alcool",
                positif:"",
                conseil:"Il est nécessaire de stopper toute consommation d'alcool lorsque vous êtes enceinte !",
            });
        else if (this.Questions[19].answerUser < 10 && this.Questions[19].answerUser > 0)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous consommez de l'alcool",
                positif:"",
                conseil:"Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte."
            });
        else if (this.Questions[19].answerUser >= 10 && this.Questions[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk: "Votre consommation d’alcool est trop élevée. Votre bébé court des risques importants de malformations et de retard mental.",
                positif:"",
                conseil:"Profitez de votre grossesse annoncée pour vous motiver à stopper l’alcool ! Prenez rendez-vous dans un centre spécialisé pour vous aider.",
            });
        else if (this.Questions[19].answerUser >= 10)
            this.resultSlide.push(
            {
                type: "result",
                risk: "Votre consommation d’alcool est trop élevée.",
                positif:"",
                conseil:"Prenez rendez-vous dans un centre spécialisé pour vous faire aider.",
            });
        if (this.Questions[25].answerUser1 == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre grossesse pourrait déséquilibrer votre épilepsie.",
                positif:"",
                conseil: "Il serait préférable que vous soyez prise en charge par une équipe spécialisée pour vérifier le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[20].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre grossesse pourrait déséquilibrer votre épilepsie.",
                positif:"",
                conseil:"Parlez-en à votre médecin.",
            });
        
        if (this.Questions[25].answerUser2 == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre antécédent de phlébite provoque des risques.",
                positif:"",
                conseil:"Votre grossesse pourrait déséquilibrer votre traitement, il serait préférable que vous soyez prise en charge par une équipe spécialisée pour vérifier le choix des anticoagulants et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[21].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre antécédent de phlébite provoque des risques.",
                positif:"",
                conseil:"Consultez sans délai un médecin pour la prescription d'un traitement adapté.",
            });
        
        if (this.Questions[25].answerUser3 == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre grossesse pourrait déséquilibrer votre hypertension.",
                positif:"",
                conseil:" Il serait préférable d’être prise en charge par une équipe spécialisée pour vérifier le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[22].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre grossesse pourrait déséquilibrer votre hypertension.",
                positif:"",
                conseil:"Consultez sans délai un médecin pour la prescription d'un traitement adapté.",
            });
        
        if (this.Questions[25].answerUser4 == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Pendant la grossesse, votre diabète sera déséquilibré.",
                positif:"",
                conseil: "Vous devrez donc être prise en charge par une équipe spécialisée pour vérifier le choix des antidiabétiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[22].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Pendant la grossesse, votre diabète sera déséquilibré.",
                positif:"",
                conseil:"Consultez sans délai un médecin pour la prescription d'un traitement adapté.",
            });
        if (this.Questions[25].answerUser5 == true && this.Questions[1].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous prennez des médicament",
                positif:"Attention jamais d'automédication pendant la grossesse vous pourriez mettre en danger votre bébé.",
                conseil: "Vérifiez auprès de votre médecin ou sur <a href=\"http://www.crat.org\">www.crat.org</a> si le ou les médicaments sont compatible avec votre grossesse."
            });
        else if (this.Questions[25].answerUser5 == true)
        {         
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous prennez des médicament",
                positif:"Attention jamais d'automédication pendant la grossesse vous pourriez mettre en danger votre bébé.",
                conseil: "Vérifiez auprès de votre médecin ou sur <a href=\"http://www.crat.org\">www.crat.org</a> si le ou les médicaments sont compatible avec votre projet de grossesse."
            });
        }
        if (this.IMC < 18.5)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous êtes en sous poids.",
                positif:"",
                conseil:"Essayez de vous alimentez suffisamment.",
            });
        else if (this.IMC > 35 && this.IMC < 40)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous êtes en surpoids.",
                positif:"",
                conseil:"",
            });

        else if (this.IMC > 40)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous êtes en surpoids.",
                positif:"",
                conseil:"Il serait préférable d'être prise en charge dans un centre spécialisé.",
            });

        if (this.Questions[29].answerUser > 10 && this.Questions[29].answerUser <= 12)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous travaillez beaucoup.",
                positif:"",
                conseil:"Organisez-vous pour un éventuel aménagement de vos horaires ou une mise en place de télétravail.",
            });
        if (this.Questions[29].answerUser > 12)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Votre nombre d'heures de travail est vraiment très élevé.",
                positif:"",
                conseil:"Organisez-vous pour un éventuel aménagement de vos horaires ou une mise en place de télétravail.",
            });
        


        
        if (!this.Questions[28].answerUser)
            this.resultSlide.push(
            {   
            type: "result", 
                risk: "",
                positif:"Prenez le temps de préparer la venue de votre enfant et de vous occuper de vous.",
                conseil: "",
            });
        if (this.Questions[30].answerUser > 90)
            this.resultSlide.push(
            {
                type: "result",
                risk: "Votre temps de trajet pour aller travailler est élevé.",
                positif:"",
                conseil:"Organisez-vous pour une éventuelle mise en place de télétravail afin de diminuer les temps de trajets.",
            });       
        if (this.Questions[31].answerUser == true)
            this.resultSlide.push(
            {
                type: "result",
                risk:"Vous travaillez debout plus de 6 heures par jour.",
                positif:"",
                conseil:"Organisez-vous pour un éventuel aménagement de vos conditions de travail. Vous allez être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour.",
            });

        this.answers = this.resultSlide.concat(this.psycho);
        console.log(this.answers);

    }
}
