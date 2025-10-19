import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  name: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }
}
