import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private loginservices: LoginService,
    private rout: Router,
    private spinner: NgxSpinnerService
  ) {}
  loginForm!: FormGroup;
  ngOnInit() {
    this.createform();
  }

  createform() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
        ],
      ],
      role: ['admin'],
    });
  }
  login() {
    this.spinner.show();
    this.loginservices.login(this.loginForm.value).subscribe((e: any) => {
      localStorage.setItem('token', e.token);
      this.spinner.hide();
      this.rout.navigate(['/tasks']);
    });
  }
}
