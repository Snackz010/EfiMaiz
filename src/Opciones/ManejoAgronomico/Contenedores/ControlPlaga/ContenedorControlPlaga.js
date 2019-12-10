import React,{Component} from 'react';
import {Alert} from 'react-native';
import ControlPlaga from '../../Componentes/ControlPlaga/ControlPlaga';

class ContenedorControlPlaga extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickerSelection: 'Seleccione una plaga',
      pickerDisplayed: false,
      textInput: 'Muestreo',
      cantidadDecision: '',
      decisionSelect: '',
      texto: '',
      tratamiento: '',
      tratamientoAux: ''
    }
  }

  togglePicker = () => {
    this.setState({
        pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  handleCantidadDecision = (value) => {
    const { decisionSelect, tratamiento, tratamientoAux} = this.state;
    if(parseInt(value)>=parseInt(decisionSelect)){
      this.setState({
        texto: '¡Debe aplicarse un control!',
        tratamiento: tratamientoAux
      })
    }
    else{
      this.setState({
        texto: 'No debe aplicarse un control.',
        tratamiento: ''
      })
    }
    this.setState({
        cantidadDecision: value
    })
  }

  setPickerValue = (newValue, textSelect, decisionSelected, tratamiento) =>{
      this.setState({
          pickerSelection: newValue,
          textInput: textSelect,
          decisionSelect: decisionSelected,
          tratamientoAux: tratamiento,
      })
      this.togglePicker();
  }

  render(){

    const pickerValues = [
      {
          title: 'Cortador (Agrotis spp)',
          value: 'Cortador (Agrotis spp)',
          textDecision: 'N° Plantas cortadas',
          decision: 6,
          tratamiento: 'Tras superar los umbrales de daño aplicar un piretroide en pulverización (deltametrin, lambda cihalotrin, etc.). En producción ecológica se puede utilizar azadiractin.'
      },
      {
          title: 'Barrenador (Diatraea linoalata)',
          value: 'Barrenador (Diatraea linoalata)',
          textDecision: 'N° Huevos o larvas',
          decision: 20,
          tratamiento: ''
      },
      {
        title: 'Cogollero (Spodoptera frugiperda)',
        value: 'Cogollero (Spodoptera frugiperda)',
        textDecision: 'N° Plantas con cogollero',
        decision: 10,
        tratamiento: 'Se puede hacer control químico con un producto granulado como Counter 10% G a razón de 15 libras por manzana, aplicado a mano.'
      },
      {
        title: 'Coralillo (Elasmopalpus lignosellus)',
        value: 'Coralillo (Elasmopalpus lignosellus)',
        textDecision: 'N° Larvas',
        decision: 5,
        tratamiento: 'Dosis Carbofuran Furadan 3% 20 - 40 Kg/Ha, Furadan 5% 12 - 24 Kg/Ha, Etrofolan 5% 15 - 40 Kg/Ha, Forato Thimet 10% 10 - 20Kg/Ha, Fensulfotion Terracur-P 20- 40 Kg/Ha'
      },
      {
        title: 'Medidor de las gramíneas (Mocis latipes)',
        value: 'Medidor de las gramíneas (Mocis latipes)',
        textDecision: 'N° Larvas',
        decision: 50,
        tratamiento: 'Aplicaciones a los focos iniciales y en áreas aledañas infestadas con productos a base de: Carbarilo, clorpirifos, endosulfan, malation, metamidofos, paration metilo.'
      },
      {
        title: 'Mosquita de la panoja (Contarinia sorguicola)',
        value: 'Mosquita de la panoja (Contarinia sorguicola)',
        textDecision: 'N° Adultos',
        decision: 200,
        tratamiento: 'Nombre comercial Ingrediente activo Dosis Analor 480 Clorpirifos etil 0.5 L/ha Folimat Ometoato De 400 a 600 ml/ha. Malathion 1000 Malation 0.5 L/ha. Decis 2.5 CE Deltametrina 200 a 250 ml/ha. Cipermetrina 200 Cipermetrina 250 a 200 ml/ha.'
      },
      {
        title: 'Chinches (Nezara viridula)',
        value: 'Chinches (Nezara viridula)',
        textDecision: 'N° Chinches',
        decision: 400,
        tratamiento: 'Las materias activas a utilizar son deltametrin o lambda cihalotrin en pulverización sobre los focos.'
      },
      {
        title: 'Spodoptera frugiperda, Helicoverpa zea',
        value: 'Spodoptera frugiperda, Helicoverpa zea',
        textDecision: 'N° Larvas',
        decision: 20,
        tratamiento: ''
      },
  ]

    const {
      pickerSelection,
      pickerDisplayed,
      cantidadDecision,
      textInput,
      texto,
      tratamiento
    } = this.state;

    return(
      <ControlPlaga
        pickerDisplayed={pickerDisplayed}
        pickerValues={pickerValues}
        togglePicker={this.togglePicker}
        setPickerValue={this.setPickerValue}
        pickerSelection={pickerSelection}
        cantidadDecision={cantidadDecision}
        handleCantidadDecision={this.handleCantidadDecision}
        textInput={textInput}
        texto={texto}
        tratamiento={tratamiento}
      />
    );
  }
}
export default ContenedorControlPlaga;