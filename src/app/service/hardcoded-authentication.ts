import { Injectable } from '@angular/core';
import { AUTHENTICATED_USER } from './basic-authentication';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentication {
  constructor() {}
  authenticate(userName: string, passWord: string) {
    if (userName === 'amal' && passWord === 'amal2025') {
      sessionStorage.setItem(AUTHENTICATED_USER, userName);
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}
