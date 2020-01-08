import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
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

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsStackNavigator,
  Favorites: FavoritesScreen,
});

export const MealsNavigator = createAppContainer(MealsFavTabNavigator);
