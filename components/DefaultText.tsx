import React, {ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TextProps} from '../interfaces';

interface Props extends TextProps {
  children?: ReactNode;
}
export const DefaultText = (props: Props) => {
  return <Text style={{...props.style, ...styles.body}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default DefaultText;
