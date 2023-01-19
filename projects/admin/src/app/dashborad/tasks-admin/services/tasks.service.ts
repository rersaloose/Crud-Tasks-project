import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/environments/environment';
import { Createtask } from '../context/dido';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getALLtasks(filter: any) {
    var params = new HttpParams();
    Object.entries(filter).forEach(([key, value]: any) => {
      if (value) {
        params = params.append(key, value);
      }
    });

    return this.http.get('https://crud-tc4y.onrender.com/tasks/all-tasks', {
      params,
    });
  }
  creattask(model: any) {
    return this.http.post(
      'https://crud-tc4y.onrender.com/tasks/add-task',
      model
    );
  }
  Updatetask(model: any, id: any) {
    return this.http.put(
      'https://crud-tc4y.onrender.com/tasks/edit-task/' + id,
      model
    );
  }

  deleteTask(id: any) {
    return this.http.delete(environment.basUrl + '/tasks/delete-task/' + id);
  }
}
