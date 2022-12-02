import { Photo } from './photo';

export interface Restaurant {
  id: number;
  name: string;
  url: string;
  phone: string;
  address: {};
  photos: Photo[];
  user: {};
}
