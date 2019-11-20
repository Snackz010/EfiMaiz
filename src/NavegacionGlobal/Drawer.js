import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Opciones from '../Inicio/Componentes/Opciones.js';
import ListaCaracterizacion from '../Opciones/CaracterizacionSitio/Componentes/ListaCaracterizacionSitio';
import StackOpciones from '../Opciones/CaracterizacionSitio/StackOpciones/StackOpciones.js'

const Drawer = createDrawerNavigator({
    Inicio:{
        screen: Opciones,
        navigationOptions:{
            drawerLabel:'Inicio'
        }
    },
    Caracterizacion:{
        screen: StackOpciones,
        navigationOptions:{
            drawerLabel:'Caracterización del Sitio'
        }
    }
});


export default createAppContainer(Drawer);