import {Injectable, NgZone} from "@angular/core"
import { User } from "../models";
import { BackendService } from "./backend.service"
import { firebase } from '@nativescript/firebase-core'
import { Dialogs } from '@nativescript/core'

@Injectable()
export class FirebaseService {

  constructor(
    private ngZone: NgZone,
  ){} 

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
    BackendService.token = ""
    firebase().auth().signOut()   
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
  
/*
  getMyReceipts(): Observable<any> {
    return new Observable((observer: any) => {
      let path = "userData/" + BackendService.token + "/receipts";
      console.log(path);
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
            let results = this.handleSnapshot(snapshot.value);
            console.log(JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase().firestore() addValueEventListener(onValueEvent, `/${path}`);
    }).pipe(share());              
  }


  handleSnapshot(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
        if(BackendService.token === result.UID){
          this._allItems.push(result);
        }        
      }
      this.publishUpdates();
    }
    return this._allItems;
  }

  publishUpdates() {
    // here, we sort must emit a *new* value (immutability!)
    this._allItems.sort(function(a, b){
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
      return 0;
    })
    this.items.next([...this._allItems]);
  }

/*
  getMyGift(id: string): Observable<any> {
    return new Observable((observer: any) => {
      observer.next(this._allItems.filter(s => s.id === id)[0]);
    }).pipe(share());
  }

  getMyMessage(): Observable<any>{
    return new Observable((observer:any) => {
      firebase().remoteConfig().setDefaults({
      developerMode: false, // play with this boolean to get more frequent updates during development
      cacheExpirationSeconds: 10, // 10 minutes, default is 12 hours.. set to a lower value during dev
      properties: [{
      key: "message",
      default: "Happy Holidays!"
    }]
  }).then(
        function (result) {
          console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
          for (let entry in result.properties) 
            { 
              observer.next(result.properties[entry]);
            }
        }
    );
  }).pipe(share());
}

    

  handleSnapshot(data: any) {
    //empty array, then refill and filter
    this._allItems = [];
    if (data) {
      for (let id in data) {        
        let result = (<any>Object).assign({id: id}, data[id]);
        if(BackendService.token === result.UID){
          this._allItems.push(result);
        }        
      }
      this.publishUpdates();
    }
    return this._allItems;
  }

   publishUpdates() {
    // here, we sort must emit a *new* value (immutability!)
    this._allItems.sort(function(a, b){
        if(a.date < b.date) return -1;
        if(a.date > b.date) return 1;
      return 0;
    })
    this.items.next([...this._allItems]);
  }

  add(gift: string) {   
    return firebase().firestore().push(
        "/Gifts",
        { "name": gift, "UID": BackendService.token, "date": 0 - Date.now(), "imagepath": ""}
      ).then(
        function (result:any) {
          return 'Gift added to your wishlist!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        }); 
  }

  editGift(id:string, description: string, imagepath: string){
    this.publishUpdates();
    return firebase.update("/Gifts/"+id+"",{
        description: description, 
        imagepath: imagepath})
      .then(
        function (result:any) {
          return 'You have successfully edited this gift!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }
  editDescription(id:string, description: string){
    this.publishUpdates();
    return firebase.update("/Gifts/"+id+"",{
        description: description})
      .then(
        function (result:any) {
          return 'You have successfully edited the description!';
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });  
  }
  delete(gift: Gift) {
    return firebase.remove("/Gifts/"+gift.id+"")
      .catch(this.handleErrors);
  }
  
  uploadFile(localPath: string, file?: any): Promise<any> {
      let filename = this.utils.getFilename(localPath);
      let remotePath = `${filename}`;   
      return firebase.uploadFile({
        remoteFullPath: remotePath,
        localFullPath: localPath,
        onProgress: function(status) {
            console.log("Uploaded fraction: " + status.fractionCompleted);
            console.log("Percentage complete: " + status.percentageCompleted);
        }
      });
  }

  getDownloadUrl(remoteFilePath: string): Promise<any> {
      return firebase.getDownloadUrl({
        remoteFullPath: remoteFilePath})
      .then(
        function (url:string) {
          return url;
        },
        function (errorMessage:any) {
          console.log(errorMessage);
        });
  }
*/
  handleErrors(error) {
    console.log(JSON.stringify(error))
    Dialogs.alert({
      title: 'Error!',
      message: error.message,
      okButtonText: 'OK',
      cancelable: true,})
    //return Promise.reject(error.message)
  }

}