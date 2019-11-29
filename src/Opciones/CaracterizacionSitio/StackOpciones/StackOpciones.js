import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import InicioListaCs from '../Pantallas/InicioListaCS';
import ListaCaracterizacionSitio from '../Pantallas/ListaCaracterizacionSitio.js';
import ContenedorAgua from '../Pantallas/Agua/Contenedores/ContenedorAgua';
import ContenedorClima from '../Pantallas/Clima/Contenedores/ContenedorClima';
import ContenedorSuelo from '../Pantallas/Suelo/Contenedores/ContenedorSuelo';
import InicioListaCS from '../Pantallas/InicioListaCS';

const ListaCaracterizacionSitioStack = createStackNavigator({
    inicioLista:{
        screen:InicioListaCS,
        navigationOptions:{
            header:null,
        }
    },
    listaOpciones:{
        screen:ListaCaracterizacionSitio,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },

    Clima:{
        screen:ContenedorClima,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },
    Suelo:{
        screen:ContenedorSuelo,
        headerModer:'none',
        navigationOptions:{
            header:null
        }
    },
    Agua:{
        screen:ContenedorAgua,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    }
});

export default createAppContainer(ListaCaracterizacionSitioStack);