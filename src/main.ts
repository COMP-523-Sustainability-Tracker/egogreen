import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { BackendService } from "./app/services/backend.service";
import { AppModule } from './app/app.module';

import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-auth'
import '@nativescript/firebase-firestore'
import '@nativescript/firebase-remote-config'

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

const fbApp = await firebase().initializeApp()
console.log("FireBase Init Ok " + fbApp.name)

firebase().auth()
  .addAuthStateChangeListener((data) => {
    if (!data) {
      BackendService.token = "";
      console.log('User is currently signed out!');
    } else {
      BackendService.token = data.uid;
      console.log('User is signed in! ' + BackendService.token);
    }
  })
