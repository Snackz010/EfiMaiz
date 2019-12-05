import {createStackNavigator, Header} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Cosecha from '../Componentes/Cosecha';
import Enfermedades from '../Componentes/Enfermedades';
import Fertilizacion from '../Componentes/Fertilizacion';
import Generalidades from '../Componentes/Generalidades';
import GuiasInformativas from '../Componentes/GuiasInformativas';
import Malezas from '../Componentes/Malezas';
import Postcosecha from '../Componentes/PostCosecha';
import Siembra from '../Componentes/Siembra';
import Plagas from '../Componentes/Plagas'

const stackGuias = createStackNavigator({
  GuiasInformativas:{
    screen:GuiasInformativas,
    navigationOptions:{
      header:null
    }
  },
  Cosecha:{
    screen:Cosecha,
    navigationOptions:{
      header:null
    }
  },
  Enfermedades:{
    screen:Enfermedades,
    navigationOptions:{
      header:null
    }
  },
  Fertilizacion:{
    screen:Fertilizacion,
    navigationOptions:{
      header:null
    }
  },
  Generalidades:{
    screen:Generalidades,
    navigationOptions:{
      header:null
    }
  },
  Malezas:{
    screen:Malezas,
    navigationOptions:{
      header:null
    }
  },
  Postcosecha:{
    screen:Postcosecha,
    navigationOptions:{
      header:null
    }
  },
  Siembra:{
    screen:Siembra,
    navigationOptions:{
      header:null
    }
  },
  Plagas:{
    screen:Plagas,
    navigationOptions:{
      header:null
    }
  }
});

export default createAppContainer(stackGuias);
