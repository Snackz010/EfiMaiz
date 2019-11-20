import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ListaCaracterizacionSitio from '../../CaracterizacionSitio/Componentes/ListaCaracterizacionSitio.js';
import Agua from '../../CaracterizacionSitio/Componentes/Agua.js';
import Clima from '../../CaracterizacionSitio/Componentes/Clima.js';
import Suelo from '../../CaracterizacionSitio/Componentes/Suelo.js';

const ListaCaracterizacionSitioStack = createStackNavigator({
    listaOpciones:{
        screen:ListaCaracterizacionSitio,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },
    Agua:{
        screen:Agua,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },
    Clima:{
        screen:Clima,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    },
    Suelo:{
        screen:Suelo,
        headerModer:'none',
        navigationOptions:{
            headerShown:false,
        }
    }
});

export default createAppContainer(ListaCaracterizacionSitioStack);