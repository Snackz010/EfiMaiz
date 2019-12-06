import React, { Component } from 'react';
import ManejoAgronomico from '../Componentes/ManejoAgronomico';

export default class ContenedorManejoAgro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, rutaIr:"Germinacion", rutaLeer: "GerminacionInstru", title: "Germinación", subTitle:"Funcionalidad", image:"https://hidroponia.mx/wp-content/uploads/2018/05/PLANTULAMAIZ-300x278.png"},
      ]
    };
  }

  navegarPantalla = (item) => {
    this.props.navigation.navigate(item);
  }

  navegarPantallaLeer = (item) => {
    this.props.navigation.navigate(item);
  }
  render() {
    return (
      <ManejoAgronomico
      navegarPantalla={this.navegarPantalla}
      navegarPantallaLeer={this.navegarPantallaLeer}
      data={this.state.data}
      />
    );
  }
}