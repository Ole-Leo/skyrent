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
    features_on: [
      'Кухня',
      'Телевизор',
      'Задний двор',
      'Лифт',
      'Сейф',
      'Рабочий стол',
      'Балкон',
    ],
    features_off: ['Посудомоечная машина', 'Духовка', 'Кондиционер'],
    host_name: 'Eustolia A. Daniel',
    host_phone: '267-936-7078',
    host_location: '2310 Marigold Lane FL 33131',
  },
  {
    pk: 2,
    picture_url: czech,
    country: 'Czech Republic',
    city: 'Prague',
    description:
      'Offering an exclusive Executive club and spacious rooms, this stylish hotel stands beside the River Spree on Berlin’s Friedrichstraße shopping street.',
    price: '500',
    features_on: [
      'Кухня',
      'Телевизор',
      'Задний двор',
      'Лифт',
      'Сейф',
      'Рабочий стол',
      'Балкон',
    ],
    features_off: ['Посудомоечная машина', 'Духовка', 'Кондиционер'],
    host_name: 'Eustolia A. Daniel',
    host_phone: '267-936-7078',
    host_location: '2310 Marigold Lane FL 33131',
  },
  {
    pk: 3,
    picture_url: madagascar,
    country: 'Madagascar',
    city: 'Antananarivo',
    description:
      'Offering an exclusive Executive club and spacious rooms, this stylish hotel stands beside the River Spree on Berlin’s Friedrichstraße shopping street.',
    price: '500',
    features_on: [
      'Кухня',
      'Телевизор',
      'Задний двор',
      'Лифт',
      'Сейф',
      'Рабочий стол',
      'Балкон',
    ],
    features_off: ['Посудомоечная машина', 'Духовка', 'Кондиционер'],
    host_name: 'Eustolia A. Daniel',
    host_phone: '267-936-7078',
    host_location: '2310 Marigold Lane FL 33131',
  },
];
