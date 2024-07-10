import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { Task1Component } from './tasks/task1/task1.component';

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    title: 'Tasks App',
  },
  {
    path: 'tasks/1',
    component: Task1Component,
    title: 'Tasks App',
  },
];
