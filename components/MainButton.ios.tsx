import React, {ReactNode} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../constants';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
  title?: string;
}

export const MainButton = (props: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
});

export default MainButton;
