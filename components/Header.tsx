import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Colors from '../constants/colors';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: Colors.primary,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
