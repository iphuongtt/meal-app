import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Item, HeaderButtons} from 'react-navigation-header-buttons';

import {MealList, CustomHeaderButton} from '../components';
import {useTypedSelector} from '../store/reducers';

export const FavoritesScreen: NavigationStackScreenComponent = props => {
  const favMeals = useTypedSelector(state => state.meals.favoriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
