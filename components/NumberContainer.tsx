import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ViewProps} from '../interfaces';
import Colors from '../constants/colors';

interface Props extends ViewProps {
  children: number;
}

export const NumberContainer = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
