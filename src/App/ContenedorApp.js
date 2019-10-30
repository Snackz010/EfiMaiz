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
    }

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


  render() {
    const {vistualActual} = this.state;

    switch (vistualActual) {
      case 'LogIn':
          return(
            <LogIn 
            cambiarPantallas={this.cambiarPantalla}/>
          );
        break;
      
      case 'SignUp':
            return(
              <SignUp />
            );
          break;
      default:
        break;
    }
  }

}