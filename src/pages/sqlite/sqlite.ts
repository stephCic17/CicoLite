import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';

@Component({
	selector: 'page-sqlite',
	templateUrl: 'sqlite.html'
})

export class SQLitePage {

	private db: SQLiteObject;
	test:string;
	constructor(public navCtrl: NavController, private sqlite: SQLite)	{ this.createDataBase(); }
	private createDataBase(): void {
		this.sqlite.create({
			name: DATABASE_FILE_NAME,
			location: 'default',
		})
		.then((db: SQLiteObject) => {
			this.db = db;
			this.test = "db cree";
			this.createTable();
		})
		.catch(e => console.log(e));
	}
	private createTable(): void {

			this.db.executeSql('CREATE TABLE IF NOT EXISTS `Questions` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `idTable` INTEGER NOT NULL, `title` TEXT, `type` TEXT, `prevStep` INTEGER, `nextStep` INTEGER, `answerUser` INTEGER, `answerUser1` INTEGER, `answerUser2` INTEGER, `answerUser3` INTEGER, `answerUser4` INTEGER, `answerUser5` INTEGER, `answerUser6` INTEGER, `answerUser7` INTEGER, `answerUser8` INTEGER, `answerUser9` INTEGER, `answerUser10` INTEGER, `answerUser11` INTEGER, `answerUser12` INTEGER, `answerUser13` INTEGER, `label` TEXT, `nextStep1` INTEGER, `nextStep2` INTEGER, `nextStep3` INTEGER, `label1` INTEGER, `label2` INTEGER, `label3` INTEGER, `label4` INTEGER, `label5` INTEGER, `label6` INTEGER, `label7` INTEGER, `label8` INTEGER, `label9` INTEGER, `label10` INTEGER, `label11` INTEGER, `label12` INTEGER, `label13` INTEGER )', {})
			.then(() => {
			this.test = "table cree"

				 })
				.catch(e => console.log(e));
			this.navCtrl.push(HomePage, { db:this.db });
	}
}