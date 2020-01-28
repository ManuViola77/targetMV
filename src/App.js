import React from 'react';
import { setCustomText } from 'react-native-global-props';
import AppContainer from 'navigators';
import { defaultFont } from 'constants/fonts';

const customTextProps = {
  style: {
    fontFamily: defaultFont,
  },
};
setCustomText(customTextProps);

const App = () => <AppContainer />;

export default App;
