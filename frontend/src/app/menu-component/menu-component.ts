import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { CommonModule } from '@angular/common';
import { BasicAuthentication } from '../service/basic-authentication';

@Component({
  selector: 'app-menu-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit {
  // isUserLoggedin: boolean = false;
  username: any;
  constructor(
    private hardcodedAuthentication: HardcodedAuthentication,
    private basicAuthetication: BasicAuthentication
  ) {}

  ngOnInit(): void {
    // this.isUserLoggedin = this.hardcodedAuthentication.isUserLoggedIn();
    this.username = this.basicAuthetication.getAuthenticatedUser();
  }
  // isLoggedin() {
  //   return this.hardcodedAuthentication.isUserLoggedIn();
  // }

  isLoggedin() {
    return this.basicAuthetication.isUserLoggedIn();
  }
}
