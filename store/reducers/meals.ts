import {MEALS} from '../../data/dummy-data';
import {MealState, MealActionTypes, TOGGLE_FAVORITE} from '../types';

const initialState: MealState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (
  state = initialState,
  action: MealActionTypes,
): MealState => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find(meal => meal.id === action.mealId),
          ),
        };
      }
    }
    default:
      return state;
  }
};

export default mealsReducer;
