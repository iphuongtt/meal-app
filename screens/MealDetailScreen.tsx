import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

export const MealDetailScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>This is meal detail screen</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MealDetailScreen;
