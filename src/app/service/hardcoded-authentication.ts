import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentication {
  constructor() {}
  authenticate(userName: string, passWord: string) {
    if (userName === 'amal' && passWord === 'amal2025') {
      sessionStorage.setItem('authenticaterUser', userName);
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
