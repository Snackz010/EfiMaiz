import React,{Component} from 'react';
import {Alert} from 'react-native';
import Herbicidas from '../../Componentes/Herbicidas/Herbicidas';

class ContenedorHerbicida extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickerSelection: 'Seleccione un herbicida',
      pickerDisplayed: false,
      dosis: ''
    }
  }

  togglePicker = () => {
    this.setState({
        pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  setPickerValue = (newValue, newDosis) =>{
      this.setState({
          pickerSelection: newValue,
          dosis: newDosis,
      })
      this.togglePicker();
  }

  render(){

    const pickerValues = [
      {
          title: 'Gesagard PH 50%',
          value: 'Gesagard PH 50%',
          dosis: '1,5 - 2,0 kg/ha'
      },
      {
          title: 'Prometex PH 50% (Prometrina)',
          value: 'Prometex PH 50% (Prometrina)',
          dosis: '1,5 - 2,0 kg/ha'
      },
      {
        title: 'Gesapax PH 80%',
        value: 'Gesapax PH 80%',
        dosis: '2,0 - 2,5 kg/ha'
      },
      {
        title: 'Ametrex GD 80%',
        value: 'Ametrex GD 80%',
        dosis: '2,0 - 2,5 kg/ha'
      },
      {
        title: 'Ametrol SC 50%',
        value: 'Ametrol SC 50%',
        dosis: '2,0 - 2,5 kg/ha'
      },
      {
        title: 'Ametryn PH 80%',
        value: 'Ametryn PH 80%',
        dosis: '2,0 - 2,5 kg/ha'
      },
      {
        title: 'Glifosato SC 48%',
        value: 'Glifosato SC 48%',
        dosis: '1,44 -2,16 kg/ha'
      },
      {
        title: 'Glifosato 36 SL',
        value: 'Glifosato 36 SL',
        dosis: '3 - 3,5 L/mz'
      },
      {
        title: 'Gramoxone',
        value: 'Gramoxone',
        dosis: '2,0 - 2,5 L/Ha'
      },
      {
        title: 'Doblete',
        value: 'Doblete',
        dosis: '1,0 - 2,0 L/Ha'
      },
      {
        title: 'Fusilade (Fluazitop-p-bulito)',
        value: 'Fusilade (Fluazitop-p-bulito)',
        dosis: '2,5 - 3,5 L/Ha'
      },
      {
        title: 'Leopar CE 10.8%',
        value: 'Leopar CE 10.8%',
        dosis: '2,5 - 3,5 L/Ha'
      },
      {
        title: 'Mizil CE 10%',
        value: 'Mizil CE 10%',
        dosis: '2,5 - 3,5 L/Ha'
      },
  ]

    const {pickerSelection, pickerDisplayed, dosis} = this.state;

    return(
      <Herbicidas
        pickerDisplayed={pickerDisplayed}
        pickerValues={pickerValues}
        togglePicker={this.togglePicker}
        setPickerValue={this.setPickerValue}
        pickerSelection={pickerSelection}
        dosis={dosis}
      />
    );
  }
}
export default ContenedorHerbicida;