import React from 'react';
import {Text} from 'react-native';
//import { setCustomText } from 'react-native-global-props';
import AppContainer from './navigators';

/* const customTextProps = { 
    style: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        color: 'purple'
      }
};

setCustomText(customTextProps); */

const App = () => (  
    <>
        {/* <Text> Prueba </Text> */}
        <AppContainer /> 
    </> 
);

export default App;