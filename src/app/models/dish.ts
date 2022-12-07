import { Photo } from './photo';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  photos: Photo[];
  restaurantId: string;
}
