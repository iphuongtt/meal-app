import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {MealList} from '../components';

export const CategoryMealsScreen: NavigationStackScreenComponent = props => {
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
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
