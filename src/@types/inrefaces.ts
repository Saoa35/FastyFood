export interface Colors {
  white: string;
  black: string;
  lightGray: string;
  accent: string;
  accentRed: string;
  accentPink: string;
}

export interface Item {
  name: string;
  weight: number;
  rating: string;
  price: number;
  isTopOfTheWeek: boolean;
  image: any;
  size: string;
  crust: string;
  delivery: number;
  ingredients: any[];
}

export interface Category {
  name: string;
  image: any;
  items: Item[];
}
