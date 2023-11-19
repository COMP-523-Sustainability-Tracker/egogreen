import { Component, OnInit } from '@angular/core'

import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-auth'; 
import '@nativescript/firebase-firestore';
import '@nativescript/firebase-storage'; 

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase().initializeApp().then(fbApp => {
      console.log("Firebase app initialized!", fbApp.name)
    
      // To use with the Firebase Emulator
      // firebase().auth().useEmulator('localhost', 9099);
      // firebase().storage().useEmulator('localhost', 9199);
      // ... and other emulator ports
    
      firebase().auth().addAuthStateChangeListener(async (user) => {
        if (!user) {
          // User is currently signed out!
        } else {
          // User is signed in!

        }
      })
      
      // Other modules' init functions
      firebase().auth().signInWithEmailAndPassword('dummy@gmail.com', 'pass123!')
      .then(UserCredential => {
        console.log("Logged in")
        console.log("user:" + JSON.stringify(UserCredential))})
      .catch((error) => {
        console.log("Not logged in")
        console.log("error: " + JSON.stringify(error)
        )})
      }
   
    )}
}