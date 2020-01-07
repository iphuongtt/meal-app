import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

export const CategoriesScreen = (props: Props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>This is categories screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => props.navigation.navigate('CategoryMeals')}
        //onPress={() => props.navigation.replace('CategoryMeals')} //Replace this screen with CategoryMeal and cannot go back useful for login screen
      />
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
