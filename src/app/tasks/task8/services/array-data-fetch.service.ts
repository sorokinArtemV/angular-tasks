import { Injectable } from '@angular/core';
import { MENU } from '../config/menu-data';
import { Dish } from '../interfaces/interface-types/dish.interface';
import { IDataFetcher } from '../interfaces/IDataFetcher';

@Injectable({
  providedIn: 'root'
})
export class ArrayDataFetchService implements IDataFetcher {
  fetchData(): Dish[] {
    return MENU;
  }
}
