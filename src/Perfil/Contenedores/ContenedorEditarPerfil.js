import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import EditarPerfil from '../Componentes/EditarPerfil';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase'


export default class ContenedorEditarPerfil extends Component {

  constructor(props){
    super(props);
    this.state = {
      vistualActual: 'LogIn',
      pickerSelection: 'Ocupación',
      pickerDisplayed: false,
      Nombre:'Eliab Javier',
      Apellido:'Selva Cruz',
      Telefono:'87373581',
      Usuario:'eliab51'
    }
  }

  getDataFirebase = () => {
    
    var db = firebase.firestore(); //Referencia a firestore cloud
    var docRef = db.collection('users').doc(this.state.Email); // refrencia al directorio específico de donde exraigo datos
    docRef.get().then ( (doc) => {
    if(doc.exists){
      this.setState({
        Nombre:doc.data().fNombre,
        Apellido:doc.data().fApellido,
        Telefono:doc.data().fTelefono,
        Ocupacion:doc.data().fOcupacion,
        Usuario:doc.data().fUsuario,
      })
    }else{
      console.log('No existe el documento')
    }
    }).catch (function(error) {
      console.log('Ha surgido el siguiente error: ', error) 
    })
  }

  //Actualizando los datos del perfil del usuario
  updateDataMethod = () =>{
    var db = firebase.firestore();
    //const {nombre, apellido, telefono, correo, pickerSelection, usuario} = this.props;

    db.collection("users").doc(this.state.Email).set({
      fNombre: this.state.Nombre,
      fApellido: this.state.Apellido,
      fTelefono: this.state.Telefono,
      fOcupacion: this.state.pickerSelection,
      fUsuario: this.state.Usuario,
    },{
      merge: true
    }
    ).then((docRef) => {
      alert('Los Datos se han actualizados')
      console.log("Datos Cambiados correctamente")
      

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'inicio' })],
    });
    this.props.navigation.dispatch(resetAction);
    }).catch(function(error) {
      console.error("Error al actualizar los datos del usuario: ", error);
    });
  }

//Método para obtener el email del usuario para la extracción de los datos
ObtenerEmail = async () => {
  const emailAsycn = await AsyncStorage.getItem ('DATO');
  return emailAsycn;
}

  handleNombre = (nombreU) =>{
    this.setState({
      Nombre:nombreU
    })
  }

  handleApellido = (apellidoU) =>{
    this.setState({
      Apellido:apellidoU
    })
  }

  handleTelefono = (telefonoU) => {
    this.setState({
      Telefono:telefonoU
    })
  }

  handleUsuario = (usuarioCU) =>{
    this.setState({
      Usuario:usuarioCU
  });
  }

  setPickerValue = (newValue) =>{
    this.setState({
      pickerSelection: newValue
    })
    this.togglePicker();
  }

  togglePicker = () => {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const {pickerDisplayed, pickerSelection} = this.state;
    const {Nombre, Apellido, Telefono, Usuario} = this.state;
    
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

    return(
      <EditarPerfil 
      pickerDisplayed={pickerDisplayed}
      pickerValues={pickerValues}
      togglePicker={this.togglePicker}
      setPickerValue={this.setPickerValue}
      pickerSelection={pickerSelection}
      SignUpMethod = {this.SignUpMethod}
      handleNombre = {this.handleNombre}
      estadoNombre = {Nombre}
      handleApellido = {this.handleApellido}
      estadoApellido = {Apellido}
      handleTelefono = {this.handleTelefono}
      estadoTelefono = {Telefono}
      handleUsuario = {this.handleUsuario}
      estadoUsuario = {Usuario}
      updateDataMethod = {this.updateDataMethod}
      />
    );
  }

  async componentDidMount (){

    const datos = await this.ObtenerEmail();
    console.log(datos);
    if (datos !== null) {
      const emailStorage = JSON.parse(datos);
      this.setState({
        Email: emailStorage,
      })
      this.getDataFirebase();
    }
  }

  async componentWillMount (){
      this.getDataFirebase();
    }

}