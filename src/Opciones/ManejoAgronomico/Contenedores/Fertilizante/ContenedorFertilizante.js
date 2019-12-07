import React,{Component} from 'react';
import {Alert} from 'react-native';
import Fertilizante from '../../Componentes/Fertilizante/Fertilizante';

class ContenedorFertilizante extends Component {
  constructor(props){
    super(props);
    this.state = {
      cantidadManzana: '',
      cantidadSurco: '',
      plantasSurco: '',
    }
  }

  handleCantidadManzana = (value)=> {
    this.setState({
      cantidadManzana: value
    });
  }

  handleCantidadSurco = (value)=> {
    this.setState({
      cantidadSurco: value
    });
  }

  handlePlantasSurco = (value)=> {
    this.setState({
      plantasSurco: value
    });
  }

  render(){

    const {cantidadManzana, cantidadSurco, plantasSurco} = this.state;

    return(
      <Fertilizante
        cantidadManzana={cantidadManzana}
        cantidadSurco={cantidadSurco}
        plantasSurco={plantasSurco}
        handleCantidadManzana={this.handleCantidadManzana}
        handleCantidadSurco={this.handleCantidadSurco}
        handlePlantasSurco={this.handlePlantasSurco}
      />
    );
  }
}
export default ContenedorFertilizante;