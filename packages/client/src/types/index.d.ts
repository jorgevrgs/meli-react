export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  amount: number;
  currency: string;
  decimal: number;
}

export enum Condition {
  new = "new",
  used = "used",
  not_specified = "not_specified",
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: Condition;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export type ItemsResult = {
  author: Author;
  categories: string[] | null;
  items: Omit<Item, "sold_quantity" | "description">[];
};

export type ItemResult = {
  author: Author;
  item: Item;
};
