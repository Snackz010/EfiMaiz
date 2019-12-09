import React,{Component} from 'react';
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
      />
    );
  }
}
export default ContenedorEconomia;