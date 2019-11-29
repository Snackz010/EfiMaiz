import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import LogIn from '../LogIn/Componentes/LogIn.js';
import SignUp from '../SignUp/Componentes/SignUp.js';

export default class ContenedorlogInSignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      vistualActual: 'LogIn',
      pickerSelection: 'Ocupación',
      pickerDisplayed: false,
      email: '',
      clave:''
    }
  }

  //Método para registro de usurios con su correo y contraseña
  SignUpMethod = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.clave)
    .then(success => ( 
      this.cambiaraDrawer(),
      console.log('El resgistro realizado correctamente: ', success)))
    .catch( error => (console.log('Este es el error: ', error)))
  }

  //Método para iniciar sesión con su correo y contraseña
  LogInMethod = () => {
    const {email, clave} = this.state;

    //if(email != '' && clave != ''){
      //firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.clave)
      //.then(success => (
        this.cambiaraDrawer();
        //console.log('Logueo realizado correctamente: ', success)))
      //.catch( error => (console.log('Este es el error: ', error)))
    //}else{
    //  alert("Por favor ingrese un usuario y contraseña valido");
    //}
  }

  ////Manejando el cambio de estado para el correo del usuario
  handleEmail= (emailCU) =>{
    this.setState({
      email:emailCU
  });
  }

  //Manejando el cambio de estado para la contraseña del usuario
  handlePass = (claveCU) =>{
    this.setState({
      clave:claveCU
  });
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
  //No borrar, lo estoy usuando para redireccionar al inicio luego del loggueo y del registro
  togglePicker = () => {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const {vistualActual, pickerDisplayed, pickerSelection} = this.state;
    const {email, clave} = this.state;
    
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
          irdrawer={this.cambiaraDrawer} //este posiblemente quede en el olvido, pero porfavor no quitar aún
          LogInMethod = {this.LogInMethod}
          handleEmail = {this.handleEmail}
          estadoEmail = {email}
          handlePass = {this.handlePass}
          estadoClave = {clave}
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
              SignUpMethod = {this.SignUpMethod}
              handleEmail = {this.handleEmail}
              estadoEmail = {email}
              handlePass = {this.handlePass}
              estadoClave = {clave}
              />
            );
          break;
      default:
        break;
    }
  }

}