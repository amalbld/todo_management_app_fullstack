import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'login-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  userName: string = '';
  passWord = '';

  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthentication) {}

  nameRequired: boolean = false;
  passwordRequired: boolean = false;
  handleLogin(name: NgModel, password: NgModel) {
    if (name.pristine) {
      this.nameRequired = true;
    }
    if (password.pristine) {
      this.passwordRequired = true;
    }
    console.log(name);
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
}
