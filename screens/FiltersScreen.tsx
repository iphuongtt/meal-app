import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton} from '../components';
import {colors} from '../constants';

const FilterSwitch = (props: {
  lable: string;
  state: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.lable}</Text>
      <Switch
        trackColor={{true: colors.primary, false: ''}}
        thumbColor={Platform.select({ios: '', android: colors.primary})}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

export const FiltersScreen: NavigationStackScreenComponent = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        lable="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        lable="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

FiltersScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Flter Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;
