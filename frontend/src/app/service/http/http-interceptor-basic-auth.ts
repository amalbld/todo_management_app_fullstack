import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthentication } from '../basic-authentication';
import { JWTAuthentication } from '../jwt.authentication';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuth implements HttpInterceptor {
  constructor(
    private basicAuthenticationService: BasicAuthentication,
    private jwtAuthenticationService: JWTAuthentication
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let username = this.basicAuthenticationService.getAuthenticatedUser()
    // let password = this.basicAuthenticationService.getAuthenticatedToken();
    //basic auth
    // let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    // let authenticatedUser = this.basicAuthenticationService.getAuthenticatedUser();

    //JWT auth
    let jwtAuthHeaderString = this.jwtAuthenticationService.getAuthenticatedToken();
    let authenticatedUser = this.jwtAuthenticationService.getAuthenticatedUser();

    if (jwtAuthHeaderString && authenticatedUser) {
      request = request.clone({ setHeaders: { Authorization: jwtAuthHeaderString } });
    }
    return next.handle(request);
  }
}
