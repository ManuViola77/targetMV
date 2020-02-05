import React from 'react';
import { ActivityIndicator } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';
import { defaultFont } from 'constants/fonts';
import AppContainer from 'navigators';
import configureStore from 'store/configureStore';

const customTextProps = {
  style: {
    fontFamily: defaultFont,
  },
};

setCustomText(customTextProps);

const { store, persistor } = configureStore({});

applyDefaultInterceptors(store, api);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default App;
