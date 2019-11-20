import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Opciones from '../Inicio/Componentes/Opciones.js';

const Drawer = createDrawerNavigator({
    Inicio:{
        screen: Opciones,
        navigationOptions:{
            drawerLabel:'Inicio'
        }
    }
});


export default Drawer;