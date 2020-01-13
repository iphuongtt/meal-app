import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

import {CATEGORIES} from '../data/dummy-data';
import {MealList, DefaultText} from '../components';
import {useTypedSelector} from '../store/reducers';

export const CategoryMealsScreen: NavigationStackScreenComponent = props => {
  const availableMeals = useTypedSelector(state => state.meals.filteredMeals);
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryId.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CategoryMealsScreen.navigationOptions = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
