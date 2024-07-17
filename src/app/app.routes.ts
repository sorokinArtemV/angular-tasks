import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { Task1Component } from './tasks/task1/task1.component';

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    title: 'Hello, Angular!',
  },
  {
    path: 'tasks',
    title: 'Tasks',
    children: [
      {
        path: 'color-flipper',
        component: Task1Component,
        title: 'Color Flipper',
      }
    ]
  },
];
