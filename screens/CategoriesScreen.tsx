import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {CATEGORIES} from '../data/dummy-data';

type Props = {
  navigation: NavigationStackProp;
};
type Category = {
  id: string;
  title: string;
  color: string;
};

const renderGridItem = (itemData: {item: Category}) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

export const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
