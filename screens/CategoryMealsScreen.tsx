import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';

export const CategoryMealsScreen: NavigationStackScreenComponent = props => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>This is category meals screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go To Meal Detail"
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
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
