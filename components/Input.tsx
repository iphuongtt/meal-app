import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {TextInputProps} from '../interfaces';

export const Input = (props: TextInputProps) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
