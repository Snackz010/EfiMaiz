import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import ContenedorInicio from '../Inicio//Contenedores/ContenedorInicio';
import StackOpciones from '../Opciones/CaracterizacionSitio/StackOpciones/StackOpciones.js'

const Drawer = createDrawerNavigator({
    Inicio:{
        screen: ContenedorInicio,
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