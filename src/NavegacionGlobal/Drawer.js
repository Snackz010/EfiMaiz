import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Opciones from '../Opciones/CaracterizacionSitio/Componentes/ListaCaracterizacionSitio';
import ListaCaracterizacion from '../Opciones/CaracterizacionSitio/Componentes/ListaCaracterizacionSitio';

const Drawer = createDrawerNavigator({
    Inicio:{
        screen: Opciones,
        navigationOptions:{
            drawerLabel:'Inicio'
        }
    },
    Caracterizacion:{
        screen: ListaCaracterizacion,
        navigationOptions:{
            drawerLabel:'Caracterización del Sitio'
        }
    }
});


export default createAppContainer(Drawer);