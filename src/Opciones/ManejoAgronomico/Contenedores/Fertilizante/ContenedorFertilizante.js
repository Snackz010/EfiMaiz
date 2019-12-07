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
      fertilizante: '', 
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

  calcularFertilizante = () => {
    const { cantidadManzana, cantidadSurco, plantasSurco } = this.state;
    console.log(cantidadManzana, cantidadSurco, plantasSurco)
    if(cantidadManzana=='' || cantidadSurco=='' || plantasSurco==''){
        Alert.alert('Advertencia','¡Debes llenar todos lo campos!');
    }else{
      const cantidadFertilizante = ((parseInt(cantidadManzana)+parseInt(cantidadSurco)+parseInt(plantasSurco)))+'gr';
      this.setState({
        fertilizante: cantidadFertilizante
      });
    }
  }

  render(){

    const {cantidadManzana, cantidadSurco, plantasSurco, fertilizante} = this.state;

    return(
      <Fertilizante
        cantidadManzana={cantidadManzana}
        cantidadSurco={cantidadSurco}
        plantasSurco={plantasSurco}
        handleCantidadManzana={this.handleCantidadManzana}
        handleCantidadSurco={this.handleCantidadSurco}
        handlePlantasSurco={this.handlePlantasSurco}
        fertilizante={fertilizante}
        calcularFertilizante={this.calcularFertilizante}
      />
    );
  }
}
export default ContenedorFertilizante;