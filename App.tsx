import React from 'react';
import {MealsNavigator} from './navigation';
import {enableScreens} from 'react-native-screens';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from './store/reducers';

enableScreens();

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
