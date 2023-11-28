import { Component } from '@angular/core'
import { Dialogs, prompt } from '@nativescript/core'
import {User} from '../models/user.model'
import {FirebaseService} from '../services'
import { RouterExtensions } from '@nativescript/angular';
import { fromEvent, Observable } from 'rxjs'
import { map, tap } from "rxjs/operators";


@Component({
  moduleId: module.id,
  selector: 'ns-login',
  templateUrl: 'login.component.html',
})


export class LoginComponent {
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;

  
  constructor(private routerExtensions: RouterExtensions, 
              private firebaseService: FirebaseService
            ) 
  {
    this.user = new User();
    this.user.email = "";
    this.user.password = "";


  }

 async submit() {
    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      await this.login();
    } else {
      await this.signUp();
    }
  }

  async login() {
    try {
      await this.firebaseService.login(this.user)
      this.isAuthenticating = false;
      console.log("here")
      this.routerExtensions.navigate(["/"], { clearHistory: true } )
    } catch (error){
      this.isAuthenticating = false;
    }
     
  }

  async signUp() {
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.toggleDisplay();
      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });
  }

  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for EgoGreen to reset your password.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result) {
        this.firebaseService.resetPassword(data.text.trim())
      }
    });
 }
  
toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}