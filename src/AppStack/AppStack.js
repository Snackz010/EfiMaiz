import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer }from 'react-navigation';

import ContenedorLogInSignUp from '../LogIn-SignUp/ContenedorLogInSignUp.js';

import Drawer from '../NavegacionGlobal/Drawer.js'

const StackNavigator = createStackNavigator({
   logSign:{
       screen:ContenedorLogInSignUp,
       headerMode:'none',
       navigationOptions:{
           headerShown: false
       }
   },
   inicio:{
       screen: Drawer,
       headerMode:'none',
       navigationOptions:{
           headerShown:false
       }
   }
});

export default createAppContainer(StackNavigator);