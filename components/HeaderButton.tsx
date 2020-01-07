import React from 'react';
import {Platform} from 'react-native';
import {
  HeaderButton,
  CommonHeaderButtonProps,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';

export const CustomHeaderButton = (props: CommonHeaderButtonProps) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.select({ios: colors.primary, android: 'white'})}
    />
  );
};

export default CustomHeaderButton;
