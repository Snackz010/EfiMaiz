import {createStackNavigator, Header} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Cosecha from '../Componentes/Cosecha';
import Enfermedades from '../Componentes/Enfermedades';
import Fertilizacion from '../../ManejoAgronomico/Componentes/Fertilizacion/FertilizacionInformacion';
import Generalidades from '../Componentes/Generalidades';
import ContenedorGuias from '../Contenedores/ContenedorGuias';
import Malezas from '../Componentes/Malezas';
import Postcosecha from '../Componentes/PostCosecha';
import Siembra from '../Componentes/Siembra';
import Plagas from '../../ManejoAgronomico/Componentes/ControlPlaga/ControlPlagaInformacion';
import GerminacionLeer from '../../ManejoAgronomico/Componentes/Germinacion/GerminacionInstrucciones';

const stackGuias = createStackNavigator({
  GuiasInformativas:{
    screen:ContenedorGuias,
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
  },
  Germinacion:{
    screen:GerminacionLeer,
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
});

export default createAppContainer(stackGuias);
