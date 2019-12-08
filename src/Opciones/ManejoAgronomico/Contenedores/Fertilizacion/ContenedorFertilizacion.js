import React,{Component} from 'react';
import {Alert} from 'react-native';
import Fertilizacion from '../../Componentes/Fertilizacion/Fertilizacion';

class ContenedorFertilizante extends Component {
  constructor(props){
    super(props);
    this.state = {
      cantidadManzana: '',
      cantidadSurco: '',
      plantasSurco: '',
      fertilizante: '',//Este es el dato de fertilizante a almacenar
      gramosPlanta: '',
      pickerSelection: 'Tipo de Fertilizante',
      pickerDisplayed: false,
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
    const { cantidadManzana, cantidadSurco, plantasSurco, pickerSelection, gramosPlanta } = this.state;
    var quintales = 0;
    if(cantidadManzana=='' || pickerSelection==='Tipo de Fertilizante'){
        Alert.alert('Advertencia','¡Debes llenar todos lo campos!');
    }
    else{
      if(pickerSelection==='12-30-10' || pickerSelection==='10-30-20'){
        quintales=2;
      }
      if(pickerSelection==='Urea'){
        quintales=3;
      }
      const cantidadFertilizante = ((parseInt(cantidadManzana)*quintales));
      const gramos = cantidadFertilizante * 45360;
      const gramosP = (gramos/(parseInt(cantidadManzana)*parseInt(cantidadSurco)*parseInt(plantasSurco)));
      Alert.alert('Resultado',`¡La cantidad de fertilizante necesaria para ${cantidadManzana} manzanas de cultivo es ${cantidadFertilizante} quintales.` );
      this.setState({
        fertilizante: cantidadFertilizante,
        gramosPlanta: gramosP,
        cantidadSurco: '',
        cantidadManzana: '',
        plantasSurco: '',
        pickerSelection: 'Tipo de Fertilizante'
      });
    }
  }

  togglePicker = () => {
    this.setState({
        pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  setPickerValue = (newValue) =>{
      this.setState({
          pickerSelection: newValue
      })
      this.togglePicker();
  }

  render(){

    const pickerValues = [
      {
          title: '12-30-10',
          value: '12-30-10'
      },
      {
          title: '10-30-20',
          value: '10-30-20'
      },
      {
          title: 'Urea',
          value: 'Urea'
      },
  ]

    const {cantidadManzana, cantidadSurco, plantasSurco, fertilizante, pickerSelection, pickerDisplayed, gramosPlanta} = this.state;

    return(
      <Fertilizacion
        pickerDisplayed={pickerDisplayed}
        pickerValues={pickerValues}
        togglePicker={this.togglePicker}
        setPickerValue={this.setPickerValue}
        pickerSelection={pickerSelection}

        gramosPlanta={gramosPlanta}
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