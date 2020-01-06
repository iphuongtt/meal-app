import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ViewProps} from '../interfaces';

export const Card = (props: ViewProps) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.46,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
