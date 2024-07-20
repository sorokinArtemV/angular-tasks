import { ChangeDetectionStrategy, Component, inject, OnInit, Renderer2, signal } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { generateRandomColor } from './helpers/color-randomizer';
import { HEX_SYMBOLS } from './constants/hex-values';
import { INITIAL_COLOR, STORAGE_COLOR_VAR } from './constants/colors';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task1Component implements OnInit {
  private readonly renderer = inject(Renderer2);
  currentColor = signal(INITIAL_COLOR);

  ngOnInit(): void {
    const initialColor = localStorage.getItem('color') ?? INITIAL_COLOR;
    this.renderer.setStyle(document.body, 'background-color', initialColor);
  }

  changeBodyColor() {
    const newColor = generateRandomColor(HEX_SYMBOLS);
    this.renderer.setStyle(document.body, 'background-color', newColor);
    this.currentColor.set(newColor);
    this.saveToLocalStorage(STORAGE_COLOR_VAR);
  }

  cleanLocalStorage(storageVar: string = STORAGE_COLOR_VAR) {
    localStorage.removeItem(storageVar);
    this.currentColor.set(INITIAL_COLOR);
    this.renderer.setStyle(document.body, 'background-color', INITIAL_COLOR);
  }

  private saveToLocalStorage(storageVar: string = STORAGE_COLOR_VAR) {
    localStorage.setItem(storageVar, this.currentColor());
  }
}
