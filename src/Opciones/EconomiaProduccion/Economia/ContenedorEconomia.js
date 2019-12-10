import React,{Component} from 'react';
import {Alert} from 'react-native';
import Economia from './Economia';

class ContenedorEconomia extends Component {
  constructor(props){
    super(props);
    this.state = {
      numQuintalesSembrados: '',
      precioQuintalesSembrados: '',
      numQuintalesCosechados: '',
      precioActual: '',
    }
  }

  eventoNumQuintalesSembrados = (quintalesSembrados)=> {
    this.setState({
      numQuintalesSembrados: quintalesSembrados
    });
  }

  eventoPrecioQuintalesSembrados = (precio)=> {
    this.setState({
      precioQuintalesSembrados: precio
    });
  }

  eventoNumQuintalesCosechados = (quintalesCosechados)=> {
    this.setState({
      numQuintalesCosechados: quintalesCosechados
    });
  }

  eventoPrecioActual = (precio)=> {
    this.setState({
     precioActual: precio
    });
  }


  calcularQuintales = () => {
    const Params = this.obtenerParametros();
    var quintales = ((Params.numGranosFilaMazorca * Params.numFilasMazorca)*Params.numMazorcasPlanta)*Params.numPlantasSurco;
    quintales = (quintales * Params.numSurcosManzana)*Params.numManzanas;
    return parseInt(((quintales/271)*0.60))/100;
  }

  navegarResultados= () => {
    const {navigation} = this.props;
    const {
      numQuintalesSembrados,
      precioQuintalesSembrados,
      numQuintalesCosechados,
      precioActual
    } = this.state;
    const ADatos = {
      ...this.obtenerParametros(),
      numQuintalesSembrados:numQuintalesSembrados,
      precioQuintalesSembrados:precioQuintalesSembrados,
      numQuintalesCosechados:numQuintalesCosechados,
      precioActual:precioActual

    }
    if(numQuintalesSembrados === ''||precioQuintalesSembrados===''||numQuintalesCosechados===''||precioActual===''){
      Alert.alert("Advertencia","Debes llenar todos los datos.");
    }else{
      navigation.navigate('Resultados',ADatos);
    }
    
  }

  obtenerParametros = () => {
    return this.props.navigation.state.params;
  }

  render(){

    const {
      numQuintalesSembrados,
      precioQuintalesSembrados,
      numQuintalesCosechados,
      precioActual,
    } = this.state; 

    return(
      <Economia
      eventoNumQuintalesSembrados={this.eventoNumQuintalesSembrados}
      eventoPrecioQuintalesSembrados={this.eventoPrecioQuintalesSembrados}
      eventoNumQuintalesCosechados={this.eventoNumQuintalesCosechados}
      eventoPrecioActual={this.eventoPrecioActual}
      numQuintalesSembrados={numQuintalesSembrados}
      precioQuintalesSembrados={precioQuintalesSembrados}
      numQuintalesCosechados={numQuintalesCosechados}
      precioActual={precioActual}
      navegarResultados={this.navegarResultados}
      />
    );
  }

  componentDidMount(){
    this.setState({
      numQuintalesCosechados:JSON.stringify(this.calcularQuintales())
    })
  }
}
export default ContenedorEconomia;