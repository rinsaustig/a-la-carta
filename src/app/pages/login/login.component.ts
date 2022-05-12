import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.form = this.loginService.createForm()
  }
  submit() {
      let body = {
        email: this.form.get('email').value,
        password: this.form.get('password').value

      }

    if(this.form.valid) {
      this.loginService.logIn(body)
    } else { 
      swal({
        title: "Incorrecto",
        text: "Debes ingresar un correo y una contraseña para continuar",
        icon: "warning",
        dangerMode: true,
      })

    }
    
  }

}
