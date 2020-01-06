import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ViewProps} from '../interfaces';

interface Props extends ViewProps {}

export const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is category meals screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoryMealsScreen;
