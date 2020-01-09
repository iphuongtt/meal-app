import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton} from '../components';

export const FiltersScreen: NavigationStackScreenComponent = () => {
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

FiltersScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Flter Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;
