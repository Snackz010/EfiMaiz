import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ListaCaracterizacionSitio from '../Pantallas/ListaCaracterizacionSitio.js';
import ContenedorAgua from '../Pantallas/Agua/Contenedores/ContenedorAgua';
import ContenedorClima from '../Pantallas/Clima/Contenedores/ContenedorClima';
import ContenedorSuelo from '../Pantallas/Suelo/Contenedores/ContenedorSuelo';
import ContenedorResultados from '../Pantallas/Resultados/ContenedorResultados';
import InicioListaCS from '../Pantallas/InicioListaCS';

const ListaCaracterizacionSitioStack = createStackNavigator({
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
    },
    Resultados:{
        screen:ContenedorResultados,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    }
});

export default createAppContainer(ListaCaracterizacionSitioStack);