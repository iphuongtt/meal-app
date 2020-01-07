import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {Meal} from '../models';

export const CategoryMealsScreen: NavigationStackScreenComponent = props => {
  const renderMealItem = (itemData: {item: Meal}) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    meal => meal.categoryId.indexOf(catId) >= 0,
  );
  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoryMealsScreen;
