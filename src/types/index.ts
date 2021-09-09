export interface Type {}

export interface IProducts {
  id: number;
  name: string;
  description: string;
  category: number;
  species: number;
  sizes: string[];
  price: string;
  member_price: string;
  image_url: string;
  rating?: any;
}
