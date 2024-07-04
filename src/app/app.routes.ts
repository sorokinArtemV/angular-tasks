import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { Task6Component } from './tasks/task6/task6.component';

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    title: 'Tasks App',
  },
  // {
  //   path: 'tasks/1',
  //   component: Task1Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/2',
  //   component: Task2Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/3',
  //   component: Task3Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/4',
  //   component: Task4Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/5',
  //   component: Task5Component,
  //   title: 'Tasks App',
  // },
  {
    path: 'tasks/6',
    component: Task6Component,
    title: 'Tasks App',
  },
  // {
  //   path: 'tasks/7',
  //   component: Task7Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/8',
  //   component: Task8Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/9',
  //   component: Task9Component,
  //   title: 'Tasks App',
  // },
  // {
  //   path: 'tasks/10',
  //   component: Task10Component,
  //   title: 'Tasks App',
  // },
];
