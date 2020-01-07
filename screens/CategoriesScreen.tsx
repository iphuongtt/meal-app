import React from 'react';
import {FlatList} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';
import {CategoryGridTile} from '../components';

type Category = {
  id: string;
  title: string;
  color: string;
};

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

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;
