import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule, authProviders } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

import { BackendService, FirebaseService, UtilsService } from "./services"

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [
    BackendService,
    FirebaseService,
    UtilsService,
    authProviders],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
