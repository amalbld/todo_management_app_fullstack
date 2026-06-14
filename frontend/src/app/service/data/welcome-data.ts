import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';

export class HelloWorldBean {
  constructor(private message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeData {
  constructor(private http: HttpClient) {}
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanWithPathVariableService(name: string) {
    // let header = new HttpHeaders({
    //   Authorization: this.createBasicAuthenticationHttpHeader(),
    // });
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean/path-variable/${name}`
      // { headers: header }
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'amal';
  //   let password = 'amal2025';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
