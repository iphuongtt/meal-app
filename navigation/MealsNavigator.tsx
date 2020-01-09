import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {colors} from '../constants';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen,
  FiltersScreen,
} from '../screens';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerTitleBackStyle: {
    fontFamily: 'OpenSans',
  },
};

const MealsStackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Icon name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: colors.accent,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>Favorites</Text>
        ) : (
          'Favorites'
        ),
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
          labelStyle: {
            fontFamily: 'OpenSans-Bold',
          },
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.accent,
      labelStyle: {
        fontFamily: 'OpenSans-Bold',
      },
    },
  },
);

export const MealsNavigator = createAppContainer(MainNavigator);
