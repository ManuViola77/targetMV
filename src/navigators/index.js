import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screen/LoginScreen';

const AppNavigator = createStackNavigator({
    LoginFlow: {
        screen: LoginScreen
    }
},{ 
    defaultNavigationOptions: { 
        header: null 
    }
});


export default createAppContainer(AppNavigator);