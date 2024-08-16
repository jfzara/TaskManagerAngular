import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  tasks: Task[] = [
    {id: "1", title: "Task 1", description: "Description for task 1", isDone: false},
    {id: "2", title: "Task 2", description: "Description for task 2", isDone: true},
    {id: "3", title: "Task 3", description: "Description for task 3", isDone: false},
    {id: "4", title: "Task 4", description: "Description for task 4", isDone: true}
  ]

  updateTask(updatedTask: Task){
    console.log(updatedTask)
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if(index !== -1){
      this.tasks[index] = updatedTask;
    }
    console.log(this.tasks)
  }

  title = 'task-manager';

  testOutput(text: string){
    console.log("AppComponent testOutput", text);
    this.title = this.title + text;
  }
}
