import {combineReducers} from 'redux';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import mealsReducer from './meals';

export const rootReducer = combineReducers({
  meals: mealsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
