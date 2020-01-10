import {MEALS} from '../../data/dummy-data';
import {Meal} from '../../models';

export interface MealState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

const initialState: MealState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default mealsReducer;
