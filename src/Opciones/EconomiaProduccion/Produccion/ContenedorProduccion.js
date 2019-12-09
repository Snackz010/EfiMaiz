import React,{Component} from 'react';
import Produccion from './Produccion';

class ContenedorProduccion extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  navegarEconomia = () => {
    const {navigation} = this.props;
    navigation.navigate('Economia');
  }

  render(){
    return(
      <Produccion
      
      navegarEconomia={this.navegarEconomia}
      />
    );
  }
}
export default ContenedorProduccion;