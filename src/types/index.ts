export interface Type {}

interface IRating {
  comments: string[];
  grades: number[];
}

export interface IProducts {
  id: string;
  name: string;
  description: string;
  category: number;
  specie: string;
  sizes: string[];
  price: number;
  member_price: string;
  image_url: string;
  rating: IRating;
}
