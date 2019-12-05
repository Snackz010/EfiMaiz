import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import StackPerfil from '../Perfil/stackPerfil';
import ContenedorInicio from '../Inicio//Contenedores/ContenedorInicio';
import StackOpciones from '../Opciones/CaracterizacionSitio/StackOpciones/StackOpciones.js'
import StackGuias from '../Opciones/GuiasInformativas/StackGuias/StackGuias';
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
        screen: StackGuias,
        navigationOptions:{
            drawerLabel:'Gúias informativas'
        }
    },
    Perfil:{
        screen: StackPerfil,
        navigationOptions:{
            drawerLabel:'Perfil de Usuario'
        }
    }
}
);




export default createAppContainer(Drawer);