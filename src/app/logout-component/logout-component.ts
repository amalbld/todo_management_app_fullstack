import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-logout-component',
  imports: [],
  templateUrl: './logout-component.html',
  styleUrl: './logout-component.css',
})
export class LogoutComponent implements OnInit {
  constructor(private hardcodedAuthentication: HardcodedAuthentication) {}

  ngOnInit(): void {
    this.hardcodedAuthentication.logout();
  }
}
