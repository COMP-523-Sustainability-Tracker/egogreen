import { Injectable } from "@angular/core";
import { getString, setString } from '@nativescript/core/application-settings'
import {User} from '../models/user.model'

const tokenKey = "token";

@Injectable()
export class BackendService {
  
  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }
}
