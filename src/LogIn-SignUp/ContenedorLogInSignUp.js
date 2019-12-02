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
      clave:'',
      nombre:'',
      apellido:'',
      telefono:'',
      usuario:''
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

    if(email != '' && clave != ''){
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.clave)
      .then(success => (
        this.cambiaraDrawer(),
        console.log('Logueo realizado correctamente: ', success)))
        .catch( error => (console.log('Este es el error: ', error)))
    }else{
      alert("Por favor ingrese un usuario y contraseña valido");
    }
  }

  //Metodo para guardar datos en firestore
    saveDataMethod = () =>{
      var db = firebase.firestore();
      //const {nombre, apellido, telefono, correo, pickerSelection, usuario} = this.props;
  
      db.collection("users").doc(this.state.email).set({
        fNombre: this.state.nombre,
        fApellido: this.state.apellido,
        fTelefono: this.state.telefono,
        fCorreoE: this.state.email,
        fOcupacion: this.state.pickerSelection,
        fUsuario: this.state.usuario

      }).then(function(docRef) {
        console.log("Datos registrados:", docRef.data)
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }

    //obteniendo datos desde firebase
    getDataFirebase = () => {

      var db = firebase.firestore();
      var docRef = db.collection('users').doc(this.state.email);

      docRef.get().then (function (doc) {

        if (doc.exists) {
          console.log("Datos del documento: ", doc.data().fCorreoE);
                   
        }else {
          console.log("No se encontró ningún documento");
        }
        
      }).catch (function(error) {

        console.log('Ha surgido el siguiente error: ', error)
        
      })

      
    

    }
  
    //Manejando el cambio de estado para el correo del usuario
    handleNombre = (nombreU) =>{
      this.setState({
        nombre:nombreU
      })
    }

  //Manejando el cambio de estado para el apellido del usuario
  handleApellido = (apellidoU) =>{
    this.setState({
      apellido:apellidoU
    })
  }

    //Manejando el cambio de estado para el teléfono del usuario
  handleTelefono = (telefonoU) => {
    this.setState({
      telefono:telefonoU
    })
  }

  //Manejando el cambio de estado para el correo del usuario
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

    //Manejando el cambio de estado para la contraseña del usuario
    handleUsuario = (usuarioCU) =>{
      this.setState({
        usuario:usuarioCU
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
    const {email, clave, nombre,apellido, telefono,usuario} = this.state;
    
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
              pickerValues={pickerValues} //Valores que necesito para el registro de la ocupación del usuario
              togglePicker={this.togglePicker}
              setPickerValue={this.setPickerValue}
              pickerSelection={pickerSelection}
              SignUpMethod = {this.SignUpMethod}
              handleEmail = {this.handleEmail}
              estadoEmail = {email}
              handlePass = {this.handlePass}
              estadoClave = {clave}
              handleNombre = {this.handleNombre}
              estadoNombre = {nombre}
              handleApellido = {this.handleApellido}
              estadoApellido = {apellido}
              handleTelefono = {this.handleTelefono}
              estadoTelefono = {telefono}
              handleUsuario = {this.handleUsuario}
              estadoUsuario = {usuario}
              saveDataMethod = {this.saveDataMethod}
              />
            );
          break;
      default:
        break;
    }
  }

}