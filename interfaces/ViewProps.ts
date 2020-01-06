import {ReactNode} from 'react';
import {ViewProps as ReactViewProps, ViewStyle} from 'react-native';

export interface ViewProps extends ReactViewProps {
  style?: ViewStyle;
  children?: ReactNode;
}
