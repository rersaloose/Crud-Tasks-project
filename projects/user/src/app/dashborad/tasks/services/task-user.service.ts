import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskUserService {

  constructor(private http:HttpClient) { }

  getusertasks(userId:string,params:any){
return this.http.get('https://crud-tc4y.onrender.com/tasks/user-tasks/'+ userId)
  }
}
