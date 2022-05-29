import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('(1) Testeo del LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir el componente login', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario inválido si falta un campo', () => {
    let email = component.form.controls['email'];
    email.setValue('challenge@alkemy.org');
    expect(component.form.invalid).toBeTruthy();
  });
  it('Debe retornar formulario válido', () => {
    let email2 = component.form.controls['email'];
    email2.setValue('challenge@alkemy.org');
    let password = component.form.controls['password'];
    password.setValue('react');
    expect(component.form.invalid).toBeFalsy();
  });
});
