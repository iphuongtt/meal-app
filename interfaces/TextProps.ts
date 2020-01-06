import {TextProps as ReactTextProps, TextStyle} from 'react-native';

export interface TextProps extends ReactTextProps {
  style?: TextStyle;
}
