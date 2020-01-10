import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';

import {CustomHeaderButton, DefaultText} from '../components';
import {useTypedSelector} from '../store/reducers';
import {toggleFavorite} from '../store/actions';

export const MealDetailScreen: NavigationStackScreenComponent = props => {
  const avaiableMeals = useTypedSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = avaiableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();

  const currentMealIsFavorite = useTypedSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId),
  );

  const toogleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [mealId, dispatch]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toogleFavoriteHandler,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toogleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFavorite: currentMealIsFavorite,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMealIsFavorite]);

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
  const toogleFav = navigation.getParam('toggleFav');
  const isFavorite = navigation.getParam('isFavorite');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={() => {
            toogleFav();
          }}
        />
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
