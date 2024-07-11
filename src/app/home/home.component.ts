import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from '../tasks/tasks.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TASKS_DATA } from '../shared/config/tasks-data.config';
import { DisplayElementsService } from '../shared/services/display-elements.service';

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
  private displayService = inject(DisplayElementsService);
  tasks = signal(TASKS_DATA);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.displayService.updateIsHomePageIsOpened(event.url);
    });
  }
}
