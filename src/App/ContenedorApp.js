import React, { Component } from 'react';

import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import ContenedorSignUp from '../SignUp/ContenedorSignUp';
import Opciones from '../Opciones/Opciones';
import CaracterizacionSitio from '../Opciones/CaracterizacionSitio/CaracterizacionSitio';
import Clima from '../Opciones/CaracterizacionSitio/Clima/Clima';
import Suelo from '../Opciones/CaracterizacionSitio/Suelo/Suelo';
import Agua from '../Opciones/CaracterizacionSitio/Agua/Agua';

export default class ContenedorApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      vistualActual: 'LogIn',
      pickerSelection: 'Ocupación',
      pickerDisplayed: false
    }

  }

  //Esta función modifica el el valor del estado del elemento seleccionado
  //Y tambien cierra el modal al llamar la función togglePicker
  setPickerValue = (newValue) =>{
    this.setState({
      pickerSelection: newValue
    })
    this.togglePicker();
  }

  cambiarPantalla = () =>{
   const { vistualActual } = this.state;

    (vistualActual==='LogIn')?
    this.setState({
      vistualActual:'SignUp',
    }) :
    this.setState({
      vistualActual:'LogIn'
    });
  }

  //Esta función cambia el estado del modal
  togglePicker = () => {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const {vistualActual, pickerDisplayed, pickerSelection} = this.state;
    
    //Valores que se cargan en el modal
    const pickerValues = [
      {
        title: 'Estudiante',
        value: 'Estudiante'
      },
      {
        title: 'Docente',
        value: 'Docente'
      },
      {
        title: 'Productor',
        value: 'Productor'
      }
    ]

    switch (vistualActual) {
      case 'LogIn':
          return(
            <LogIn 
            cambiarPantallas={this.cambiarPantalla}/>
          );
        break;
      
      case 'SignUp':
            return(
              <SignUp 
              pickerDisplayed={pickerDisplayed}
              pickerValues={pickerValues}
              togglePicker={this.togglePicker}
              setPickerValue={this.setPickerValue}
              pickerSelection={pickerSelection}
              />
            );
          break;
      default:
        break;
    }
  }

}