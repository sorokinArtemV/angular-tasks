import { Component, computed } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { PERSONS_DATA } from './config/persons-data.config';
import { Person } from './interfaces/person.interface';

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.scss'
})
export class Task3Component {
  personsList: Person[] = PERSONS_DATA;
  currentIndex = 0;
  currentPerson = this.personsList.at(this.currentIndex);
  currentPersonImagePath = computed(() => `./images/people/${this.currentPerson?.image}`);

  showNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.personsList.length;
    this.updateContent();
  }

  showPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.personsList.length) % this.personsList.length;
    this.updateContent();
  }

  showRandom(): void {
    const randomIndex = Math.floor(Math.random() * this.personsList.length);
    this.updateContent(randomIndex)
  }

  private updateContent(index: number = this.currentIndex): void {
    this.currentPerson = this.personsList[index];
    this.currentPersonImagePath = computed(() => `./images/people/${this.currentPerson?.image}`);
  }
}

