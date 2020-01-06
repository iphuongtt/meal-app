import {NativeSyntheticEvent, NativeTouchEvent} from 'react-native';

export type PressEvent = (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
