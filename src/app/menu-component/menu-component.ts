import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit {
  // isUserLoggedin: boolean = false;

  constructor(private hardcodedAuthentication: HardcodedAuthentication) {}

  ngOnInit(): void {
    // this.isUserLoggedin = this.hardcodedAuthentication.isUserLoggedIn();
  }
  isLoggedin() {
    return this.hardcodedAuthentication.isUserLoggedIn();
  }
}
