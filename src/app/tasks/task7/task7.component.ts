import { Component, ElementRef, QueryList, viewChildren } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-task7',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './task7.component.html',
  styleUrl: './task7.component.scss'
})
export class Task7Component {
  private questions = viewChildren<QueryList<ElementRef<HTMLElement>>>('faqquestion');
  private answers = viewChildren<QueryList<ElementRef<HTMLElement>>>('faqanswer');
  private icons = viewChildren<QueryList<ElementRef<HTMLElement>>>('faqicon');

  ngAfterViewInit() {
    // @ts-ignore: gives a weird error of mismatching types
    this.questions().forEach((el: ElementRef<HTMLElement>, i) => {
      el.nativeElement.addEventListener('click', () => {
        this.addHiddenClass();

        // @ts-ignore: gives a weird error of mismatching types
        this.answers()[i].nativeElement.classList.toggle('visually-hidden');

        // @ts-ignore: gives a weird error of mismatching types
        if (this.icons()[i].nativeElement.classList.contains('faq__icon--active')) return;
        // @ts-ignore: gives a weird error of mismatching types
        this.icons()[i].nativeElement.classList.toggle('faq__icon--active');
      });
    });
  }

  private addHiddenClass() {
    // @ts-ignore: gives a weird error of mismatching types
    this.answers().forEach((el: ElementRef<HTMLElement>) => {
      el.nativeElement.classList.add('visually-hidden');
    });
  }
}

