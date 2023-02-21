export interface ICard {
  pk: number | string;
  picture_url: string;
  title?: string;
  country: string;
  city: string;
  description: string;
  price: string;
  features_on?: string[];
  features_off?: string[];
  host_name?: string;
  host_phone?: string;
  host_location?: string;
}
