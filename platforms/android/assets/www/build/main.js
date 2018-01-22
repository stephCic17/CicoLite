webpackJsonp([6],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CDPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CDPPage = (function () {
    function CDPPage(navCtrl, navParams, device, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.http = http;
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        this.http.post(this.apiUrlStat + "chartdeprotection" + "&visite&" + Date.now() + "&chartdeprotection&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
    }
    CDPPage.prototype.ionViewDidLoad = function () {
    };
    CDPPage.prototype.nextBegin = function () {
    };
    CDPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cdp',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/cdp/cdp.html"*/'<ion-header>\n  <ion-navbar class="menu">\n    <ion-buttons class="buttonIon" start>\n      <button ion-button menuToggle>\n<img class="icoM" src="assets/icon/menu.png">\n            \n\n      </button>\n    </ion-buttons>\n\n  <ion-title class="headerTitle">CicoLite</ion-title>\n  \n  </ion-navbar>\n</ion-header>\n<ion-content class="legal">\n	<div>\n\n<h3>PROTECTION DES DONNÉES PERSONNELLES</h3>\n<h6 class="article">Article 1 - Définitions des termes utilisés dans la charte</h6>\n<p>On désignera par la suite :<br>\n- &#39;Application&#39; : l&#39;application CicoLite et l&#39;ensemble de ses pages et écrans.<br/>\n- &#39;Editeur&#39; : Ciconia, responsable de l&#39;édition et du contenu de l&#39;application.<br/>\n- &#39;Utilisateur&#39; : L&#39;internaute visitant et utilisant les services de l&#39;application.</p>\n<h6 class="article">Article 2 - Introduction et rôle de la charte</h6>\n<p>La présente charte vise à vous informer des engagements de l&#39;application eu égard au respect de votre vie privée et à la protection des données personnelles vous concernant, collectées et traitées à l&#39;occasion de votre utilisation de l&#39;application.\n<h6 class="article">Article 3 - Données collectées dans l&#39;application</h6>\n<p>Les données collectées et ultérieurement traitées par l&#39;application sont celles que vous pouvez nous transmettre volontairement en remplissant les différents formulaires présents au sein de l&#39;application. Pour certaines opérations sur les contenus, vous pourrez être amenés à transmettre des données vous concernant à des tiers partenaires au travers de leurs propres services, plus spécifiquement lors des paiements que vous pourrez\neffectuer. Nous ne disposerons pas des dites données, leur collecte et leur traitement étant régis par les conditions propres à ces intervenants. Nous vous invitons à consulter les conditions avant de communiquer vos données dans ce cadre.<br/>\nVotre adresse IP (numéro d&#39;identification attribué sur Internet à votre périphérique) est susceptible d&#39;être collectée automatiquement. Vous êtes informés que l&#39;application est susceptible de mettre en œuvre un procédé automatique de traçage (Cookie ou autres fichiers déposés lors de l&#39;utilisation de l&#39;application sur le périphérique,\nconnecté ou non à Internet). CicoLite utilise un identifiant unique généré par votre téléphone. Cet identifiant unique nous permet de tracer votre parcours au travers de l’application et de recueillir vos données, étant précisé que Ciconia n’est en aucun cas en mesure de vous identifier et de relier votre identité à vos données qui demeurent anonymes. Conformément aux dispositions de la loi informatique et liberté du 6 janvier 1978, la collecte des données personnelles des membres par l’éditeur de l’application a fait l’objet d’une déclaration auprès de l’autorité française de protection des données personnelles (la Commission Nationale de l’Informatique et des Libertés – CNIL) sous le numéro 2047541v0.</p>\n<h6 class="article">Article 4 - Finalités des données collectées</h6>\n<p>Les données identifiées comme étant obligatoires sur les formulaires de l&#39;application sont nécessaires afin de pouvoir bénéficier des fonctionnalités correspondantes de l&#39;application et plus spécifiquement des opérations sur les contenus proposés au sein de celle-ci. Les données collectées automatiquement par l&#39;application pourront permettre d&#39;effectuer des statistiques quant à la consultation de ses pages et écran, l&#39;utilisation de ses fonctionnalités, le déroulement de son installation et de sa désinstallation sur le périphérique.</p>\n\n<h6 class="article">Article 5 - Destinataires et utilisation des données collectées</h6>\n<p>Vos données collectées par nos soins sont traitées pour les besoins d’exécution des opérations sur les contenus de l&#39;application.</p>\n\n<h6 class="article">Article 6 - Sécurité des données</h6>\n<p>Vous êtes informés que vos données pourront être divulguées en application d&#39;une loi, d&#39;un règlement ou en vertu d&#39;une décision d&#39;une autorité réglementaire ou judiciaire compétente ou encore, si cela s&#39;avère nécessaire, aux fins, pour l&#39;Editeur, de préserver ses droits et intérêts.</p>\n\n<h6 class="article">Article 7 - Durée de conservation des données</h6>\n<p>Les données collectées sont conservées pour la durée strictement nécessaire à la réalisation des finalités visées ci-avant. Au-delà de cette durée, elles seront conservées à des fins exclusivement statistiques et ne donneront lieu à aucune exploitation, de quelque nature que ce soit.</p>\n\n<p><i>Tous droits réservés - 9 janvier 2018</i></p>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/cdp/cdp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CDPPage);
    return CDPPage;
}());

//# sourceMappingURL=cdp.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvgInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IvgInfoPage = (function () {
    function IvgInfoPage(navCtrl, navParams, device, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.http = http;
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        this.tableAnswer = navParams.get('userParams');
        this.http.post(this.apiUrlStat + "yes" + "&question&" + Date.now() + "&ivg-step&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
    }
    IvgInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IvgInfoPage');
        this.tableAnswer.push({ answerUser: Math.round(((new Date().getTime() - this.tableAnswer[2].answerUser.getTime()) / (1000 * 60 * 60 * 24)) / 7) });
        this.tableAnswer.push({ answerUser: 14 - this.tableAnswer[33].answerUser });
        console.log(this.tableAnswer[33].answerUser);
        this.datetest = 28 - (this.tableAnswer[33].answerUser * 7);
        console.log(this.datetest);
        this.result = 14 - this.tableAnswer[33].answerUser;
        this.pregnant = this.tableAnswer[1].answerUser;
    };
    IvgInfoPage.prototype.nextBegin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], {});
    };
    IvgInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ivg-info',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/ivg-info/ivg-info.html"*/'<ion-header>\n  <ion-navbar class="menu">\n    <ion-buttons class="buttonIon" start>\n      <button ion-button menuToggle>\n<img class="icoM" src="assets/icon/menu.png">\n            \n\n      </button>\n    </ion-buttons>\n\n  <ion-title class="headerTitle">CicoLite</ion-title>\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-slides>\n<ion-slide>\n<div *ngIf="result >= 1">\n<div class="form-wrapper" *ngIf="result >= 1 && pregnant == 1" >\n			<h3>Vous avez plusieurs possibilitées :</h3>\n			<p> - Continuer votre grossesse et accueillir l\'enfant.<br/>\n			 - Continuer votre grossesse et confier l\'enfant à l\'adoption.<br/>\n			 - Interrompre votre grossesse</p>\n				<p>\n				<i>Prenez le temps de la réflexion. </i>\n				<i>Parlez à votre médecin et renseignez-vous sur: </i>\n				<br/>\n				<a href="http://ivg.org">\n					IVG.org\n				</a>\n				<br/>\n				<a href="http://www.adoption.gouv.fr/">\n					adoption.gouv\n				</a>\n			</p>\n			<p><b>L\'ivg reste possible pendant encore  {{result}} semaines.</b></p>\n		\n			<button class="button button--line prev-button touch" (click)="nextBegin()">Recommencer</button>\n	</div>\n</div>\n	<div class="form-wrapper" *ngIf="result < 0 && pregnant == 1">\n\n				<h3>Le delai d\'avortement légal est dépassé</h3> \n				<p><b>Vous avez plusieurs possibilitées :</b></p>\n			<p> - Continuer votre grossesse et accueillir l\'enfant.<br/>\n			 - Continuer votre grossesse et confier l\'enfant à l\'adoption.</p>\n				<p>\n				<i>Prenez le temps de la réflexion. </i>\n				<i>Parlez à votre médecin et renseignez-vous sur: </i>\n				<br/>\n				<a href="http://www.adoption.gouv.fr/">\n					adoption.gouv\n				</a>\n			</p>\n			<button class="button button--line prev-button touch" (click)="nextBegin()">Recommencer</button>\n	</div>\n	<div class="form-wrapper" *ngIf="pregnant == 2 && datetest < 0">\n\n				<h3>Réalisez un test de grossesse</h3> \n				<p><b>D\'après la date de vos dernières règles le test de grossesse peut être fait à partir de maintenant</b></p>\n\n			<button class="button button--line prev-button touch" (click)="nextBegin()">Recommencer</button>\n	</div>\n	<div class="form-wrapper" *ngIf="pregnant == 2 && datetest > 0">\n\n				<h3>Réalisez un test de grossesse</h3> \n				<p><b>D\'après la date de vos dernières règles, vosu pourrez réaliser un test de grossesse d\'ici {{datetest}} jours.</b></p>\n				<p>Si vous réalisez un test de grossesse avant cette date celui-ci ne sera pas fiable et peut vous donner un faux négatif</p>\n\n			<button class="button button--line prev-button touch" (click)="nextBegin()">Recommencer</button>\n	</div>\n	</ion-slide>\n	    \n        </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/ivg-info/ivg-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], IvgInfoPage);
    return IvgInfoPage;
}());

//# sourceMappingURL=ivg-info.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MLPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MLPage = (function () {
    function MLPage(navCtrl, navParams, device, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.http = http;
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        this.http.post(this.apiUrlStat + "mentionlegal" + "&visite&" + Date.now() + "&mentionlegal&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
    }
    MLPage.prototype.ionViewDidLoad = function () {
    };
    MLPage.prototype.nextBegin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    MLPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ml',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/ml/ml.html"*/'<ion-header>\n  <ion-navbar class="menu">\n    <ion-buttons class="buttonIon" start>\n      <button ion-button icon-only menuToggle>\n<img class="icoM" src="assets/icon/menu.png">\n        \n\n      </button>\n    </ion-buttons>\n\n  <ion-title class="headerTitle">CicoLite</ion-title>\n  \n  </ion-navbar>\n</ion-header>\n<ion-content class="legal">\n	<div>\n		<h3 class="article">MENTIONS LÉGALES</h3>\n		<p>L&#39;application CicoLite est éditée par Ciconia SAS, société au capital de 1000 €, entreprise répertoriée dans SIRENE sous le numéro d’immatriculation 823243506 auprès du RCS de Paris et dont le siège social est sis au 3\n			rue Cognacq-Jay, 75007 Paris.<br/>\n			L’utilisation de l’application CicoLite est à vocation uniquement informative et ne se substitue pas à une consultation médicale délivrée par un professionnel de santé.\n			<br/> Directeur de la publication : Kwame Yamgnane, joignable à l’adresse <a href="mailto:contact@ciconia.io">contact@ciconia.io</a>.<br/>\n		Les informations concernant la collecte et le traitement des données personnelles (politique et déclaration) sont fournies dans la charte de données personnelles de l&#39;application.</p>\n\n		<p><i>Tous droits réservés - 9 janvier 2018</i></p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/ml/ml.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], MLPage);
    return MLPage;
}());

//# sourceMappingURL=ml.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WhyPage = (function () {
    function WhyPage(navCtrl, navParams, device, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.http = http;
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        this.http.post(this.apiUrlStat + "why" + "&visite&" + Date.now() + "&why&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
    }
    WhyPage.prototype.ionViewDidLoad = function () {
    };
    WhyPage.prototype.nextBegin = function () {
        window.location.reload();
    };
    WhyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-why',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/why/why.html"*/'<ion-header>\n	<ion-navbar class="menu">\n		<ion-buttons class="buttonIon" start>\n			<button ion-button menuToggle>\n				<img class="icoM" src="assets/icon/menu.png">\n				\n\n			</button>\n		</ion-buttons>\n\n		<ion-title class="headerTitle">CicoLite</ion-title>\n		\n	</ion-navbar>\n</ion-header>\n<ion-content class="legal">\n	<div>\n		<h3 class="article">Notre Philosophie</h3>\n		<p><b>CicoLite</b> est la première application de santé dédiée à la grossesse <b>pensée en partenariat&nbsp;avec&nbsp;des&nbsp;médecins</b>. L\'application vous pose des questions en rapport avec votre situation médicale personnelle et tient compte de vos réponses pour évaluer le niveau de risque de votre grossesse en cours ou à venir. </p>\n		<p>Enfin CicoLite vous prodigue quelques conseils pour vous aider à atténuer les potentiels risques et vous permettre de mieux vivre votre grossesse.</p>\n\n		<p>Nous évaluons les risques encourus lors de la grossesse d\'un point de vue  médical et psychologique et nos questionnaires vous permettrons de détecter  ce qui pourrait rendre la rencontre avec votre bébé difficile.</p>\n\n		<p class="spec">CicoLite<b> est un véritable partenaire santé.</b></p>\n\n\n		<h6 class="donne"> Gestions de vos données d\'identifications</h6>\n		<p><b>Ciconia</b> ne récupère aucune information nous permettant de vous identifier.</p>\n\n		<h6 class="article"> Gestions de vos données d\'identifications</h6>\n		<p>Ciconia	ne récupère aucune informations nous permettant de	vous idenfier.</p>\n\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/why/why.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], WhyPage);
    return WhyPage;
}());

//# sourceMappingURL=why.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cdp/cdp.module": [
		297,
		5
	],
	"../pages/cgu/cgu.module": [
		298,
		4
	],
	"../pages/ivg-info/ivg-info.module": [
		299,
		3
	],
	"../pages/ml/ml.module": [
		300,
		2
	],
	"../pages/result/result.module": [
		301,
		1
	],
	"../pages/why/why.module": [
		302,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Questions = [
    {
        idTable: 0,
        id: 1,
        title: "Quel âge avez-vous&nbsp?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "age en année",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 2,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 1,
        id: 2,
        title: "Êtes-vous enceinte&nbsp;?",
        type: "yesNoIdn",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "Je ne sais pas",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 3,
        nextStep2: 5,
        nextStep3: 3,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 2,
        id: 3,
        title: "Quelle est la date de vos dernières règles&nbsp;?",
        type: "date",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "jj/mm/aaaa",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 4,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 3,
        id: 4,
        title: "Est-ce une bonne nouvelle&nbsp;?",
        type: "yesNoIdn",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "Je ne sais pas",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 5,
        nextStep2: 250,
        nextStep3: 5,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 4,
        id: 5,
        title: "Avez vous déjà eu recours à ces procédés médicaux?",
        type: "Psycho1",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Procréation médicalement assistée",
        label2: "Depuis combien de temps avez-vous commencé&nbsp;?",
        label3: "Combien de tentatives avez-vous faites&nbsp;?",
        label4: "Don d'ovocyte",
        label5: "Don de sperme",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 6,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 5,
        id: 6,
        title: "Fumez-vous&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 7,
        nextStep2: 7,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 6,
        id: 7,
        title: "Avez-vous des enfants&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 8,
        nextStep2: 18,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 7,
        id: 8,
        title: "Combien avez-vous d'enfant(s)&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "nombre d'enfant",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 9,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 8,
        id: 9,
        title: "Avez-vous accouché d'enfant(s) de plus de 4 kilos&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 10,
        nextStep2: 11,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 9,
        id: 10,
        title: "Combien d'enfant(s) de plus de 4 kilos avez-vous eu&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "nombre d'enfant",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 11,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 10,
        id: 11,
        title: "Avez-vous accouché d'enfant(s) de moins de 2kg200&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 12,
        nextStep2: 13,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 11,
        id: 12,
        title: "Votre enfant était-il prématuré&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 13,
        nextStep2: 13,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 12,
        id: 13,
        title: "Avez-vous eu une pré-éclampsie&#42;&nbsp?",
        type: "yesNo",
        info: 1,
        infoTitle: "<h6 class=\"h6Center\">Pré-éclampsie</h6>",
        infoText: "<p class=\"sizeMin\">La pré-éclampsie est une maladie qui peut survenir à partir du 5ème mois de la grossesse.<b>Les signes:</b><br/>- tension artérielle élevé<br/>- protéines dans les urines.<br/><b>Les facteurs de risques sont :</b><br/>- surcharge pondérale<br/>- antécédent familliaux ou personnels de pré-éclampsie<br/>- hyppertension artérielle<br/> Si la pré-éclampsie n’est pas prise en charge, une éclampsie s’installe, avec des complications gravissimes : convulsions, insuffisance rénale, souffrance fœtale. L’ unique traitement de la préclampsie est de déclancher l'accouchement.</p>",
        infoMess: "Qu'est ce que la pré-éclampsie&nbsp;?",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 14,
        nextStep2: 14,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 13,
        id: 14,
        title: "Avez-vous un antécedent de diabète de grossesse&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 15,
        nextStep2: 15,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 14,
        id: 15,
        title: "Avez-vous déjà eu une césarienne&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 16,
        nextStep2: 17,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 15,
        id: 16,
        title: "Combien de césarienne(s) avez-vous eu&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "nombre de cesarienne",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 17,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 16,
        id: 17,
        title: "Avez-vous déjà été confrontée à l'une de ces situations&nbsp;?",
        type: "multipleChoice",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Forceps",
        label2: "Ventouse",
        label3: "Césarienne en urgence",
        label4: "Anesthésie générale",
        label5: "Hémorragie",
        label6: "Séparation pendant plus de 6 heures à la naissance du bébé",
        label7: "Peur de mourrir en accouchant",
        label8: "Peur de perdre mon bébé",
        label9: "J'ai subit un accouchement traumatique",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 18,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 17,
        id: 18,
        title: "Avez-vous vécu l'une de ces situations&nbsp;?",
        type: "multipleChoice",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Fausse couche",
        label2: "Interruption volontaire de grossesse",
        label3: "Grossesse extra utérine",
        label4: "Mort foetale in utéro",
        label5: "Interruption médicale de la grossesse",
        label6: "Interruption sélective de la grossesse",
        label7: "Enfant porteur de handicap",
        label8: "Enfant prématuré",
        label9: "Enfant atteint d'une maladie chronique",
        label10: "Mort d'un enfant",
        label11: "Ces expériences ont été traumatiques",
        label12: "Avez-vous déjà connu des évènements que vous qualifieriez de traumatiques non lié à une grossesse&nbsp;?",
        label13: "",
        prevStep: 0,
        nextStep: 19,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 18,
        id: 19,
        title: "Combien de fausses couches avez-vous fait&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "nombre",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 20,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 19,
        id: 20,
        title: "Combien de verres d'alcool buvez-vous par semaine&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "nombre par semaine",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 21,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 20,
        id: 21,
        title: "Êtes-vous sujette aux crises d'épilepsie&#42;&nbsp;?",
        type: "yesNo",
        info: 1,
        infoTitle: "<h6 class=\"h6Center\">Épilepsie</h6>",
        infoText: "<p class=\"sizeMin\">L'épilepsie est une activité électrique anormale au niveau du cerveau qui provoque des convulsions. <br/>10 % de la population mondiale présentera un épisode de convulsions au cours de sa vie, ce qui ne signifie pas être atteinte d'épilepsie. <br/>Les causes de l'épilepsie sont nombreuses.<br/> Pendant la grossesse le traitement doit être adapté.</p>",
        infoMess: "Qu'est ce que l'épilepsie&nbsp;?",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 22,
        nextStep2: 22,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 21,
        id: 22,
        title: "Avez-vous déjà eu une phlébite&#42;&nbsp;?",
        type: "yesNo",
        info: 1,
        infoTitle: "<h6 class=\"h6Center\">Phlébite</h6>",
        infoText: "<p class=\"sizeMin\">La phlébite est la présence d’un caillot de sang dans une veine.<br/> La principale complication des phlébites est l'embolie pulmonaire.<br/> <b>Les facteurs de risques sont :</b><br/> - antécédents familiaux ou personnels de phlébite<br/> - grossesse<br/> -  immobilisation des membres inférieurs sur une longue durée. <br/>Aujourd'hui des moyens de prévention existent pour éviter le développement d’une phlébite, y compris pendant la grossesse.</p>",
        infoMess: "Qu'est ce qu'une phlébite&nbsp;?",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 23,
        nextStep2: 23,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 22,
        id: 23,
        title: "Avez-vous de l'hypertension artérielle&#42;&nbsp;?",
        type: "yesNoIdn",
        info: 1,
        infoTitle: "<h6 class=\"h6Center\">Hypertension artérielle</h6>",
        infoText: "<p class=\"sizeMin\">L'hypertension artérielle est l'augmentation de la pression dans les artères.<br/> <b>Les facteurs de risques sont :</b><br/> - la grossesse<br/> - la surcharge pondérale<br/> - le tabagisme ou l'alcoolisme<br/> - le stress<br/> - la sédentarité<br/> L’hypertension pendant la grossesse augmente le risque de développer une pré-éclampsie, ainsi que d’avoir un nourrisson en sous-poids à la naissance.<br/> Aujourd'hui il existe des traitements adaptés pendant la grossesse.</p>",
        infoMess: "Qu'est ce que l'hypertension artérielle&nbsp;?",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "Je ne sais pas",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 24,
        nextStep2: 24,
        nextStep3: 24,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 23,
        id: 24,
        title: "Avez-vous du diabète&#42;&nbsp;?",
        type: "yesNo",
        info: 1,
        infoTitle: "<h6 class=\"h6Center\">Diabète</h6>",
        infoText: "<p class=\"sizeMin\">Le diabète est une maladie chronique qui provient d'une glycémie <i>(taux de sucre)</i> trop élevé dans le sang à jeun.<br/> <b>Les facteurs de risques sont :</b><br/> - antécédent familliaux<br/> - surcharge pondérale<br/> - sédentarité<br/> Les diabètes non traités augmentent le risque de malformation du foetus.<br/>Il existe des traitements adaptés pendant la grossesse pour réguler la glycémie.</p>",
        infoMess: "Qu'est ce que le diabète&nbsp;?",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 25,
        nextStep2: 25,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 24,
        id: 25,
        title: "Prenez-vous des médicaments&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 26,
        nextStep2: 27,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 25,
        id: 26,
        title: "Sélectionnez les médicaments que vous prenez",
        type: "multipleIf",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Antiépileptique",
        label2: "Anticoagulant",
        label3: "Antihypertenseur",
        label4: "Insuline",
        label5: "Antidépresseur",
        label6: "Autres",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 27,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 26,
        id: 27,
        title: "Quelle est votre taille <i>(en cm)</i>&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "en cm",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 28,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 27,
        id: 28,
        title: "Quel est votre poids <i>(en kg)</i>&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "en kg",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 29,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 28,
        id: 29,
        title: "Travaillez-vous&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 30,
        nextStep2: 33,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 29,
        id: 30,
        title: "Combien d'heures de travail effectuez-vous par jour&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "en heures",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 31,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 30,
        id: 31,
        title: "Quel est votre temps de trajet aller-retour domicile/travail par jour <i>(en min)</i>&nbsp;?",
        type: "number",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "en minute",
        label1: "",
        label2: "",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 32,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 31,
        id: 32,
        title: "Travaillez-vous debout plus de 6 heures par jour&nbsp;?",
        type: "yesNo",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Oui",
        label2: "Non",
        label3: "",
        label4: "",
        label5: "",
        label6: "",
        label7: "",
        label8: "",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: -1,
        nextStep1: 33,
        nextStep2: 33,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    },
    {
        idTable: 32,
        id: 33,
        title: "Êtes-vous concernée par un ou plusieurs des éléments ci-dessous&nbsp;?",
        type: "multipleChoice",
        info: -1,
        infoTitle: "",
        infoText: "",
        label: "",
        label1: "Crises d'angoisse",
        label2: "Boulimie",
        label3: "Anorexie",
        label4: "TOC <i>(Troubles obsessionnels compulsif)</i>",
        label5: "Dépression",
        label6: "Phobie",
        label7: "Troubles bipolaires",
        label8: "Hospitalisation dans un service psychiatrique",
        label9: "",
        label10: "",
        label11: "",
        label12: "",
        label13: "",
        prevStep: 0,
        nextStep: 99,
        nextStep1: -1,
        nextStep2: -1,
        nextStep3: -1,
        answerUser: -1,
        answerUser1: -1,
        answerUser2: -1,
        answerUser3: -1,
        answerUser4: -1,
        answerUser5: -1,
        answerUser6: -1,
        answerUser7: -1,
        answerUser8: -1,
        answerUser9: -1,
        answerUser10: -1,
        answerUser11: -1,
        answerUser12: -1,
        answerUser13: -1
    }
];
/* harmony default export */ __webpack_exports__["a"] = (Questions);
//# sourceMappingURL=questionFile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cgu_cgu__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_why_why__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cdp_cdp__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ml_ml__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_result_result__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ivg_info_ivg_info__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sqlite_sqlite__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_device__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_sqlite__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ivg_info_ivg_info__["a" /* IvgInfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sqlite_sqlite__["a" /* SQLitePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cgu_cgu__["a" /* CGUPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cdp_cdp__["a" /* CDPPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ml_ml__["a" /* MLPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_why_why__["a" /* WhyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cdp/cdp.module#CDPPageModule', name: 'CDPPage', segment: 'cdp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgu/cgu.module#CGUPageModule', name: 'CGUPage', segment: 'cgu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ivg-info/ivg-info.module#IvgInfoPageModule', name: 'IvgInfoPage', segment: 'ivg-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ml/ml.module#MLPageModule', name: 'MLPage', segment: 'ml', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/why/why.module#WhyPageModule', name: 'WhyPage', segment: 'why', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ivg_info_ivg_info__["a" /* IvgInfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sqlite_sqlite__["a" /* SQLitePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cgu_cgu__["a" /* CGUPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cdp_cdp__["a" /* CDPPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ml_ml__["a" /* MLPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_why_why__["a" /* WhyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_result_result__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cgu_cgu__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_why_why__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cdp_cdp__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ml_ml__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openCGU = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_cgu_cgu__["a" /* CGUPage */]);
    };
    MyApp.prototype.openML = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_ml_ml__["a" /* MLPage */]);
    };
    MyApp.prototype.openCDP = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_cdp_cdp__["a" /* CDPPage */]);
    };
    MyApp.prototype.openHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openWhy = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_why_why__["a" /* WhyPage */]);
    };
    MyApp.prototype.openResult = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_result_result__["a" /* ResultPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/app/app.html"*/'<ion-menu side="left" [content]="content">\n<ion-content padding>\n\n	<img (click)="openHome()" class="logMenu" src="assets/img/logo.png" menuClose>\n    <h4 (click)="openHome()" menuClose>Accueil</h4>\n    <h4 (click)="openWhy()" menuClose>Notre philosophie</h4>\n    <h4 (click)="openResult()" menuClose>Accéder à vos résultats</h4>\n    <br/>\n    <h6 (click)="openCGU()" menuClose>Condition général d\'utilisation</h6>\n    <h6 (click)="openML()" menuClose>Mentions légales</h6>\n    <h6 (click)="openCDP()" menuClose>Charte de protection des données</h6>\n\n    <p class="droit">Tous droits réservés Ciconia SAS 2017-2018</p>\n\n</ion-content>\n\n\n\n\n\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content ></ion-nav>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATABASE_FILE_NAME = 'data.db';
var SQLitePage = (function () {
    function SQLitePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.createDataBase();
    }
    SQLitePage.prototype.createDataBase = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default',
        })
            .then(function (db) {
            _this.db = db;
            _this.test = "db cree";
            _this.createTable();
        })
            .catch(function (e) { return console.log(e); });
    };
    SQLitePage.prototype.createTable = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Questions` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `idTable` INTEGER NOT NULL, `title` TEXT, `type` TEXT, `prevStep` INTEGER, `nextStep` INTEGER, `answerUser` INTEGER, `answerUser1` INTEGER, `answerUser2` INTEGER, `answerUser3` INTEGER, `answerUser4` INTEGER, `answerUser5` INTEGER, `answerUser6` INTEGER, `answerUser7` INTEGER, `answerUser8` INTEGER, `answerUser9` INTEGER, `answerUser10` INTEGER, `answerUser11` INTEGER, `answerUser12` INTEGER, `answerUser13` INTEGER, `label` TEXT, `nextStep1` INTEGER, `nextStep2` INTEGER, `nextStep3` INTEGER, `label1` INTEGER, `label2` INTEGER, `label3` INTEGER, `label4` INTEGER, `label5` INTEGER, `label6` INTEGER, `label7` INTEGER, `label8` INTEGER, `label9` INTEGER, `label10` INTEGER, `label11` INTEGER, `label12` INTEGER, `label13` INTEGER )', {})
            .then(function () {
            _this.test = "table cree";
        })
            .catch(function (e) { return console.log(e); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { db: this.db });
    };
    SQLitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sqlite',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/sqlite/sqlite.html"*/'Sqlit\ntest 1 {{test1}}\n--- test  {{test}}'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/sqlite/sqlite.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], SQLitePage);
    return SQLitePage;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgu_cgu__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionFile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(renderer, navCtrl, navParams, alertCtrl, http, device) {
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.device = device;
        this.cgu = false;
        this.Questions = [];
        this.Answers = [];
        this.totalStep = 0;
        this.currentStep = 0;
        this.activeLogo = false;
        this.activeLogoWrapper = false;
        this.activeWelcomeContent = false;
        this.isInitialized = false;
        this.changing = false;
        this.number = false;
        this.verifCgu = 'false';
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        this.apiUrlCGU = "https://ciconia.io/api/addCgu/";
        this.apiUrlAnswer = "https://ciconia.io/api/getAnswer/";
        this.Questions = __WEBPACK_IMPORTED_MODULE_5__questionFile__["a" /* default */];
        this.http.post(this.apiUrlStat + "begin&launch App&" + Date.now() + "&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
        this.ngOnInit();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.insertDB = function (obj) {
        this.http.post("https://ciconia.io/api/addAnswer/"
            + this.device.uuid + "&"
            + obj.idTable + "&"
            + obj.id + "&"
            + obj.answerUser + "&"
            + obj.answerUser1 + "&"
            + obj.answerUser2 + "&"
            + obj.answerUser3 + "&"
            + obj.answerUser4 + "&"
            + obj.answerUser5 + "&"
            + obj.answerUser6 + "&"
            + obj.answerUser7 + "&"
            + obj.answerUser8 + "&"
            + obj.answerUser9 + "&"
            + obj.answerUser10 + "&"
            + obj.answerUser11 + "&"
            + obj.answerUser12 + "&"
            + obj.answerUser13 + "&"
            + Date.now(), "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
    };
    HomePage.prototype.goHome = function () {
        this.navCtrl.setRoot(HomePage_1, {});
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.Questions = __WEBPACK_IMPORTED_MODULE_5__questionFile__["a" /* default */];
        var self = this;
        this.activeLogoWrapper = true;
        setTimeout(function () {
            self.activeLogo = true;
        }, 2500);
        setTimeout(function () {
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
        if (this.device.uuid) {
            this.http.request(this.apiUrlAnswer + "0&" + this.device.uuid.toString())
                .subscribe((function (res) {
                _this.test = "passe la";
                console.log(res);
                if (res)
                    _this.data = res.json();
                _this.test = _this.apiUrlAnswer + "0&" + _this.device.uuid.toString();
                console.log(_this.data);
                var i = 0;
                while (_this.data[i]) {
                    _this.test = _this.data[0][0].answerUser;
                    if (_this.data[i][0].idTable != "error") {
                        if (_this.data[i][0].idTable != 2) {
                            _this.Questions[_this.data[i][0].idTable].answerUser = parseInt(_this.data[i][0].answerUser);
                            _this.Questions[_this.data[i][0].idTable].answerUser1 = parseInt(_this.data[i][0].answerUser1);
                            _this.Questions[_this.data[i][0].idTable].answerUser2 = parseInt(_this.data[i][0].answerUser2);
                            _this.Questions[_this.data[i][0].idTable].answerUser3 = parseInt(_this.data[i][0].answerUser3);
                            _this.Questions[_this.data[i][0].idTable].answerUser4 = parseInt(_this.data[i][0].answerUser4);
                            _this.Questions[_this.data[i][0].idTable].answerUser5 = parseInt(_this.data[i][0].answerUser5);
                            _this.Questions[_this.data[i][0].idTable].answerUser6 = parseInt(_this.data[i][0].answerUser6);
                            _this.Questions[_this.data[i][0].idTable].answerUser7 = parseInt(_this.data[i][0].answerUser7);
                            _this.Questions[_this.data[i][0].idTable].answerUser8 = parseInt(_this.data[i][0].answerUser8);
                            _this.Questions[_this.data[i][0].idTable].answerUser9 = parseInt(_this.data[i][0].answerUser9);
                            _this.Questions[_this.data[i][0].idTable].answerUser10 = parseInt(_this.data[i][0].answerUser10);
                            _this.Questions[_this.data[i][0].idTable].answerUser11 = parseInt(_this.data[i][0].answerUser11);
                            _this.Questions[_this.data[i][0].idTable].answerUser12 = parseInt(_this.data[i][0].answerUser12);
                            _this.Questions[_this.data[i][0].idTable].answerUser13 = parseInt(_this.data[i][0].answerUser13);
                        }
                        else
                            _this.Questions[_this.data[i][0].idTable].answerUser = new Date(_this.data[i][0].answerUser);
                    }
                    i++;
                }
            }));
            this.test = this.Questions[0].answerUser;
            this.http.request("https://ciconia.io/api/getCgu/" + this.device.uuid.toString())
                .subscribe((function (res) {
                if (res) {
                    _this.data = res.json();
                    if (_this.data[0][0].idUser != "error") {
                        _this.verifCgu = 'true';
                    }
                    else {
                        _this.verifCgu = 'false';
                    }
                }
            }));
        }
        else {
            console.log(this.apiUrlAnswer + "0&991ede3502faa4d7");
            this.http.request(this.apiUrlAnswer + "0&991ede3502faa4d7")
                .subscribe((function (res) {
                if (res)
                    _this.data = res.json();
                console.log(res);
                var i = 0;
                while (_this.data[i]) {
                    if (_this.data[i][0].idTable != "error") {
                        if (_this.data[i][0].idTable != 2) {
                            _this.Questions[_this.data[i][0].idTable].answerUser = parseInt(_this.data[i][0].answerUser);
                            _this.Questions[_this.data[i][0].idTable].answerUser1 = parseInt(_this.data[i][0].answerUser1);
                            _this.Questions[_this.data[i][0].idTable].answerUser2 = parseInt(_this.data[i][0].answerUser2);
                            _this.Questions[_this.data[i][0].idTable].answerUser3 = parseInt(_this.data[i][0].answerUser3);
                            _this.Questions[_this.data[i][0].idTable].answerUser4 = parseInt(_this.data[i][0].answerUser4);
                            _this.Questions[_this.data[i][0].idTable].answerUser5 = parseInt(_this.data[i][0].answerUser5);
                            _this.Questions[_this.data[i][0].idTable].answerUser6 = parseInt(_this.data[i][0].answerUser6);
                            _this.Questions[_this.data[i][0].idTable].answerUser7 = parseInt(_this.data[i][0].answerUser7);
                            _this.Questions[_this.data[i][0].idTable].answerUser8 = parseInt(_this.data[i][0].answerUser8);
                            _this.Questions[_this.data[i][0].idTable].answerUser9 = parseInt(_this.data[i][0].answerUser9);
                            _this.Questions[_this.data[i][0].idTable].answerUser10 = parseInt(_this.data[i][0].answerUser10);
                            _this.Questions[_this.data[i][0].idTable].answerUser11 = parseInt(_this.data[i][0].answerUser11);
                            _this.Questions[_this.data[i][0].idTable].answerUser12 = parseInt(_this.data[i][0].answerUser12);
                            _this.Questions[_this.data[i][0].idTable].answerUser13 = parseInt(_this.data[i][0].answerUser13);
                        }
                        else
                            _this.Questions[_this.data[i][0].idTable].answerUser = new Date(_this.data[i][0].answerUser);
                    }
                    _this.verifCgu = 'true';
                    i++;
                }
            }));
            this.http.request("https://ciconia.io/api/getCgu/991ede3502faa4d7")
                .subscribe((function (res) {
                if (res) {
                    _this.data = res.json();
                    if (_this.data[0][0].idUser != "error")
                        _this.verifCgu = 'true';
                    else
                        _this.verifCgu = 'false';
                }
                console.log(_this.data);
            }));
        }
    };
    HomePage.prototype.init = function () {
        this.isInitialized = true;
        this.currentStep = this.sliderOne.getActiveIndex();
        this.totalStep = this.sliderOne.length();
        this.sliderOne.lockSwipes(true);
    };
    HomePage.prototype.ionSlideDidChange = function () {
        this.changing = false;
    };
    HomePage.prototype.ionSlideWillChange = function () {
        this.changing = true;
    };
    HomePage.prototype.slideChanged = function () {
        this.currentStep = this.sliderOne.getActiveIndex();
    };
    HomePage.prototype.ngAfterViewInit = function () {
    };
    HomePage.prototype.handleNext = function () {
        var _this = this;
        var mouseclick = new MouseEvent('click', { bubbles: false });
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.realFormButton.nativeElement, 'dispatchEvent', [mouseclick]);
        }, 10);
    };
    HomePage.prototype.reintialiseValue = function (idn, no, yes) {
        this.no = no;
        this.yes = yes;
        this.idn = idn;
        this.yesSave = yes;
        this.noSave = no;
        this.idnSave = idn;
    };
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sélectionnez au moins une des réponses',
            message: 'Nous avons besoin de toutes les informations qui vous sont demandées pour établir votre profil',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.alertInfo = function (id) {
        var alert = this.alertCtrl.create({
            title: this.Questions[id].infoTitle,
            message: this.Questions[id].infoText,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.nextForm = function (question) {
        var _this = this;
        this.http.post(this.apiUrlStat + question.type + "&clic next&" + Date.now() + "&" + question.id + "&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
        console.log(this.Questions);
        this.questionForm = question;
        if (this.questionForm.type == "number") {
            this.currentStep = this.questionForm.nextStep;
            if (this.questionForm.idTable == 9 && this.Questions[7].answerUser == this.number)
                this.currentStep = 12;
            this.Questions[this.questionForm.idTable].prevStep = this.questionForm.idTable;
            this.Questions[this.questionForm.idTable].answerUser = this.number;
            this.insertDB(this.Questions[this.questionForm.idTable]);
            if (this.questionForm.answerUser < 0 || this.questionForm.answerUser === false) {
                var alert_1 = this.alertCtrl.create({
                    title: '',
                    message: 'Veuillez rentrer un nombre valide',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else if (this.questionForm.answerUser < 13 && this.questionForm.id == 1 || this.questionForm.answerUser > 46 && this.questionForm.id == 1) {
                var alert_2 = this.alertCtrl.create({
                    title: '',
                    message: 'Avez-vous réellement ' + this.questionForm.answerUser + ' ans ?',
                    buttons: [
                        {
                            text: 'Oui',
                            handler: function () {
                                console.log('bien rentré');
                                var alert = _this.alertCtrl.create({
                                    title: 'Ce test n\'est pas adapté à votre situation',
                                    message: 'À votre âge une grossesse est nécessairement à très haut risque. Consultez un gynécologue.',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        },
                        {
                            text: 'Non',
                            handler: function () { }
                        }
                    ]
                });
                alert_2.present();
            }
            else if (this.questionForm.answerUser < 100 && this.questionForm.id == 27 || this.questionForm.answerUser > 220 && this.questionForm.id == 27) {
                var alert_3 = this.alertCtrl.create({
                    title: '',
                    message: 'Mesurez-vous réellement ' + this.questionForm.answerUser + ' cm ?',
                    buttons: [
                        {
                            text: 'Oui',
                            handler: function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Ce test n\'est pas adapté à votre situation',
                                    message: '',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        },
                        {
                            text: 'Non',
                            handler: function () { }
                        }
                    ]
                });
                alert_3.present();
            }
            else if (this.questionForm.answerUser < 30 && this.questionForm.id == 28 || this.questionForm.answerUser > 150 && this.questionForm.id == 28) {
                var alert_4 = this.alertCtrl.create({
                    title: '',
                    message: 'Pesez-vous réellement ' + this.questionForm.answerUser + ' kg ?',
                    buttons: [
                        {
                            text: 'Oui',
                            handler: function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Ce test n\'est pas adapté à votre situation',
                                    message: '',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        },
                        {
                            text: 'Non',
                            handler: function () { }
                        }
                    ]
                });
                alert_4.present();
            }
            else if (this.questionForm.answerUser > 1440 && this.questionForm.id == 30) {
                var alert_5 = this.alertCtrl.create({
                    title: '',
                    message: 'Mesurez-vous réellement ' + this.questionForm.answerUser + ' cm ?',
                    buttons: [
                        {
                            text: 'Oui',
                            handler: function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Ce test n\'est pas adapté à votre situation',
                                    message: '',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        },
                        {
                            text: 'Non',
                            handler: function () { }
                        }
                    ]
                });
                alert_5.present();
            }
            else if (this.questionForm.answerUser > 220 && this.questionForm.id == 31) {
                console.log(this.questionForm.answerUser);
                var alert_6 = this.alertCtrl.create({
                    title: '',
                    message: 'Mesurez-vous réellement ' + this.questionForm.answerUser + ' cm ?',
                    buttons: [
                        {
                            text: 'Oui',
                            handler: function () {
                                var alert = _this.alertCtrl.create({
                                    title: 'Ce test n\'est pas adapté à votre situation',
                                    message: '',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        },
                        {
                            text: 'Non',
                            handler: function () { }
                        }
                    ]
                });
                alert_6.present();
            }
            else
                this.manageSlideTo();
        }
        else if (this.questionForm.type == "yesNoIdn") {
            if (this.yes) {
                this.currentStep = this.questionForm.nextStep1;
                this.Questions[this.questionForm.idTable].answerUser = 1;
                this.insertDB(this.Questions[this.questionForm.idTable]);
                this.manageSlideTo();
            }
            else if (this.no) {
                this.currentStep = this.questionForm.nextStep2;
                this.Questions[this.questionForm.idTable].answerUser = 0;
                this.insertDB(this.Questions[this.questionForm.idTable]);
                if (this.currentStep == 250) {
                    this.reintialiseValue(false, true, false);
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__["a" /* IvgInfoPage */], { userParams: this.Questions });
                }
                this.manageSlideTo();
            }
            else if (this.idn) {
                this.currentStep = this.questionForm.nextStep3;
                this.Questions[this.questionForm.idTable].answerUser = 2;
                this.insertDB(this.Questions[this.questionForm.idTable]);
                if (this.currentStep == 250)
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ivg_info_ivg_info__["a" /* IvgInfoPage */], { userParams: this.Questions });
                this.manageSlideTo();
            }
            else
                this.presentAlert();
        }
        else if (this.questionForm.type == "yesNo") {
            if (this.yes) {
                console.log(this.questionForm.idTable);
                console.log(this.Questions[7].answerUser);
                this.currentStep = this.questionForm.nextStep1;
                if (this.questionForm.idTable == 8 && this.Questions[7].answerUser == 1)
                    this.currentStep = 12;
                if (this.questionForm.idTable == 14 && this.Questions[7].answerUser == 1)
                    this.currentStep = 17;
                this.Questions[this.questionForm.idTable].answerUser = 1;
                this.insertDB(this.Questions[this.questionForm.idTable]);
                this.manageSlideTo();
            }
            else if (this.no) {
                this.currentStep = this.questionForm.nextStep2;
                this.Questions[this.questionForm.idTable].answerUser = 0;
                this.insertDB(this.Questions[this.questionForm.idTable]);
                this.manageSlideTo();
            }
            else
                this.presentAlert();
        }
        else if (this.questionForm.type == "date") {
            if (this.Questions[1].answerUser == 2)
                this.Questions[3].title = "Désireriez-vous cette grossesse ?";
            if (this.date) {
                this.currentStep = this.questionForm.nextStep;
                this.Questions[this.questionForm.idTable].answerUser = new Date(this.date);
                this.dateR = Math.round(((new Date().getTime() - this.questionForm.answerUser.getTime()) / (1000 * 60 * 60 * 24)) / 7);
                if (this.device.uuid)
                    this.insertDB(this.Questions[this.questionForm.idTable]);
                if (this.dateR < 42 && this.dateR >= 0)
                    this.manageSlideTo();
            }
            else if (!this.Questions[this.questionForm.idTable].answerUser)
                this.presentAlert();
            if (this.dateR > 42) {
                var alert_7 = this.alertCtrl.create({
                    title: 'Vérifiez la date',
                    message: 'D\'après votre réponse vous seriez enceinte depuis plus de 9 mois ce qui est impossible.',
                    buttons: ['OK']
                });
                alert_7.present();
            }
            if (this.dateR < 0) {
                var alert_8 = this.alertCtrl.create({
                    title: 'Vérifiez la date',
                    message: 'La question est la date de vos dernière règle et non des prochaines veuillez renseigner cette date.',
                    buttons: ['OK']
                });
                alert_8.present();
            }
        }
        else if (this.questionForm.type == "multipleChoice"
            || this.questionForm.type == "multipleIf"
            || this.questionForm.type == "Psycho1") {
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], { userParams: this.Questions });
        }
        if (this.Questions[this.currentStep - 1])
            this.Questions[this.currentStep - 1].prevStep = this.questionForm.id;
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
    };
    HomePage.prototype.manageSlideTo = function () {
        this.sliderOne.lockSwipes(false);
        if (this.currentStep == 99)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], { userParams: this.Questions });
        else
            this.sliderOne.slideTo(this.currentStep, 350);
        this.sliderOne.lockSwipes(true);
    };
    HomePage.prototype.next = function () {
        console.log("toto");
        console.log(this.verifCgu);
        if (this.verifCgu == 'false') {
            if (this.cgu == false) {
                var alert_9 = this.alertCtrl.create({
                    title: 'CGU',
                    message: 'Acceptez les CGU avant de commencer',
                    buttons: ['OK']
                });
                alert_9.present();
            }
            else {
                this.http.post(this.apiUrlCGU + this.device.uuid + "&" + Date.now(), "")
                    .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
                this.http.post(this.apiUrlStat + "begin&clic next after begin&" + Date.now() + "&" + this.device.uuid, "")
                    .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
                if (!this.isInitialized)
                    this.init();
                this.currentStep++;
                this.manageSlideTo();
            }
        }
        else {
            console.log("LALALALAL");
            this.verifCgu == 'true';
            console.log(this.apiUrlCGU + this.device.uuid + "&" + Date.now());
            this.http.post(this.apiUrlStat + "begin&clic next after begin&" + Date.now() + "&" + this.device.uuid, "")
                .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
            if (!this.isInitialized)
                this.init();
            this.currentStep++;
            this.manageSlideTo();
        }
    };
    HomePage.prototype.prev = function () {
        this.currentStep--;
        this.manageSlideTo();
    };
    HomePage.prototype.prevStepFunction = function (question) {
        this.http.post(this.apiUrlStat + question.type + "&clic prev&" + Date.now() + "&" + question.id + "&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
        this.currentStep = question.prevStep;
        this.manageSlideTo();
    };
    HomePage.prototype.testCheck = function (answer, id) {
        answer = answer.toLocaleString();
        if (answer === "yes") {
            if (this.yesSave == false || !this.yesSave) {
                this.http.post(this.apiUrlStat + "yes" + "&question&" + Date.now() + "&" + this.currentStep + "&" + this.device.uuid, "")
                    .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
                this.reintialiseValue(false, false, true);
            }
            else
                this.yesSave = false;
        }
        else if (answer === "no") {
            this.http.post(this.apiUrlStat + "no" + "&question&" + Date.now() + "&" + this.currentStep + "&" + this.device.uuid, "")
                .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
            if (this.noSave === false)
                this.reintialiseValue(false, true, false);
            else
                this.noSave = false;
        }
        else {
            if (this.idnSave === false) {
                this.http.post(this.apiUrlStat + "idn&question&" + Date.now() + "&" + this.currentStep + "&" + this.device.uuid, "")
                    .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
                this.reintialiseValue(true, false, false);
            }
            else
                this.idnSave = false;
        }
    };
    HomePage.prototype.clickCgu = function (cgu) {
        if (cgu == true)
            this.cgu = true;
        else
            this.cgu = false;
    };
    HomePage.prototype.goCGU = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__cgu_cgu__["a" /* CGUPage */], {});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sliderOne'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "sliderOne", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('realFormButton'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "realFormButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="menu">\n    <ion-buttons class="buttonIon" start>\n      <button ion-button icon-only menuToggle>\n<img class="icoM" src="assets/icon/menu.png">\n            \n\n      </button>\n    </ion-buttons>\n\n  <ion-title class="headerTitle">CicoLite</ion-title>\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="result-info">\n    <label>Résultats</label><i class="result-info-icon icon icon-gift"></i>\n  </div>\n  <div [ngClass]="{\'visible\': currentStep != 0, progress: true }">\n    <div class="bar" ng-change="totalStep" [ngStyle]="{\'width\': (100 / totalStep) * currentStep + \'%\'}" ></div>\n  </div>\n  <div class="modal">\n    <div class="modal-overlay"></div>\n    <div class="modal-label">Fiche info</div>\n    <div class="modal-close-button touch"><i class="icon icon-cross"></i></div>\n    <div class="modal-content">\n      <h3>Alcool</h3>\n      <p>Comme nous ne savons pas si de petites doses sont toxiques, il est préférable de <b>déconseiller toute consommation</b>. Une prise de boissons alcoolisées, <b>même en petite quantité</b> ou <b>même une seule fois en grande quantité</b>, pourrait être <b>nocive</b> pour le foetus.</p>\n      <p>En cas de besoin, vous pouvez joindre <b>Ecoute Alcool</b> au <a href="tel:05454545">0811 91 30 30</a>.</p>\n    </div>\n  </div>\n  <!-- <div [ngClass]="{\'visible\': currentStep != 0, next: true }" >\n    <button class="button back-button touch" (click)="prev()"><i class="icon icon-chevron-left"></i>Retour</button>\n    <button class="button next-button touch" (click)="handleNext()">Suivant</button>\n  </div> -->\n\n\n  <ion-slides #sliderOne (slider)="false" (centeredSlides)="false" (zoom)="false" (ionSlideDidChange)="ionSlideDidChange()" (ionSlideWillChange)="ionSlideWillChange()">\n    <ion-slide>\n      <div class="welcome">\n        <div [ngClass]="{\'visible\': activeLogoWrapper, \'slide-wrapper logo-wrapper\': true }">\n          <div [ngClass]="{\'logo--active\': activeLogo, logo: true }"></div>\n        </div>\n        <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h2>Bienvenue !</h2>\n            <p><b>CicoLite</b> est une application de santé dédiée à la <b>grossesse</b>, développée en collaboration avec ses <b>médecins</b>. </p><p> Grâce à leurs expertises, <b>CicoLite</b> vous apportera ses conseils afin de mieux vous préparer à cet événement.</p>\n            <div *ngIf="verifCgu == \'false\'" (click)="clickCgu(cgu)">\n            <p><input type="checkbox" name="cgu" class="cgu" [(ngModel)]="cgu"><i>En utilisant CicoLite vous acceptez nos <a (click)="goCGU(cgu)">Conditions Générales d\'Utilisation </a> avant de commencer le test</i></p>\n          </div>\n          <button class="button touch" (click)="next()">Commencer</button>\n\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <div class="form-wrapper" *ngFor="let question of Questions; let i of index">\n      <form id={{question.idForm}} [ngClass]="{\'form-wrapper--hidden\': changing, \'form-wrapper\': true }" novalidate>\n        <ion-slide *ngIf="question.type == \'number\'">\n          <h3 [innerHtml]="question.title"></h3>\n          <input type="number" name="number" [(ngModel)]="number" required>\n           <div class="helpInfo" (click)="alertInfo(question.idTable)">\n          <img *ngIf="question.info == 1" class="helpIco" src="assets/icon/help.png" ><p [innerHtml]="question.infoMess"></p>\n        </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'yesNoIdn\'"> \n          <h3 [innerHtml]="question.title"></h3>\n          \n          <div class="checkbox">\n            <input id="radio{{i}}-1" type="checkbox" name="radio{{i}}-1" [(ngModel)]="yes" (click)="testCheck(\'yes\', i.idTable)">\n            <label for="radio{{i}}-1">Oui</label>\n          </div>\n          <div class="checkbox">\n            <input id="radio{{i.idTable}}-2" type="checkbox" checked="yes" name="radio{{i.idTable}}-2" [(ngModel)]="no" (click)="testCheck(\'no\', i.idTable)">\n            <label for="radio{{i}}-2">Non</label>\n          </div>\n          <div class="checkbox checkbox--large">\n            <input id="radio{{i}}-3" type="checkbox" checked="yes" name="radio{{i.idTable}}-3" [(ngModel)]="idn" (click)="testCheck(\'idn\', i.idTable)">\n            <label for="radio{{i}}-3">Je ne sais pas</label>\n          </div>\n          <div class="infoContent" (click)="alertInfo(question.idTable)">\n         <div class="helpInfo">\n          <img *ngIf="question.info == 1" class="helpIco" src="assets/icon/help.png" >\n        </div>\n        <p class="icoP" [innerHtml]="question.infoMess"></p>\n      </div>\n\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'yesNo\'">\n          <h3 [innerHtml]="question.title"></h3>\n          <div class="checkbox">\n            <input id="radio{{i}}-1" type="checkbox" name="checkbox{{i}}-1" [(ngModel)]="yes" (click)="testCheck(\'yes\')">\n            <label for="radio{{i}}-1">Oui</label>\n          </div>\n          <div class="checkbox">\n            <input id="radio{{i}}-2" type="checkbox" name="checkbox{{i}}-2" [(ngModel)]="no" (click)="testCheck(\'no\')">\n            <label for="radio{{i}}-2">Non</label>\n          </div>\n          <div class="infoContent" (click)="alertInfo(question.idTable)">\n         <div class="helpInfo">\n          <img *ngIf="question.info == 1" class="helpIco" src="assets/icon/help.png" >\n        </div>\n        <p class="icoP" [innerHtml]="question.infoMess"></p>\n      </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'Psycho1\'">\n\n          <h3 [innerHtml]="question.title"></h3>\n          <p><i>Cochez la ou les case(s) correspondante(s) à votre situation</i></p>\n          <div class="psycho">\n            <div class="checkbox">\n              <input id="Psycho1{{i}}-1" type="checkbox" name="Psycho1{{i}}-1" [(ngModel)]="answer.one">\n              <label for="Psycho1{{i}}-1">{{question.label1}}</label>\n            </div>\n            <div class="psycho1" *ngIf="answer.one">\n              <label for="Psycho1{{i}}-2">{{question.label2}}</label>\n              <br/>\n              <select name="Psycho1{{i}}-3" [(ngModel)]="answer.two">\n                <option value=0>Moins de 1 an </option>\n                <option value=1>Entre 1 an et 2 ans</option>\n                <option value=3>Plus de 2 ans</option>\n              </select>\n              <br/>\n              <label for="Psycho1{{i}}-3" [innerHtml]="question.label3"></label>\n              <input type="number" name="Psycho1{{i}}-3" [(ngModel)]="answer.three">\n            </div>\n            <div class="checkbox">\n              <input id="Psycho1{{i}}-4" type="checkbox" name="Psycho1{{i}}-4" [(ngModel)]="answer.four">\n              <label for="Psycho1{{i}}-4" [innerHtml]="question.label4"></label>\n            </div>\n            <div class="checkbox">\n              <input id="Psycho1{{i}}-5" type="checkbox" name="Psycho1{{i}}-5" [(ngModel)]="answer.five">\n              <label for="Psycho1{{i}}-5" [innerHtml]="question.label5"></label>\n            </div>\n          </div>\n        </ion-slide>\n        <ion-slide *ngIf="question.type == \'multipleIf\'">\n          <h3 [innerHtml]="question.title"></h3>\n          <p><i>Cochez la ou les case(s) correspondante(s) à votre situation</i></p>\n          <div class="psycho">\n            <div class="checkbox" *ngIf="Questions[20].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-1" type="checkbox" name="multipleIf{{i}}-1" [(ngModel)]="answer.one">\n              <label for="multipleIf{{i}}-1" [innerHtml]="question.label1"></label>\n            </div>\n            <div class="checkbox" *ngIf="Questions[21].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-2" type="checkbox" name="multipleIf{{i}}-2" [(ngModel)]="answer.two">\n              <label for="multipleIf{{i}}-2" [innerHtml]="question.label2"></label>\n            </div>\n            <div class="checkbox" *ngIf="Questions[22].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-3" type="checkbox" name="multipleIf{{i}}-3" [(ngModel)]="answer.three">\n              <label for="multipleIf{{i}}-3" [innerHtml]="question.label3"></label>\n            </div>\n            <div class="checkbox" *ngIf="Questions[23].answerUser == \'1\'">\n              <input id="multipleIf{{i}}-4" type="checkbox" name="multipleIf{{i}}-4" [(ngModel)]="answer.four">\n              <label for="multipleIf{{i}}-4" [innerHtml]="question.label4"></label>\n            </div>\n            <div class="checkbox">\n              <input id="multipleIf{{i}}-5" type="checkbox" name="multipleIf{{i}}-5" [(ngModel)]="answer.five">\n              <label for="multipleIf{{i}}-5" [innerHtml]="question.label5"></label>\n            </div>\n            <div class="checkbox">\n              <input id="multipleIf{{i}}-6" type="checkbox" name="multipleIf{{i}}-6" [(ngModel)]="answer.six">\n              <label for="multipleIf{{i}}-6" [innerHtml]="question.label6"></label>\n            </div>\n          </div>\n        </ion-slide>\n        <ion-slide class="scrollable-slide" *ngIf="question.type == \'multipleChoice\'">\n          <h3 [innerHtml]="question.title"></h3>\n          <p><i>Cochez la ou les case(s) correspondante(s) à votre situation</i></p>\n          <div class="psycho">\n            <div class="checkbox checkbox--large">\n              <input id="multiple{{i}}-1" type="checkbox" name="multiple{{i}}-1" [(ngModel)]="answer.one">\n              <label for="multiple{{i}}-1" [innerHtml]="question.label1"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label2">\n              <input id="multiple{{i}}-2" type="checkbox" name="multiple{{i}}-2" [(ngModel)]="answer.two">\n              <label for="multiple{{i}}-2" [innerHtml]="question.label2"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label3">\n              <input id="multiple{{i}}-3" type="checkbox" name="multiple{{i}}-3" [(ngModel)]="answer.three">\n              <label for="multiple{{i}}-3" [innerHtml]="question.label3"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label4">\n              <input id="multiple{{i}}-4" type="checkbox" name="multiple{{i}}-4" [(ngModel)]="answer.four">\n              <label for="multiple{{i}}-4" [innerHtml]="question.label4"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label5">\n              <input id="multiple{{i}}-5" type="checkbox" name="multiple{{i}}-5" [(ngModel)]="answer.five">\n              <label for="multiple{{i}}-5" [innerHtml]="question.label5"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label6">\n              <input id="multiple{{i}}-6" type="checkbox" name="multiple{{i}}-6" [(ngModel)]="answer.six">\n              <label for="multiple{{i}}-6" [innerHtml]="question.label6"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label7">\n              <input id="multiple{{i}}-7" type="checkbox" name="multiple{{i}}-7" [(ngModel)]="answer.seven">\n              <label for="multiple{{i}}-7" [innerHtml]="question.label7"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label8">\n              <input id="multiple{{i}}-8" type="checkbox" name="multiple{{i}}-8" [(ngModel)]="answer.eight">\n              <label for="multiple{{i}}-8" [innerHtml]="question.label8"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label9">\n              <input id="multiple{{i}}-9" type="checkbox" name="multiple{{i}}-9" [(ngModel)]="answer.nine">\n              <label for="multiple{{i}}-9" [innerHtml]="question.label9"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label10">\n              <input id="multiple{{i}}-10" type="checkbox" name="multiple{{i}}-10" [(ngModel)]="answer.ten">\n              <label for="multiple{{i}}-10" [innerHtml]="question.label10"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label11">\n              <input id="multiple{{i}}-11" type="checkbox" name="multiple{{i}}-11" [(ngModel)]="answer.eleven">\n              <label for="multiple{{i}}-11" [innerHtml]="question.label11"></label>\n            </div>\n            <div class="checkbox checkbox--large" *ngIf="question.label12">\n              <input id="multiple{{i}}-12" type="checkbox" name="multiple{{i}}-12" [(ngModel)]="answer.twelve">\n              <label for="multiple{{i}}-12" [innerHtml]="question.label12"></label>\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'date\'">\n          <h3 [innerHtml]="question.title"></h3>\n          <ion-datetime class="radios" name="date" placeholder="JJ/MM/YYYY" displayFormat="DD/MM/YYYY" [(ngModel)]="date"></ion-datetime>\n        </ion-slide>\n        <div [ngClass]="{\'visible\': currentStep != 0, next: true }" >\n\n          <button #realFormButton class="button next-button touch" (click)="nextForm(question)">Suivant</button>\n          <button class="button button--line prev-button touch" (click)="prevStepFunction(question)">Precedent</button>\n          \n        </div>\n      </form>\n\n    </div>\n\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CGUPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the IvgInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CGUPage = (function () {
    function CGUPage(navCtrl, navParams, device, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.http = http;
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        this.http.post(this.apiUrlStat + "cgu" + "&visite&" + Date.now() + "&cgu&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
    }
    CGUPage.prototype.ionViewDidLoad = function () {
    };
    CGUPage.prototype.nextBegin = function () {
        window.location.reload();
    };
    CGUPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cgu',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/cgu/cgu.html"*/'<ion-header>\n  <ion-navbar class="menu">\n    <ion-buttons class="buttonIon" start>\n      <button ion-button menuToggle>\n        <img class="icoM" src="assets/icon/menu.png">\n\n\n      </button>\n    </ion-buttons>\n\n    <ion-title class="headerTitle">CicoLite</ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content class="legal">\n	<div>\n<h3> CONDITIONS GÉNÉRALES D&#39;UTILISATION</h3>\n\n<h6 class="article">Article 1 - Définitions</h6>\n<p>On désignera par la suite :<br/>\n- &#39;Application&#39; : l&#39;application CicoLite et l&#39;ensemble de ses pages et écrans<br/>\n- &#39;Editeur&#39; : La personne, morale ou physique, responsable de l&#39;édition et du contenu de l&#39;application<br/>\n- &#39;Utilisateur&#39; : Le mobinaute visitant et utilisant l&#39;application\n</p>\n<h6 class="article">Article 2 - Mentions imposées par la loi de confiance dans l’économie numérique\net objet de l&#39;application</h6>\n<p>La présente application est éditée par Ciconia SAS.\nLes informations légales concernant l&#39;éditeur de l&#39;application, notamment les coordonnées et les éventuelles\ninformations de capital et d&#39;immatriculation, sont fournies dans les mentions légales de l&#39;application.</p>\n<p>Les informations concernant la collecte et le traitement des données personnelles (politique et déclaration) sont fournies dans la charte de données personnelles de l&#39;application.</p>\n<p>CicoLite est une application développée sous les conseils de médecins dont l&#39;objet est d’évaluer au travers de\nquestions les risques que vous encourez au cours de votre grossesse actuelle ou future et de vous prodiguer quelques conseils pour éviter ces risques. </p>\n<p>L&#39;utilisation de l&#39;application suppose l’acceptation, par l&#39;utilisateur, de l’intégralité des présentes conditions\ngénérales, qu&#39;il reconnaît du même fait en avoir pris pleinement connaissance. Cette acceptation sera réputée avoir la même valeur qu’une signature manuscrite de la part de l&#39;utilisateur. L&#39;utilisateur reconnaît la valeur de preuve des systèmes d’enregistrement automatique de l’éditeur de l&#39;application et, sauf pour lui d’apporter une\npreuve contraire, il renonce à les contester en cas de litige.</p>\n<p>L’acceptation des présentes conditions générales suppose de la part des utilisateurs qu’ils jouissent de la capacité juridique nécessaire pour cela. Si l&#39;utilisateur est mineur ou ne dispose pas de cette capacité juridique, il déclare avoir l’autorisation d’un tuteur, d’un curateur ou de son représentant légal.</p>\n\n<h6 class="article">Article 3 - Exonération de la responsabilité de l’éditeur dans le cadre de\nl’exécution du présent contrat</h6>\n<p>En cas d’impossibilité d’accès à l&#39;application, en raison de problèmes techniques ou de toutes natures, l&#39;utilisateur ne pourra se prévaloir d’un dommage et ne pourra prétendre à aucune indemnité.<br/>\nLes liens hypertextes présents sur l&#39;application peuvent renvoyer sur d&#39;autres applications ou sur des sites internet et la responsabilité de l’éditeur de l&#39;application ne saurait être engagée si le contenu de ces sites et applications contrevient aux législations en vigueur. De même la responsabilité de l’éditeur ne saurait être\nengagée si l&#39;utilisation de ces sites ou applications, par l&#39;utilisateur, lui causait un préjudice.</p>\n\n<h6 class="article">Article 4 - Limitation géographique d’utilisation</h6>\n<p>L’utilisation de l&#39;application et de ses services est limitée à la France, étant précisé que le contenu de l’application a été développé en se basant sur les dispositions de la législation française en vigueur</p>\n\n<h6 class="article">Article 5 - Droits de propriété intellectuelle relatifs aux éléments de l&#39;application</h6>\n<p>Tous les éléments de l&#39;application appartiennent à l&#39;éditeur ou à un tiers mandataire, ou sont utilisés par l&#39;éditeur avec l&#39;autorisation de leur propriétaire. Toute copie des logos, contenus textuels, pictographiques ou vidéos, sans que cette énumération ne soit limitative, est rigoureusement interdite et s’apparente à de la contrefaçon. Toute personne qui se rendrait coupable de contrefaçon serait susceptible de voir son compte supprimé sans préavis ni indemnité et sans que cette suppression ne puisse lui être constitutive d’un dommage, sans réserve d’éventuelles poursuites judiciaires ultérieures à son encontre, à l’initiative de l’éditeur de l&#39;application ou de son mandataire.</p>\n\n<h6 class="article">Article 6 - Limitation de responsabilité</h6>\n<p>L&#39;éditeur de l&#39;application, notamment dans le processus de vente en ligne, n’est tenu que par une obligation de moyens ; sa responsabilité ne pourra être engagée pour un dommage résultant de l&#39;application tel que perte de données, intrusion, virus, rupture du service, ou autres. L&#39;éditeur de l&#39;application, CicoLite, ne saurait être tenu\npour responsable de l&#39;inexécution du contrat conclu, due à la survenance d&#39;un événement de force majeure et notamment en cas de catastrophes causées par inondations ou incendies. L&#39;utilisateur admet expressément utiliser l&#39;application à ses propres risques et sous sa responsabilité exclusive. L&#39;application fournit à l&#39;utilisateur\ndes informations à titre indicatif, avec des imperfections, erreurs, omissions, inexactitudes et autres ambivalences susceptibles d&#39;exister. En tout état de cause, Ciconia ne pourra en aucun cas être tenu responsable :<br/>\n- de tout dommage direct ou indirect, notamment en ce qui concerne les pertes de profits, le manque à gagner, les pertes de clientèle, de données pouvant entre autres résulter de l&#39;utilisation de l&#39;application, ou au contraire de l&#39;impossibilité de son utilisation.<br/>\n- d&#39;un dysfonctionnement, d&#39;une indisponibilité d&#39;accès, d&#39;une mauvaise utilisation, d&#39;une mauvaise configuration du périphérique de l&#39;utilisateur, ou encore de l&#39;emploi d&#39;un périphérique peu usité ou obsolète par l&#39;utilisateur.\n<br/>\n- du contenu des publicités et autres liens ou sources externes accessibles par l&#39;utilisateur à partir de l&#39;application.</p>\n\n<h6 class="article">Article 7 - Accès à l&#39;application par connexion Internet</h6>\n<p>La responsabilité de l&#39;éditeur ne peut être engagée en raison d&#39;une indisponibilité technique de la connexion, qu&#39;elle soit due notamment à un cas de force majeure, à une maintenance, à une mise à jour, à une modification, à une intervention de l&#39;hébergeur, à une grève interne ou externe, à une panne de réseau, à une coupure d&#39;alimentation électrique, ou encore à une mauvaise configuration ou utilisation du périphérique de l&#39;utilisateur.</p>\n\n<h6 class="article">Article 8 - Clauses diverses</h6>\n<p>Les présentes conditions générales sont soumises à l’application du droit Français. Elles peuvent être modifiées à tout moment par l’éditeur ou son mandataire. Les conditions générales applicables à l’utilisateur sont celles en vigueur au jour de son achat ou de sa connexion sur l&#39;application. L’éditeur s’engage bien évidemment à conserver toutes ses anciennes conditions générales et à les faire parvenir à tout utilisateur qui en ferait la demande. Sauf dispositions d’ordre public, tous litiges qui pourraient survenir dans le cadre de l’exécution des présentes conditions générales pourront avant toute action judiciaire être soumis à l’appréciation de l’éditeur en vue d’un règlement amiable. Il est expressément rappelé que les demandes de règlement amiable ne suspendent pas les délais ouverts pour intenter les actions judiciaires. Sauf disposition contraire, d’ordre public, toute action judiciaire relative à l’exécution du présent contrat devra être soumise à la compétence des juridictions du ressort de la Cour d’appel saisie.</p>\n\n<h6 class="article">Article 9 - Utilisation de Cookies et de fichiers déposés sur le périphérique</h6>\n<p>Le mot « Cookie » est ici utilisé au sens large et englobe tout fichier déposé sur le périphérique de l&#39;utilisateur afin de l&#39;identifier ou de sauvegarder des informations de manière durable sur le périphérique. Un « Cookie » permet l&#39;identification de l&#39;utilisateur, la personnalisation de sa consultation et l&#39;accélération de l’affichage de l&#39;application grâce à l&#39;enregistrement d&#39;un fichier de données sur son périphérique. L&#39;application est susceptible d&#39;utiliser des « Cookies » principalement pour 1) permettre à l&#39;application de mémoriser les actions et réglages de l&#39;utilisateur dans l&#39;application, 2) obtenir des statistiques de navigation afin d&#39;améliorer l&#39;expérience de l&#39;Utilisateur, et 3) permettre l&#39;accès à un compte de membre et à du contenu qui n&#39;est pas accessible sans connexion. L&#39;Utilisateur reconnaît être informé de cette pratique et autorise l&#39;éditeur à y recourir.</p>\n\n<h6 class="article">Article 10 - Encadrement des conditions</h6>\n<p>Si une disposition des Conditions générales est jugée illégale, nulle ou pour toute autre raison inapplicable, alors cette disposition sera réputée divisible des Conditions et n&#39;affectera pas la validité et l&#39;applicabilité des dispositions restantes. Ces présentes conditions décrivent l’ensemble de l’accord entre l’utilisateur et l&#39;éditeur.<br/>\nElles remplacent tous accords antérieurs ou contemporains écrits ou oraux. Les conditions générales ne sont pas cessibles, transférables ou sous-licenciable par l’utilisateur lui-même. Une version imprimée des Conditions et de tous les avis donnés sous forme électronique pourra être demandée dans des procédures judiciaires ou administratives en rapport avec les conditions générales. Les parties conviennent que toute la correspondance relative à ces conditions générales doit être rédigée dans la langue française.</p>\n\n<h6 class="article">Article 11 - Notifications</h6>\n<p>Toute notification ou avis concernant les présentes conditions générales, les mentions légales ou la charte de données personnelles doit être faite par écrit et doit être remis en mains propres, courrier recommandé ou certifié, par Poste ou tout autre service de messagerie reconnu au niveau national qui permet de suivre régulièrement ses forfaits, ou encore par mail aux adresses indiquées dans les mentions légales de l&#39;application, en précisant vos noms, prénoms, coordonnées et objet de l’avis.</p>\n\n<h6 class="article">Article 12 - Réclamations</h6>\n<p>Toute réclamation liée à l&#39;utilisation de l&#39;application, des pages de l&#39;application sur des réseaux sociaux éventuels ou les conditions générales, mentions légales ou charte de données personnelles doit être déposée dans les 365 jours suivant le jour d’origine du problème source de réclamation, et ce indépendamment de toute loi ou règle de droit contraire. Dans le cas où une telle réclamation n’aurait pas été déposée dans les 365 jours suivants, une telle réclamation sera à jamais inapplicable en justice.</p>\n\n<h6 class="article">Article 13 - Inexactitudes</h6>\n<p>Il peut être possible que se trouvent, dans l’ensemble de l&#39;Application, et dans une mesure restreinte, des inexactitudes ou des erreurs, ou des informations qui soient en désaccord avec les présentes Conditions Générales, les Mentions Légales ou la Charte de Données personnelles de l&#39;Application. En outre, il est possible que des modifications non autorisées soient faites par des tiers sur l&#39;Application ou sur des services annexes\n(réseaux sociaux…).<br/>\nDans une telle situation, l&#39;Utilisateur a la possibilité de contacter l&#39;Editeur par courrier postal ou par mail aux adresses indiquées dans les mentions légales de l&#39;Application, avec si possible une description de l&#39;erreur et son emplacement dans l&#39;application, ainsi que des informations suffisantes permettant de le contacter.</p>\n\n<p><i>Tous droits réservés - 9 janvier 2018</i></p>\n<h3 class="article"><button class="button touch" (click)="nextBegin()">OK</button></h3>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/cgu/cgu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CGUPage);
    return CGUPage;
}());

//# sourceMappingURL=cgu.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_questionFile__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ResultPage = (function () {
    function ResultPage(navCtrl, navParams, http, device, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.activeWelcomeContent = false;
        this.isInitialized = false;
        this.apiUrlAnswer = "https://ciconia.io/api/getAnswer/";
        this.tests = [];
        this.apiUrlStat = "https://ciconia.io/api/addStat/";
        if (this.device.uuid)
            this.http.post(this.apiUrlStat + "begin" + "&result&" + Date.now() + "&result-step&" + this.device.uuid, "")
                .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
        this.Questions = navParams.get('userParams');
        console.log(this.Questions);
        if (!this.Questions) {
            this.Questions = __WEBPACK_IMPORTED_MODULE_2__home_questionFile__["a" /* default */];
        }
        console.log(this.Questions);
        this.tests = this.Questions;
        this.resultRisk = 0;
        //   this.test = this.Questions[28].answerUser;
    }
    ResultPage.prototype.nextBegin = function () {
        this.http.post(this.apiUrlStat + "end result" + "&clic return home&" + Date.now() + "&result-step&" + this.device.uuid, "")
            .map(function (res) { return res.json(); }).subscribe(function (data) { }, function (err) { });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    ResultPage.prototype.ngAfterViewInit = function () {
        this.slides.lockSwipes(false);
        //        this.slides.freeMode = true;
    };
    ResultPage.prototype.alertInfo = function () {
        var alert = this.alertCtrl.create({
            title: "<h6 class=\"h6Center\">Les types de maternité correspondent à un certain niveau de prise en charge pour la mère.</h6>",
            message: "<p class=\"sizeMin\"><b>Maternité de Type I :</b> <br/>Elle est adaptée aux grossesses, accouchements et nouveau-nés ne réclamant pas une technicité particulière.<br/><br/><b>Maternité de Type II A :</b><br/>  Elle dispose d'une unité de soins aux nouveau-nés. <br/><br/><b>Maternité de Type II B :</b><br/> Elle dispose une unité de soins aux nouveau-nés comportant des soins intensifs.<br/><br/><b>Maternité de Type III :</b><br/> Elle dispose d'une unité de soins adaptée aux nouveau-nés atteints de pathologie sévère ainsi qu'un service de réanimation néonatale.</p>",
            buttons: ['OK']
        });
        alert.present();
    };
    ResultPage.prototype.ngOnInit = function () {
        var self = this;
        setTimeout(function () {
            self.activeWelcomeContent = true;
        }, 250);
        //      this.slides.lockSwipes(false);
        this.IMC = this.Questions[27].answerUser / Math.pow(this.Questions[26].answerUser / 100, 2);
        this.result = [];
        this.resultSlide = [];
        this.conseil = [];
        this.positif = [];
        this.resultPsycho1 = 0;
        if (this.Questions[4].answerUser1 == true) {
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
        if (this.resultPsycho1 >= 2 || this.resultPsycho2 >= 5 || this.resultPsycho3 > 4 || this.resultPsycho4 >= 2) {
            this.psycho.push({
                type: "psycho",
                risk: "D'après vos antécédents vous présentez un risque de dépression post-partum.",
                positif: "Consulter un spécialiste <i>(psychologue, psychiatre, pédopsychiatre)</i> vous permettra de l'anticiper.",
                conseil: "Parlez-en à votre gynécologue ou à votre sage femme.",
            });
        }
        if (this.Questions[0].answerUser > 42)
            this.resultRisk += 50;
        else if (this.Questions[0].answerUser == 42)
            this.resultRisk += 20;
        else if (this.Questions[0].answerUser > 38)
            this.resultRisk += 2;
        if (this.Questions[18].answerUser > 10)
            this.resultRisk += 400;
        if (this.Questions[5].answerUser == true)
            this.resultRisk += 2;
        if (this.Questions[6].answerUser == true) {
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
        if (this.Questions[23].answerUser == true) {
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
        if (this.Questions[27].answerUser == true) {
            if (this.Questions[29].answerUser > 90)
                this.resultRisk += 2;
            if (this.Questions[29].answerUser == true)
                this.resultRisk += 2;
            if (this.Questions[28].answerUser > 10)
                this.resultRisk += 2;
        }
        if (this.Questions[1].answerUser == 2) {
            this.Questions[33].answerUser = Math.round(((new Date().getTime() - this.Questions[2].answerUser.getTime()) / (1000 * 60 * 60 * 24)) / 7);
            this.Questions[34].answerUser = this.Questions[33].answerUser;
            this.result = 4 - this.Questions[33].answerUser;
            if (this.result > 0)
                this.resultSlide.push({
                    type: "result",
                    risk: "",
                    positif: "Attendez encore un peu pour faire un test de grossesse.",
                    conseil: "",
                });
            else
                this.resultSlide.push({
                    type: "result",
                    risk: "",
                    positif: "Faites un test de grossesse.",
                    conseil: "",
                });
        }
        if (this.Questions[6].answerUser == 0 && this.Questions[3].answerUser == 1) {
            if (this.Questions[3].answerUser == 1) {
                this.resultSlide.push({
                    type: "result",
                    risk: "",
                    positif: "Félicitations vous allez avoir votre premier enfant.",
                    conseil: "",
                });
            }
        }
        else if (this.Questions[3].answerUser == 1 && this.Questions[1].answerUser == 1) {
            this.resultSlide.push({
                type: "result",
                risk: "",
                positif: "Félicitations vous êtes enceinte !",
                conseil: "",
            });
        }
        if (this.Questions[1].answerUser == true) {
            if (this.resultRisk >= 200)
                this.riskAssessment = "D'après vos <br/> réponses, vous présentez une grossesse à risque. Il serait préférable d'être suivie dans une maternité de type 3.";
            else if (this.resultRisk >= 50)
                this.riskAssessment = "D'après vos <br/>réponses, vous présentez une grossesse à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else if (this.resultRisk >= 20)
                this.riskAssessment = "D'après vos <br/>réponses vous présentez une grossesse à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else
                this.riskAssessment = "D'après vos <br/>réponses vous présentez une grossesse à bas risque.";
        }
        else {
            if (this.resultRisk >= 200)
                this.riskAssessment = "D'après vos <br/>réponses, votre futur grossesse sera à risque. Il serait préférable d'être suivie dans une maternité de type 3.";
            else if (this.resultRisk >= 50)
                this.riskAssessment = "D'après vos <br/>réponses, votre futur grossesse sera à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else if (this.resultRisk >= 20)
                this.riskAssessment = "D'après vos <br/>réponses votre futur grossesse sera à risque. Veillez à effectuer un suivi régulier dans la maternité de votre choix.";
            else
                this.riskAssessment = "D'après vos <br/>réponses votre futur grossesse sera à bas risque.";
        }
        if (this.Questions[0].answerUser < 17 && this.Questions[0].answer > 12) {
            this.resultSlide.push({
                type: "result",
                risk: "Votre jeune âge peut rendre l'accueil de votre bébé difficile.",
                positif: "Parlez en à votre entourage.",
                conseil: "Il existe des structures comme le <a href=\"http://www.planning-familial.org\">planning familliale</a>, <a href=\"http://www.aide-sociale.fr\">l'assistance sociale</a> pour vous guider en cas de difficultés. "
            });
        }
        else if (this.Questions[0].answerUser < 42 && this.Questions[0].answerUser >= 38)
            this.resultSlide.push({
                type: "result",
                risk: "A votre âge, vous présentez un risque d'anomalie chromosomique foetale qui n'est pas négligeable.",
                positif: "Être plus âgée pour élever ses enfants est aussi un gage de maturité !",
                conseil: "Nous vous conseillons d'effectuer les dépistages d'anomalies chromosiques foetale(s).",
            });
        else if (this.Questions[0].answerUser > 42)
            this.resultSlide.push({
                type: "result",
                risk: "A votre âge, vous présentez un risque élevé d'anomalie chromosomique foetale.",
                positif: "Être plus âgée pour élever ses enfants est aussi un gage de maturité !",
                conseil: "Nous vous conseillons d'en effectuer le dépistage, parlez-en à votre médecin.",
            });
        else if (this.Questions[0].answerUser < 38) {
            this.resultSlide.push({
                type: "result",
                risk: "",
                positif: "Vous avez l'âge optimal pour faire un enfant.",
                conseil: ""
            });
        }
        if (this.Questions[5].answerUser == true && this.Questions[1].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous fumez, ce qui peut entrainer de nombreuses complications.",
                positif: "",
                conseil: "Faites vous aider pour arrêter de fumer et prévenir d'éventuelles complications pour votre bébé.",
            });
        else if (this.Questions[5].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous fumez, ce qui peut entrainer de nombreuses complications lors d'une future grossesse.",
                positif: "",
                conseil: "Avant de tomber enceinte faites vous aider pour arrêter de fumer et prévenir d'éventuelles complications pour votre bébé.",
            });
        if (this.Questions[8].answerUser == true && this.Questions[13].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez eu un enfant de plus de 4kg, vous risquez de développer un diabète de grossesse.",
                positif: "",
                conseil: "Effectuez un dépistage, parlez-en à votre médecin."
            });
        else if (this.Questions[8].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez eu un enfant de plus de 4kg, vous risquez de développer un diabète de grossesse.",
                positif: "",
                conseil: "Anticipez ! Effectuez un dépistage de diabète gestationnel dès le début de la grossesse.",
            });
        if (this.Questions[11].answerUser == false && this.Questions[10].answerUser == true) {
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin. ",
                positif: "Vous avez 9 chances sur 10 d’avoir un bébé de poids normal cette fois ci !",
                conseil: "",
            });
        }
        if (this.Questions[12].answerUser == 1 && this.Questions[1].answerUser == 1) {
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez eu une pré-éclampsie.",
                positif: "Vous avez entre 70 et 90% de chance que cela ne se reproduise pas !",
                conseil: "Faites-vous suivre par un médecin, des dépistages réguliers complémentaires sont à effectuer.",
            });
        }
        else if (this.Questions[12].answerUser == 1) {
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez eu une pré-éclampsie.",
                positif: "Vous avez entre 70 et 90% de chance que cela ne se reproduise pas !",
                conseil: "Faites-vous suivre par un médecin, des dépistages réguliers complémentaires seront à effectuer.",
            });
        }
        if (this.Questions[18].answerUser >= 3) {
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez un nombre élevé de fausses couches.",
                positif: "",
                conseil: "Vos fausses couches à répétition vous angoissent certainement. Prenez RDV chez un spécialiste pour vous faire confirmer qu’elles sont accidentelles.",
            });
        }
        if (this.Questions.IMG)
            this.resultSlide.push({
                type: "result",
                risk: "Vous avez déjà subi une IMG mais votre risque de récidive est faible.",
                positif: "La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare.Prenez rendez-vous pour une consultation spécialisée pour vous le faire confirmer.",
                conseil: "",
            });
        if (this.Questions[19].answerUser < 10 && this.Questions[19].answerUser > 0 && this.Questions[1].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous consommez de l'alcool",
                positif: "",
                conseil: "Il est nécessaire de stopper toute consommation d'alcool lorsque vous êtes enceinte !",
            });
        else if (this.Questions[19].answerUser < 10 && this.Questions[19].answerUser > 0)
            this.resultSlide.push({
                type: "result",
                risk: "Vous consommez de l'alcool",
                positif: "",
                conseil: "Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte."
            });
        else if (this.Questions[19].answerUser >= 10 && this.Questions[1].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre consommation d’alcool est trop élevée. Votre bébé court des risques importants de malformations et de retard mental.",
                positif: "",
                conseil: "Profitez de votre grossesse annoncée pour vous motiver à stopper l’alcool ! Prenez rendez-vous dans un centre spécialisé pour vous aider.",
            });
        else if (this.Questions[19].answerUser >= 10)
            this.resultSlide.push({
                type: "result",
                risk: "Votre consommation d’alcool est trop élevée.",
                positif: "",
                conseil: "Prenez rendez-vous dans un centre spécialisé pour vous faire aider.",
            });
        if (this.Questions[25].answerUser1 == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre grossesse pourrait déséquilibrer votre épilepsie.",
                positif: "",
                conseil: "Il serait préférable que vous soyez prise en charge par une équipe spécialisée pour vérifier le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[20].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre grossesse pourrait déséquilibrer votre épilepsie.",
                positif: "",
                conseil: "Parlez-en à votre médecin.",
            });
        if (this.Questions[25].answerUser2 == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre antécédent de phlébite provoque des risques.",
                positif: "",
                conseil: "Votre grossesse pourrait déséquilibrer votre traitement, il serait préférable que vous soyez prise en charge par une équipe spécialisée pour vérifier le choix des anticoagulants et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[21].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre antécédent de phlébite provoque des risques.",
                positif: "",
                conseil: "Consultez sans délai un médecin pour la prescription d'un traitement adapté.",
            });
        if (this.Questions[25].answerUser3 == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre grossesse pourrait déséquilibrer votre hypertension.",
                positif: "",
                conseil: " Il serait préférable d’être prise en charge par une équipe spécialisée pour vérifier le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[22].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Votre grossesse pourrait déséquilibrer votre hypertension.",
                positif: "",
                conseil: "Consultez sans délai un médecin pour la prescription d'un traitement adapté.",
            });
        if (this.Questions[25].answerUser4 == true)
            this.resultSlide.push({
                type: "result",
                risk: "Pendant la grossesse, votre diabète sera déséquilibré.",
                positif: "",
                conseil: "Vous devrez donc être prise en charge par une équipe spécialisée pour vérifier le choix des antidiabétiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée."
            });
        else if (this.Questions[22].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Pendant la grossesse, votre diabète sera déséquilibré.",
                positif: "",
                conseil: "Consultez sans délai un médecin pour la prescription d'un traitement adapté.",
            });
        if (this.Questions[25].answerUser5 == true && this.Questions[1].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous prennez des médicament",
                positif: "Attention jamais d'automédication pendant la grossesse vous pourriez mettre en danger votre bébé.",
                conseil: "Vérifiez auprès de votre médecin ou sur <a href=\"http://www.crat.org\">www.crat.org</a> si le ou les médicaments sont compatible avec votre grossesse."
            });
        else if (this.Questions[25].answerUser5 == true) {
            this.resultSlide.push({
                type: "result",
                risk: "Vous prennez des médicament",
                positif: "Attention jamais d'automédication pendant la grossesse vous pourriez mettre en danger votre bébé.",
                conseil: "Vérifiez auprès de votre médecin ou sur <a href=\"http://www.crat.org\">www.crat.org</a> si le ou les médicaments sont compatible avec votre projet de grossesse."
            });
        }
        if (this.IMC < 18.5)
            this.resultSlide.push({
                type: "result",
                risk: "Vous êtes en sous poids.",
                positif: "",
                conseil: "Essayez de vous alimentez suffisamment.",
            });
        else if (this.IMC > 35 && this.IMC < 40)
            this.resultSlide.push({
                type: "result",
                risk: "Vous êtes en surpoids.",
                positif: "",
                conseil: "",
            });
        else if (this.IMC > 40)
            this.resultSlide.push({
                type: "result",
                risk: "Vous êtes en surpoids.",
                positif: "",
                conseil: "Il serait préférable d'être prise en charge dans un centre spécialisé.",
            });
        if (this.Questions[29].answerUser > 10 && this.Questions[29].answerUser <= 12)
            this.resultSlide.push({
                type: "result",
                risk: "Vous travaillez beaucoup.",
                positif: "",
                conseil: "Organisez-vous pour un éventuel aménagement de vos horaires ou une mise en place de télétravail.",
            });
        if (this.Questions[29].answerUser > 12)
            this.resultSlide.push({
                type: "result",
                risk: "Votre nombre d'heures de travail est vraiment très élevé.",
                positif: "",
                conseil: "Organisez-vous pour un éventuel aménagement de vos horaires ou une mise en place de télétravail.",
            });
        if (!this.Questions[28].answerUser)
            this.resultSlide.push({
                type: "result",
                risk: "",
                positif: "Prenez le temps de préparer la venue de votre enfant et de vous occuper de vous.",
                conseil: "",
            });
        if (this.Questions[30].answerUser > 90)
            this.resultSlide.push({
                type: "result",
                risk: "Votre temps de trajet pour aller travailler est élevé.",
                positif: "",
                conseil: "Organisez-vous pour une éventuelle mise en place de télétravail afin de diminuer les temps de trajets.",
            });
        if (this.Questions[31].answerUser == true)
            this.resultSlide.push({
                type: "result",
                risk: "Vous travaillez debout plus de 6 heures par jour.",
                positif: "",
                conseil: "Organisez-vous pour un éventuel aménagement de vos conditions de travail. Vous allez être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour.",
            });
        this.answers = this.resultSlide.concat(this.psycho);
        console.log(this.answers);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], ResultPage.prototype, "slides", void 0);
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/kwame/Desktop/cicoB/src/pages/result/result.html"*/'<ion-header>\n  <ion-navbar class="menu">\n    <ion-buttons class="buttonIon" start>\n      <button ion-button icon-only menuToggle>\n<img class="icoM" src="assets/icon/menu.png">\n            \n\n      </button>\n    </ion-buttons>\n\n  <ion-title class="headerTitle">CicoLite</ion-title>\n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="result-info visible" >\n    <label>Résultats</label>\n  </div>\n  <ion-slides *ngIf=\'Questions[28].answerUser != -1\' pager>\n\n    <ion-slide *ngIf=\'Questions[28].answerUser != -1\'>\n      <div class="welcome">\n               <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h4 [innerHtml]="riskAssessment"></h4>\n\n            <div class="infoContent"  *ngIf="resultRisk >= 20">\n              <div class="helpInfo">\n                <img class="helpIco" src="assets/icon/help.png" (click)="alertInfo()">\n              </div>\n              <p (click)="alertInfo()">Quels sont les différent types de maternité</p>\n            </div>\n          <div class="swipe-helper"><i class="icon icon-fingers-scroll-horizontal"></i></div>\n\n          </div>\n\n        </div>\n      </div>\n\n    </ion-slide>\n    <ion-slide  *ngFor="let answer of answers" >\n      <div>\n       <h1 class="risk" [innerHtml]="answer.risk"></h1> \n       <br/>\n       <h1 class="conseil" [innerHtml]="answer.conseil"></h1>      \n       <br/>\n       <h1 class="positif" [innerHtml]="answer.positif"></h1>\n     </div>\n   </ion-slide>\n   <ion-slide class="positif" *ngIf=\'Questions[28].answerUser != -1\'>\n    <h1>Et voilà !</h1>\n    <p>Pour recommencer, cliquez sur le bouton juste en dessous</p>\n    <button class="button touch" (click)="nextBegin()">Recommencer</button>\n  </ion-slide>\n   <ion-slide class="positif" *ngIf=\'Questions[28].answerUser == -1\'>\n    <h1>Remplissez le questionnaire !</h1>\n    <p>Nous avons besoin de toutes les informations vous concernant pour établir votre profil de risque et vous conseiller au mieux</p>\n    <button class="button touch" (click)="nextBegin()">Commencer</button>\n  </ion-slide>\n\n</ion-slides>\n<ion-slides *ngIf=\'Questions[28].answerUser == -1\' pager>\n\n    <ion-slide *ngIf=\'Questions[28].answerUser != -1\'>\n      <div class="welcome">\n        <div class="slide-wrapper welcome-wrapper">\n          <div [ngClass]="{\'visible\': activeWelcomeContent, \'welcome-content\': true }">\n            <h4 [innerHtml]="riskAssessment"></h4>\n\n            <div class="infoContent"  *ngIf="resultRisk >= 20">\n              <div class="helpInfo">\n                {{resultRisk}}\n                <img class="helpIco" src="assets/icon/help.png" (click)="alertInfo()">\n              </div>\n              <p (click)="alertInfo()">Quels sont les différent types de maternité</p>\n            </div>\n          <div class="swipe-helper"><i class="icon icon-fingers-scroll-horizontal"></i></div>\n\n          </div>\n\n        </div>\n      </div>\n\n    </ion-slide>\n    <ion-slide class="positif" *ngIf=\'Questions[28].answerUser == -1\'>\n    <h1>Remplissez le questionnaire !</h1>\n    <p>Nous avons besoin de toutes les informations vous concernant pour établir votre profil de risque et vous conseiller au mieux</p>\n    <button class="button touch" (click)="nextBegin()">Commencer</button>\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/kwame/Desktop/cicoB/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map