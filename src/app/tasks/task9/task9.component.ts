import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';

@Component({
  selector: 'app-task9',
  standalone: true,
  imports: [],
  templateUrl: './task9.component.html',
  styleUrl: './task9.component.scss'
})
export class Task9Component implements OnInit {
  private video = viewChild.required<ElementRef<HTMLVideoElement>>('vid');
  isPlaying = true;

  ngOnInit(): void {
    this.video().nativeElement.muted = true;
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying);
    if (this.isPlaying) {
      this.video().nativeElement.play().catch(err => console.log('video is unavailable'));
    } else {
      this.video().nativeElement.pause();
    }
  }
}
