import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';

type Category = {
  id: string;
  title: string;
  color: string;
};

export const CategoriesScreen: NavigationStackScreenComponent = props => {
  const renderGridItem = (itemData: {item: Category}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
        style={styles.gridItem}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
