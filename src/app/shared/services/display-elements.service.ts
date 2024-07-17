import { Injectable, signal } from '@angular/core';
import { UrlMap } from '../Enums/url-map.enum';

@Injectable({
  providedIn: 'root'
})
export class DisplayElementsService {
  isHomePageOpened = signal(true);

  updateIsHomePageIsOpened(url: string) {
    this.isHomePageOpened.set(url === UrlMap.Home);
  }
}
