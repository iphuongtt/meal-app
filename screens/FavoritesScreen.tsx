import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

export const FavoritesScreen: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.screen}>
      <Text>This is favorites screen</Text>
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default FavoritesScreen;
