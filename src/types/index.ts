export interface Type {}

interface IRating {
  comments: string[];
  grades: number[];
}

export interface IProducts {
  _id: string;
  name: string;
  description: string;
  category: number;
  specie: string;
  sizes: string[];
  price: any;
  member_price: string;
  image_url: string;
  rating: IRating;
  __v: number;
}

export interface IProductCart {
  product: IProducts;
  quantity: number;
}
