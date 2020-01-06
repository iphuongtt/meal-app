import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ViewProps} from '../interfaces';

interface Props extends ViewProps {}

export const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is favorites screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default FavoritesScreen;
