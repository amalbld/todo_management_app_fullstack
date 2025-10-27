import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  name: any;

  welcomeMessageFromService: string = '';

  constructor(private route: ActivatedRoute, private service: WelcomeData) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage');

    this.service
      .executeHelloWorldBeanWithPathVariableService(this.name)
      .subscribe((response) => console.log(response));
  }
  getWelcomeMessageWithParam() {
    this.service.executeHelloWorldBeanWithPathVariableService(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
