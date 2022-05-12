import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  gitHub = environment.gitHub;
  linkedIn = environment.linkedin;
  twitter = environment.twitter;
  gmail = environment.gmail;
  googleMe = environment.googleMe;
  constructor() { }

  ngOnInit(): void {
  }

}
