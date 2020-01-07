import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<{userId: string}>;
};

export const CategoryMealsScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>This is category meals screen</Text>
      <Button
        title="Go To Meal Detail"
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          //props.navigation.pop(); // Pops off the current screen on the stack
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoryMealsScreen;
