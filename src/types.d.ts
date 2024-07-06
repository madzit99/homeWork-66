export interface MealProps {
  category: string;
  name: string;
  ccal: number;
}

export interface Meals {
  [mealId: string]: MealProps;
}