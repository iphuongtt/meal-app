import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CustomHeaderButton} from '../components';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';

export const MealDetailScreen: NavigationStackScreenComponent = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({navigation}) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="md-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MealDetailScreen;
