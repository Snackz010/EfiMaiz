import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ListaCaracterizacionSitio from '../Pantallas/ListaCaracterizacionSitio.js';
import ContenedorAgua from '../Pantallas/Agua/Contenedores/ContenedorAgua';
import ContenedorClima from '../Pantallas/Clima/Contenedores/ContenedorClima';
import ContenedorSuelo from '../Pantallas/Suelo/Contenedores/ContenedorSuelo';

const ListaCaracterizacionSitioStack = createStackNavigator({
    listaOpciones:{
        screen:ListaCaracterizacionSitio,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },
    Agua:{
        screen:ContenedorAgua,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },
    Clima:{
        screen:ContenedorClima,
        headerModer:'none',
        navigationOptions:{
            header:null
        }
    },
    Suelo:{
        screen:ContenedorSuelo,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    }
});

export default createAppContainer(ListaCaracterizacionSitioStack);