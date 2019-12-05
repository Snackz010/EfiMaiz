import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ContenedorManejoAgronomico from '../Contenedores/ContenedorManejoAgro';

const StackManejoAgronomico = createStackNavigator({
    ManejoAgronomico:{
        screen:ContenedorManejoAgronomico,
        navigationOptions:{
            header:null
        }
    }
});

export default createAppContainer(StackManejoAgronomico);