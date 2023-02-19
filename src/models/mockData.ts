import { ICard } from './types';
import german from './germany.jpg';
import czech from './czech.jpg';
import madagascar from './madagascar.jpg';

export const CardData: ICard[] = [
  {
    pk: 1,
    picture_url: german,
    country: 'Germany',
    city: 'Berlin',
    description:
      'Offering an exclusive Executive club and spacious rooms, this stylish hotel stands beside the River Spree on Berlin’s Friedrichstraße shopping street.',
    price: '500',
  },
  {
    pk: 2,
    picture_url: czech,
    country: 'Czech Republic',
    city: 'Prague',
    description:
      'Offering an exclusive Executive club and spacious rooms, this stylish hotel stands beside the River Spree on Berlin’s Friedrichstraße shopping street.',
    price: '500',
  },
  {
    pk: 3,
    picture_url: madagascar,
    country: 'Madagascar',
    city: 'Antananarivo',
    description:
      'Offering an exclusive Executive club and spacious rooms, this stylish hotel stands beside the River Spree on Berlin’s Friedrichstraße shopping street.',
    price: '500',
  },
];
