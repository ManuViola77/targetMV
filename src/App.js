import React from 'react';
import { setCustomText } from 'react-native-global-props';
import AppContainer from 'navigators';

const customTextProps = {
  style: {
    fontFamily: 'OpenSans',
  },
};
setCustomText(customTextProps);

const App = () => (
  <>
    <AppContainer />
  </>
);

export default App;
