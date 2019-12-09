import React,{Component} from 'react';
import Estadisticas from './Estadisticas';

class ContenedorEstadisticas extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <Estadisticas/>
    );
  }
}
export default ContenedorEstadisticas;