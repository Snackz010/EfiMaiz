import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ContenedorPerfil from './Contenedores/ContenedorPerfil'
import ContenedorEditarPerfil from './Contenedores/ContenedorEditarPerfil'

const stackPerfil = createStackNavigator({
  Perfil:{
    screen:ContenedorPerfil,
    navigationOptions:{
      header:null
    }
  },
  EditarPerfil:{
    screen:ContenedorEditarPerfil,
    navigationOptions:{
      header:null
    }
  }
});

export default createAppContainer(stackPerfil);