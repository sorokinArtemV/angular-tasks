import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ArrayDataFetchService } from './services/array-data-fetch.service';
import { IDataFetcher } from './interfaces/IDataFetcher';
import { Dish } from './interfaces/interface-types/dish.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-task8',
  standalone: true,
  imports: [
    HeaderComponent,
    CurrencyPipe,

  ],
  templateUrl: './task8.component.html',
  styleUrl: './task8.component.scss'
})
export class Task8Component {
  dataFetcher: IDataFetcher = inject(ArrayDataFetchService);

  menuList = signal<Dish[]>(this.dataFetcher.fetchData());
  menuCategories: Set<string> = new Set(this.menuList().map(dish => dish.category));

  filterByCategory = (category: string) => {
    this.menuList.set(this.dataFetcher.fetchData().filter(dish => dish.category === category));
  };

  resetFilter = () => {
    this.menuList.set(this.dataFetcher.fetchData());
  };
}

