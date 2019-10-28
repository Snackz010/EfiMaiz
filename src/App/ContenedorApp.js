import React, { Component } from 'react';

import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import Opciones from '../Opciones/Opciones';
import CaracterizacionSitio from '../Opciones/CaracterizacionSitio/CaracterizacionSitio';
import Clima from '../Opciones/CaracterizacionSitio/Clima/Clima';
import Suelo from '../Opciones/CaracterizacionSitio/Suelo/Suelo';
import Agua from '../Opciones/CaracterizacionSitio/Agua/Agua';

export default class ContenedorApp extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return(
      <Agua/>
    );
  }
}