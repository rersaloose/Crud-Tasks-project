import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

createaccount(model:any){
  return this.http.post('https://crud-tc4y.onrender.com/auth/createAccount',model)
}
login(data:any){
  return this.http.post('https://crud-tc4y.onrender.com/auth/login', data)
}
}
