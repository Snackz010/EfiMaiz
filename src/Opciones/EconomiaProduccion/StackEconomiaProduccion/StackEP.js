import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ContenedorEconomia from '../Economia/ContenedorEconomia';
import ContenedorProduccion from '../Produccion/ContenedorProduccion'

const StacKEP = createStackNavigator({
    
    Produccion:{
        screen:ContenedorProduccion,
        navigationOptions:{
            header:null
        }
    },
    Economia:{
        screen:ContenedorEconomia,
        navigationOptions:{
            header:null
        }
    },
});

export default createAppContainer(StacKEP);