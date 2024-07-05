import { Dish } from './interface-types/dish.interface';

export interface IDataFetcher {
  fetchData(): Dish[];
}
