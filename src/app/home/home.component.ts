import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from '../tasks/tasks.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    TasksComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
