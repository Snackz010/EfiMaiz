import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  ContenedorGerminacion  from '../Contenedores/Germinacion/ContenedorGerminacion';
import GerminacionInstrucciones from '../Componentes/Germinacion/GerminacionInstrucciones';
import ContenedorFertilizacion from '../Contenedores/Fertilizacion/ContenedorFertilizacion';
import FertilizacionInformacion from '../Componentes/Fertilizacion/FertilizacionInformacion';
import ContenedorManejoAgronomico from '../Contenedores/ContenedorManejoAgro';
import HerbicidasContenedor from '../Contenedores/Herbicidas/ContenedorHerbicidas';

const StackManejoAgronomico = createStackNavigator({
    ManejoAgronomico:{
        screen:ContenedorManejoAgronomico,
        navigationOptions:{
            header:null
        }
    },
    Germinacion:{
        screen:ContenedorGerminacion,
        navigationOptions:{
            header:null
        }
    },
    GerminacionInstru:{
        screen:GerminacionInstrucciones,
        navigationOptions:{
            header:null
        }
    },
    Fertilizacion:{
        screen:ContenedorFertilizacion,
        navigationOptions:{
            header:null
        }
    },
    FertilizacionInfo:{
        screen:FertilizacionInformacion,
        navigationOptions:{
            header:null
        }
    },
    Herbicidas:{
        screen:HerbicidasContenedor,
        navigationOptions:{
            header:null
        }
    },
});

export default createAppContainer(StackManejoAgronomico);