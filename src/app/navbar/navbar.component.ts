import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DisplayElementsService } from '../shared/services/display-elements.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  displayService = inject(DisplayElementsService);
  isHomePageOpened = computed(() => this.displayService.isHomePageOpened());
}
