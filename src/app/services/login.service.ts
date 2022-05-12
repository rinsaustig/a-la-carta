import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subscription} from 'rxjs';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  subRef$!: Subscription;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  logIn(body: any) {
    this.subRef$ = this.http.post(environment.login, body).subscribe(res => {
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigateByUrl('', {replaceUrl: true})
    }, error =>{
      swal({
        title: "Incorrecto",
        text: "Usuario y/o contraseña incorrectos",
        icon: "warning",
        dangerMode: true,
      })
    });
  }

  createForm() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
