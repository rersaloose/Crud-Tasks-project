import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../context/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(model:Login):Observable<any>{
   return this.http.post("https://crud-tc4y.onrender.com/auth/login",model)
  }
}
