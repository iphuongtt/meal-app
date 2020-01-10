import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

import {CATEGORIES} from '../data/dummy-data';
import {MealList} from '../components';
import {useTypedSelector} from '../store/reducers';

export const CategoryMealsScreen: NavigationStackScreenComponent = props => {
  const availableMeals = useTypedSelector(state => state.meals.filteredMeals);
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryId.indexOf(catId) >= 0,
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
