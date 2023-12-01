import { Component } from '@angular/core'
import { prompt } from '@nativescript/core'
import {User} from '../models/user.model'
import {FirebaseService, BackendService} from '../services'
import { RouterExtensions } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular'


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
    this.user.email = "dude@aol.com";
    this.user.password = "testing";


  }

 async submit() {
    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      //console.log("logging in: " + this.user.email + " " + this.user.password)
      await this.login();
      //console.log("Submit After login: " + BackendService.token + this.isAuthenticating)
      if(BackendService.isLoggedIn()) {
        this.routerExtensions.navigate(["/"], { clearHistory: true } )
      } 
    } else {
      await this.signUp();
    }
  }

  async login() {
    try {
      this.isAuthenticating = false;
      await this.firebaseService.login(this.user)
    } catch (error){
      this.isAuthenticating = false;
    }
     
  }

  async signUp() {
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.toggleDisplay();
        if(BackendService.isLoggedIn()) {
          this.routerExtensions.navigate(["/"], { clearHistory: true } )
        } 
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