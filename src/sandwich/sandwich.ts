// sandwich.ts

export type Sauce = 'bbq' | 'soy' | 'hot';

// Na przykład: { name: 'potato', fresh: true }
export type Ingredient = { name: string, fresh: boolean }

export interface Sandwich {
  id?: number; 
  name: string;
  sauce: Sauce;
  ingredients: Ingredient;
  grilled: boolean;
  price: number;
}
