import React, { Component } from 'react';
import EditarPerfil from '../Componentes/EditarPerfil';


export default class ContenedorEditarPerfil extends Component {

  constructor(props){
    super(props);
    this.state = {
      vistualActual: 'LogIn',
      pickerSelection: 'Ocupación',
      pickerDisplayed: false,
      email: 'eliabjselvacruz51@gmail.com',
      clave:'',
      nombre:'Eliab Javier',
      apellido:'Selva Cruz',
      telefono:'87373581',
      usuario:'eliab51'
    }
  }

  handleNombre = (nombreU) =>{
    this.setState({
      nombre:nombreU
    })
  }

  handleApellido = (apellidoU) =>{
    this.setState({
      apellido:apellidoU
    })
  }

  handleTelefono = (telefonoU) => {
    this.setState({
      telefono:telefonoU
    })
  }

  handleEmail= (emailCU) =>{
    this.setState({
      email:emailCU
  });
  }

  handlePass = (claveCU) =>{
    this.setState({
      clave:claveCU
  });
  }

  handleUsuario = (usuarioCU) =>{
    this.setState({
      usuario:usuarioCU
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
    const {email, clave, nombre,apellido, telefono,usuario} = this.state;
    
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
  }
}