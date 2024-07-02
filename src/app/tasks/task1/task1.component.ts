import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ColorRandomizer } from './helpers/color-randomizer';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss'
})
export class Task1Component {
  body = document.querySelector('body') as HTMLBodyElement;
  currentColor = '#FFFFFF';

  changeColor() {
    const newColor = ColorRandomizer.getRandomColor();
    this.body.style.backgroundColor = newColor;
    this.currentColor = newColor;
  }
}
