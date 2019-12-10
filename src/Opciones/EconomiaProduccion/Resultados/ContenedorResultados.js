import React, {Component} from 'react';
import Resultados from './Resultados';

export default class ContenedorResultados extends Component {
  constructor(props){
    super(props);
    this.state = {
      manzanas: '',
      quintalesSembrados: '',
      inversionQuintales: '',
      quintalesCosechados: '',
      ventaAproximada: '',
      gananciaAproximada: '',
      resultado: '',
    };
  }

  obtenerParametros = () => {
    return this.props.navigation.state.params;
  }
  calcularVenta = () => {
    const Param = this.obtenerParametros();
    return parseInt(Param.numQuintalesCosechados * Param.precioActual);
  }

  calcularInversion = () => {
    const Param = this.obtenerParametros();
    return (Param.numQuintalesSembrados * Param.precioQuintalesSembrados);
  }

  determinarResultados = () => {
    const Param = this.obtenerParametros();
    const ganancia = Param.numQuintalesSembrados * Param.precioQuintalesSembrados;
    const inversion = Param.numQuintalesSembrados * Param.precioQuintalesSembrados;
    var valor;

    if(ganancia > inversion){
      valor = 'Ganancia';
    }else if(inversion > ganancia){
      valor = 'Perdida'
    }else{
      valor = 'Inversión recuperada';
    }
    return valor;
  }

  calcularDatos = () => {
    const Param = this.obtenerParametros();
    this.setState({
      manzanas:Param.numManzanas,
      quintalesSembrados:Param.numQuintalesSembrados,
      inversionQuintales:this.calcularInversion(),
      quintalesCosechados:Param.numQuintalesCosechados,

      ventaAproximada:this.calcularVenta(),
      gananciaAproximada:(this.calcularVenta() - this.calcularInversion()),
      resultado:this.determinarResultados()


    });
  }

  render() {
    const {
      manzanas,
      quintalesSembrados,
      inversionQuintales,
      quintalesCosechados,
      ventaAproximada,
      gananciaAproximada,
      resultado,
    } = this.state;
    return (
        <Resultados
        manzanas={manzanas}
        quintalesSembrados={quintalesSembrados}
        inversionQuintales={inversionQuintales}
        quintalesCosechados={quintalesCosechados}
        ventaAproximada={ventaAproximada}
        gananciaAproximada={gananciaAproximada}
        resultado={resultado}
        />
    );
  }
  componentDidMount(){
    this.calcularDatos();
  }
}