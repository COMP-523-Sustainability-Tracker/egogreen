import { Injectable } from "@angular/core";
import { NgModule } from '@angular/core'
import { CanActivate, Router } from "@angular/router";

import { BackendService } from "./services/backend.service";

//@NgModule()

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (BackendService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
