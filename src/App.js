import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';
import AppContainer from 'navigators';
import configureStore from 'store/configureStore';
import { defaultFont } from 'constants/fonts';

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
