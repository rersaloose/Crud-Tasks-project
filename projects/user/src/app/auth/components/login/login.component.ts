import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formB: FormBuilder,
    private loginservices: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formB.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.spinner.show();
    var data = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
      role: 'user',
    };
    this.loginservices.login(data).subscribe((res: any) => {
      localStorage.setItem('token',res.token)
      this.spinner.hide();
      this.router.navigate(['/tasks']);
    });
  }
}
