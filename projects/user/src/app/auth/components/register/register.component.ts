import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  regestirForm!: FormGroup;
  constructor(private formB: FormBuilder,private authservice:AuthService,private roter:Router,private spinner:NgxSpinnerService) {}
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.regestirForm = this.formB.group({
      email: ['',Validators.email],
      password: ['',Validators.required],
      ConfirmPassword: [''],
      username: [''],
    });
  }
  CreateAccount() {
    this.spinner.show()
    var model = {
      username: this.regestirForm.value['username'],
      email: this.regestirForm.value['email'],
      password: this.regestirForm.value['password'],
      role:'user',
    };
    this.authservice.createaccount(model).subscribe((res:any)=>{
      this.spinner.hide()
this.roter.navigate(['/tasks'])

    })

  }
}
