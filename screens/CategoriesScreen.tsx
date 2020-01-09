import React from 'react';
import {FlatList} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';
import {CategoryGridTile, CustomHeaderButton} from '../components';
import {Category} from '../models';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

export const CategoriesScreen: NavigationStackScreenComponent = props => {
  const renderGridItem = (itemData: {item: Category}) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Meal Categories',
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

export default CategoriesScreen;
