export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
import {Meal} from '../../models';
import {PropType} from '../../types';

export interface MealState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  mealId: PropType<Meal, 'id'>;
}

export type MealActionTypes = ToggleFavoriteAction;
