import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ViewProps} from '../interfaces';

interface Props extends ViewProps {}

export const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is filters screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default FiltersScreen;
