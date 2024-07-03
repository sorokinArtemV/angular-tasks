import { Component, ElementRef, QueryList, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-task5',
  standalone: true,
  imports: [],
  templateUrl: './task5.component.html',
  styleUrl: './task5.component.scss',

})
export class Task5Component {
  private sideBar = viewChild.required<ElementRef<HTMLElement>>('nav');
  private main = viewChild.required<ElementRef<HTMLElement>>('main');
  private links = viewChildren<QueryList<ElementRef<HTMLElement>>>('nav_text');
  sideBarWidth = 0;
  isOpened = false;

  ngOnInit(): void {
    this.sideBarWidth = this.sideBar().nativeElement.getBoundingClientRect().width;
  }


  toggleSidebar() {
    this.isOpened = !this.isOpened;
    const sideBarInitialWidth = this.sideBarWidth;
    const sideBarMaxWidth = 200;

    this.sideBar().nativeElement.style.width = this.isOpened
      ? `${sideBarMaxWidth}px`
      : `${sideBarInitialWidth}px`;

    this.main().nativeElement.style.marginLeft = this.isOpened
      ? `${sideBarMaxWidth}px`
      : `${sideBarInitialWidth}px`;

    // @ts-ignore: gives a weird error of mismatching types
    this.links().forEach((el: ElementRef<HTMLElement>) => {
      el.nativeElement.style.display = this.isOpened ? 'block' : 'none';
    });
  }
}

