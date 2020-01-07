import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import {ViewProps} from '../interfaces';

interface Props extends ViewProps {
  title: string;
  color: string;
  onSelect: Function;
}
export const CategoryGridTile = (props: Props) => {
  const handleSelect = () => {
    props.onSelect();
  };
  let TouchAbleComponent: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchAbleComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchAbleComponent onPress={handleSelect} style={{flex: 1}}>
        <View style={{...styles.container, backgroundColor: props.color}}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchAbleComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
