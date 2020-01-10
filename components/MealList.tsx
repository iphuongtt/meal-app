import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

import {ViewProps} from '../interfaces';
import {Meal} from '../models';
import {MealItem} from '../components';
import {useTypedSelector} from '../store/reducers';

interface Props extends ViewProps {
  listData: Meal[];
  navigation: NavigationStackProp;
}

export const MealList = (props: Props) => {
  const favoriteMeals = useTypedSelector(state => state.meals.favoriteMeals);
  const renderMealItem = (itemData: {item: Meal}) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavorite: favoriteMeals.some(
                meal => meal.id === itemData.item.id,
              ),
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList data={props.listData} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
