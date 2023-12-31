import { Component } from '@angular/core'
import { prompt } from '@nativescript/core'
import {User} from '../models/user.model'
import {FirebaseService, BackendService} from '../services'
import { RouterExtensions } from '@nativescript/angular'
import { ReceiptService } from '../item/item.service'

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
              private firebaseService: FirebaseService,
              private receiptService: ReceiptService
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
      if(BackendService.isLoggedIn()) {
        this.authenticatedSetup()
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
          this.authenticatedSetup()
        } 
      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });
  }

  async authenticatedSetup(){
    if(BackendService.isLoggedIn()) {
      this.receiptService.setCollection()
      this.routerExtensions.navigate(["/"], { clearHistory: true } )
    } 
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