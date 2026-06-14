import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export class AuthenticationBean {
  constructor(private message: string) {}
}

export const TOKEN = 'user';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthentication {
  constructor(private http: HttpClient) {}
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    // if (this.getAuthenticatedUser()) {
    //   return sessionStorage.getItem('token');
    // }
    return sessionStorage.getItem(TOKEN);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  executeAuthenticationBeanService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, {
        headers: header,
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );
  }
}
