import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';
import {colors} from '../constants';

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
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoryMealsScreen;
