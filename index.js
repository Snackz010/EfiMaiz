/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppStack from './src/AppStack/AppStack.js';

import ContenedorApp from './src/ContenedorApp.js'

AppRegistry.registerComponent(appName, () => AppStack);
