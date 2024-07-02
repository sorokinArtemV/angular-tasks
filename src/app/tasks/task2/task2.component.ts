import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { Color } from './enums/color-enum';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss'
})
export class Task2Component {
  counterValue = 0;

  increaseCounter() {
    this.counterValue++;
  }

  resetCounter() {
    this.counterValue = 0;
  }

  decreaseCounter() {
    this.counterValue--;
  }

  applyColor(counterValue: number): string {
    if (counterValue > 0) return Color.GREEN;
    else if (counterValue < 0) return Color.RED;
    else return Color.DEFAULT;
  }
}
