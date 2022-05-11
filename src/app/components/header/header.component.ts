import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login', { replaceUrl: true, skipLocationChange: true });
  }
}
