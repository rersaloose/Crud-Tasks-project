import { Component,OnInit } from '@angular/core';
import { TaskUserService } from '../../services/task-user.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {
  dataSource:any=[]
  userdata:any
  page=1
  status:string=""


constructor(private taskservices:TaskUserService){

}

ngOnInit(){
this.getuserdata()
  this.getalltasks()
}

getuserdata(){
var token= JSON.stringify(localStorage.getItem('token'))
this.userdata=JSON.parse(window.atob(token.split('.')[1]))
console.log(this.userdata)
}

getalltasks(){
  var params ={
    page:this.page,
    limit:10,
    status:this.status
  }
this.taskservices.getusertasks(this.userdata.userId,params).subscribe((res:any)=>{
  this.dataSource=res
})
}

}
