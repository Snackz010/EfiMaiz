import React, { Component } from 'react';

import LogIn from '../LogIn/Componentes/LogIn.js';
import SignUp from '../SignUp/Componentes/SignUp.js';

export default class ContenedorlogInSignUp extends Component {

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

  cambiaraDrawer = () => {
      const { navigation } = this.props;

      navigation.navigate('inicio');
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
          cambiarPantallas={this.cambiarPantalla}
          irdrawer={this.cambiaraDrawer}
          />
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