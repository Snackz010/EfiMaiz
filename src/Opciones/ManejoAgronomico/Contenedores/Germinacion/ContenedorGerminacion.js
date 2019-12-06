import React,{Component} from 'react';
import {Alert} from 'react-native';
import Germinacion from '../../Componentes/Germinacion/Germinacion';

class ContenedorGerminacion extends Component {
  constructor(props){
    super(props);
    this.state = {
      grupo1:'',
      grupo2:'',
      grupo3:'',
      grupo4: '',
      promedio:'',
    }
  }

  eventoTxtGrupo1 = (grupoValue)=> {
    this.setState({
      grupo1: grupoValue
    });
  }

  eventoTxtGrupo2 = (grupoValue)=> {
    this.setState({
      grupo2: grupoValue
    });
  }

  eventoTxtGrupo3 = (grupoValue)=> {
    this.setState({
      grupo3: grupoValue
    });
  }

  eventoTxtGrupo4 = (grupoValue)=> {
    this.setState({
      grupo4: grupoValue
    });
  }

  calcularPromedio = (g1,g2,g3,g4) => {
    if(g1==='' || g2==='' || g3==='' || g4===''){
      Alert.alert('Advertencia','¡Debes llenar todos lo campos!');
    }
    else{
      const prom = ((parseInt(g1)+parseInt(g2)+parseInt(g3)+parseInt(g4))/4)+'%';
      this.setState({
        promedio: prom
      });
    }
  }

  render(){

    const {grupo1,grupo2,grupo3,grupo4,promedio} = this.state;

    return(
      <Germinacion 
        grupo1={grupo1}
        grupo2={grupo2}
        grupo3={grupo3}
        grupo4={grupo4}
        eventoTxtGrupo1={this.eventoTxtGrupo1}
        eventoTxtGrupo2={this.eventoTxtGrupo2}
        eventoTxtGrupo3={this.eventoTxtGrupo3}
        eventoTxtGrupo4={this.eventoTxtGrupo4}
        promedio={promedio}
        calcularPromedio={this.calcularPromedio}
      />
    );
  }
}
export default ContenedorGerminacion;