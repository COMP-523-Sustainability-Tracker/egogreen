import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { AuthGuard } from "./auth-guard.service"

import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'items', component: ItemsComponent, canActivate: [AuthGuard] },
  { path: 'item/:id', component: ItemDetailComponent, canActivate: [AuthGuard] },
]

const appRoutes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)   },
  { path: 'login/logout', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)   },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}

export const authProviders = [AuthGuard]
