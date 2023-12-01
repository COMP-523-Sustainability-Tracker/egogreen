import {Injectable, NgZone} from "@angular/core"
import {User, Receipt } from "../models";
import { BackendService } from "./backend.service"
import { UtilsService } from './utils.service'
import { firebase } from '@nativescript/firebase-core'
import { Dialogs } from '@nativescript/core'
import {Observable, BehaviorSubject} from 'rxjs'
import { share } from 'rxjs/operators'

@Injectable()
export class FirebaseService {
  constructor(
    private ngZone: NgZone,
    private utils: UtilsService
  ){} 

  private _allItems: Array<Receipt> = [];
  items: BehaviorSubject<Array<Receipt>> = new BehaviorSubject([]);
 
  register(user: User) {
    return firebase().auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(
          function (result:any) {
            return JSON.stringify(result);
          },
          function (errorMessage:any) {
            this.handleErrors(errorMessage);
          }
      )
  }

  login(user: User) {
    return firebase().auth().signInWithEmailAndPassword(user.email, user.password)
    .then((result: any) => {
          BackendService.token = result.uid;
          return JSON.stringify(result);
      }, (errorMessage: any) => {
        console.log(errorMessage)
        this.handleErrors(errorMessage)
        })
  }


  logout(){
    BackendService.token = "";
    firebase().auth().signOut();    
  }
  
  resetPassword(email) {
    return firebase().auth().sendPasswordResetEmail(email)
    .then((result: any) => {
          Dialogs.alert({
            title: 'Email sent',
            message: "If an account exists for the email account provided, than a password reset link has been sent to the email address provided. (" + email + ")",
            okButtonText: 'OK',
            cancelable: true,})
        }, (errorMessage:any) => {
          this.handleErrors(errorMessage);
        }
    )
  }

  handleErrors(error) {
    console.log(JSON.stringify(error))
    Dialogs.alert({
      title: 'Error!',
      message: error.message,
      okButtonText: 'OK',
      cancelable: true,})
  }

}