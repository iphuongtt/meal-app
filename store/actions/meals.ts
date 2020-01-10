import {TOGGLE_FAVORITE, MealActionTypes} from '../types';
import {Meal} from '../../models';
import {PropType} from '../../types';

export const toggleFavorite = (id: PropType<Meal, 'id'>): MealActionTypes => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};
