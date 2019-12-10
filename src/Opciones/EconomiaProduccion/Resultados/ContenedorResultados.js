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
      ganaciaAproximada: '',
      resultado: '',
    };
  }

  render() {
    const {
      manzanas,
      quintalesSembrados,
      inversionQuintales,
      quintalesCosechados,
      ventaAproximada,
      ganaciaAproximada,
      resultado,
    } = this.state;
    return (
        <Resultados
        manzanas={manzanas}
        quintalesSembrados={quintalesSembrados}
        inversionQuintales={inversionQuintales}
        quintalesCosechados={quintalesCosechados}
        ventaAproximada={ventaAproximada}
        ganaciaAproximada={ganaciaAproximada}
        resultado={resultado}
        />
    );
  }
}