import {TextInputProps as ReactTextInputProps, TextStyle} from 'react-native';

export interface TextInputProps extends ReactTextInputProps {
  style: TextStyle;
}
