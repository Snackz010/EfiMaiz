import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer }from 'react-navigation';

import ContenedorLogInSignUp from './LogIn-SignUp/ContenedorLogInSignUp.js';

import Drawer from './NavegacionGlobal/Drawer.js'

const StackNavigator = createStackNavigator({
   logSign:{
       screen:ContenedorLogInSignUp
   },
   inicio:{
       screen: Drawer
   }
});

export default createAppContainer(StackNavigator);