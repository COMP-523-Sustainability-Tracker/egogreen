import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule, authProviders } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, LoginComponent, HomeComponent, RegisterComponent],
  providers: [
    //BackendService,
    //FirebaseService,
    //UtilsService,
    authProviders],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
