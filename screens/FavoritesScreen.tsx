import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Item, HeaderButtons} from 'react-navigation-header-buttons';

import {MealList, CustomHeaderButton, DefaultText} from '../components';
import {useTypedSelector} from '../store/reducers';

export const FavoritesScreen: NavigationStackScreenComponent = props => {
  const favMeals = useTypedSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
