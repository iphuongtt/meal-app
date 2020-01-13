import {TOGGLE_FAVORITE, SET_FILTERS, MealActionTypes} from '../types';
import {Meal, MealFilter} from '../../models';
import {PropType} from '../../types';

export const toggleFavorite = (id: PropType<Meal, 'id'>): MealActionTypes => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

export const setFilters = (filterSetting: MealFilter): MealActionTypes => {
  return {
    type: SET_FILTERS,
    filters: filterSetting,
  };
};
