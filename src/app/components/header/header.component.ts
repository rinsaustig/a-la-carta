import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  linkedin = environment.linkedin;
  twitter = environment.twitter;
  googleMe = environment.googleMe;
  
  constructor() {
  }

  ngOnInit(): void {
  }


}
