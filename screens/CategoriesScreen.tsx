import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ViewProps} from '../interfaces';

interface Props extends ViewProps {}

export const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is categories screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
