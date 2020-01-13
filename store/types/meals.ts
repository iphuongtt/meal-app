export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
import {Meal, MealFilter} from '../../models';
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

interface SetFiltersAction {
  type: typeof SET_FILTERS;
  filters: MealFilter;
}

export type MealActionTypes = ToggleFavoriteAction | SetFiltersAction;
