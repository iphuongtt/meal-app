import {MEALS} from '../../data/dummy-data';
import {
  MealState,
  MealActionTypes,
  TOGGLE_FAVORITE,
  SET_FILTERS,
} from '../types';

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

    case SET_FILTERS: {
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals};
    }
    default:
      return state;
  }
};

export default mealsReducer;
