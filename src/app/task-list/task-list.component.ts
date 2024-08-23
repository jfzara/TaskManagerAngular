import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { TaskAPI } from '../models/task-api.model';
import { TaskApiService } from '../services/task-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];

  createdTasks: TaskAPI[] = [];
  assignedTasks: TaskAPI[] = [];
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlbmFuQGdtYWlsLmNvbSIsImlkIjoiNjZjM2VmZmU3ZTA0MWU4Y2MzNGEyZWU4IiwiZXhwIjoxNzI3MDM2NDA5fQ.NAiFM6MfLNHUxJQZQmtX60k8o_CBYf4kCCcRRxwC0NU";


  constructor(private taskApiService: TaskApiService, private router: Router){
    this.fetchTasks();
  }

  fetchTasks(){
    this.taskApiService.getTasksCreatedBy(this.token).subscribe(
      (res) => {
        this.createdTasks = res.allTasks;
      }
    );

    this.taskApiService.getTasksAssignedTo(this.token).subscribe(
      (res) => {
        this.assignedTasks = res.allTasks;
        console.log(this.assignedTasks)
      }
    );
  }

  changeStatus(task: TaskAPI){
    this.taskApiService.updateTaskStatus(this.token, task.taskUid, !task.done).subscribe(
      () => {
        this.fetchTasks();
      }
    );
  }

  deleteTask(task: TaskAPI){
    this.taskApiService.deleteTask(this.token, task.taskUid).subscribe(
      ()=>{
        this.fetchTasks();
      }
    );
  }

  goToDetail(task: Task){
    this.router.navigate(['/task', task.id])
  }
}
