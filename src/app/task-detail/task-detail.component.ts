import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ){
    const taskId = route.snapshot.paramMap.get("id");
    console.log(taskId)
  }
}
