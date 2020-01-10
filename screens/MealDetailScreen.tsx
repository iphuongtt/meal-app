import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {CustomHeaderButton, DefaultText} from '../components';
import {useTypedSelector} from '../store/reducers';

export const MealDetailScreen: NavigationStackScreenComponent = props => {
  const avaiableMeals = useTypedSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = avaiableMeals.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity}</DefaultText>
        <DefaultText>{selectedMeal.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text>List of ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.title}>Steps</Text>
      <Text>List of steps</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>
        <Button title="Go Back" onPress={() => props.navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({navigation}) => {
  const mealTitle = navigation.getParam('mealTitle');
  return {
    headerTitle: mealTitle,
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
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
});

export default MealDetailScreen;
