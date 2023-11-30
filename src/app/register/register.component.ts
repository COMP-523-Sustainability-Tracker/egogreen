import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'ns-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private routerExtensions: RouterExtensions) { }

  loadLogin() {
    this.routerExtensions.navigate(["/login"], {clearHistory: false})
		console.log("here")
  }

}