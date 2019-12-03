import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ContenedorPerfil from '../Perfil/Contenedores/ContenedorPerfil';
import ContenedorInicio from '../Inicio//Contenedores/ContenedorInicio';
import StackOpciones from '../Opciones/CaracterizacionSitio/StackOpciones/StackOpciones.js'
import Guias from '../Opciones/GuiasInformativas/Componentes/GuiasInformativas';
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
    },
    GuiasInformativas:{
        screen: Guias,
        navigationOptions:{
            drawerLabel:'Gúias informativas'
        }
    },
    Perfil:{
        screen: ContenedorPerfil,
        navigationOptions:{
            drawerLabel:'Perfil de Usuario'
        }
    },
});


export default createAppContainer(Drawer);