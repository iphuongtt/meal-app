import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {colors} from '../constants';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen,
} from '../screens';

const MealsStackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
    },
  },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.primary,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Icon name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: colors.accent,
    },
  },
};
const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        // shifting: false,
        // barStyle: {
        //   backgroundColor: colors.primary,
        // },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.accent,
        },
      });

export const MealsNavigator = createAppContainer(MealsFavTabNavigator);
