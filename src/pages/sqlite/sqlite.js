var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SQLite } from '@ionic-native/sqlite';
var DATABASE_FILE_NAME = 'data.db';
var SQLitePage = /** @class */ (function () {
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
        this.navCtrl.push(HomePage, { db: this.db });
    };
    SQLitePage = __decorate([
        Component({
            selector: 'page-sqlite',
            templateUrl: 'sqlite.html'
        }),
        __metadata("design:paramtypes", [NavController, SQLite])
    ], SQLitePage);
    return SQLitePage;
}());
export { SQLitePage };
//# sourceMappingURL=sqlite.js.map