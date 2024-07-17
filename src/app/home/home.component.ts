import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from '../tasks/tasks.component';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
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
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private displayService = inject(DisplayElementsService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  tasks = signal(TASKS_DATA);

  ngOnInit(): void {
    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.displayService.updateIsHomePageIsOpened(event.url);
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
