import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'task/:id', component: TaskDetailComponent},
  {path: 'edit-task/:id', component: TaskEditComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
