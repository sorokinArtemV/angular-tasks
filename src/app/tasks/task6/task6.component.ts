import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-task6',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './task6.component.html',
  styleUrl: './task6.component.scss'
})
export class Task6Component {
  isOpened = signal(false);

  toggleModal() {
    this.isOpened.update(isOpened => !isOpened);
  }

}

