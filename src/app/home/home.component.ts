import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Image } from '@nativescript/core';


@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


	constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit() { }

	btnSubmit(){
		this.routerExtensions.navigate(["/login"], {clearHistory: false})
	}

	loadRegister(){
		this.routerExtensions.navigate(["/register"], {clearHistory: false})
	}

	
}

