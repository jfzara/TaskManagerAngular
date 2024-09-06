import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskApiService } from '../services/task-api.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {
  taskForm: FormGroup;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private taskApiService: TaskApiService,
    private userService: UserService,
    private router: Router
  ){
    this.taskForm = this.fb.group({
      description: ["", Validators.required],
      uid: ["", Validators.required]
    });

    this.loadUsers();
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe(
      (res)=>{
        this.users = res.allUsers;
      }
    );
  }

  createTask(){
    
  }
}
