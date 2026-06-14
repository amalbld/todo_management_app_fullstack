import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { BasicAuthentication } from '../service/basic-authentication';
import { JWTAuthentication } from '../service/jwt.authentication';

@Component({
  selector: 'login-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  userName: string = '';
  passWord = '';

  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthentication,
    private basicAuthentication: BasicAuthentication,
    private jwtAuthentication: JWTAuthentication
  ) {}

  nameRequired: boolean = false;
  passwordRequired: boolean = false;
  handleLogin(name: NgModel, password: NgModel) {
    if (name.pristine) {
      this.nameRequired = true;
    }
    if (password.pristine) {
      this.passwordRequired = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.hardcodedAuthentication.authenticate(this.userName, this.passWord)) {
      this.router.navigate(['welcome', this.userName]);
      console.log(this.userName);
      this.userName = '';
      this.passWord = '';
    } else {
      this.userName = '';
      this.passWord = '';
      this.nameRequired = true;
      this.passwordRequired = true;
    }
  }

  onSubmitBasicAuthentication(form: NgForm) {
    if (form.valid) {
      this.basicAuthentication
        .executeAuthenticationBeanService(this.userName, this.passWord)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['welcome', this.userName]);
          },
          (error) => {
            console.log(error);
            this.userName = '';
            this.passWord = '';
            this.nameRequired = true;
            this.passwordRequired = true;
          }
        );
    }
  }

  onSubmitJWTAuthentication(form: NgForm) {
    if (form.valid) {
      this.jwtAuthentication
        .executeJWTAuthenticationBeanService(this.userName, this.passWord)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['welcome', this.userName]);
          },
          (error) => {
            console.log(error);
            this.userName = '';
            this.passWord = '';
            this.nameRequired = true;
            this.passwordRequired = true;
          }
        );
    }
  }
}
