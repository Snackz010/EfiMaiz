import React, { Component } from 'react';
import ManejoAgronomico from '../Componentes/ManejoAgronomico';

export default class ContenedorManejoAgro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, rutaIr:"Germinacion", rutaLeer: "GerminacionInstru", title: "Germinación", subTitle:"Funcionalidad", image:"https://hidroponia.mx/wp-content/uploads/2018/05/PLANTULAMAIZ-300x278.png"},
        {id:2, rutaIr:"Fertilizacion", rutaLeer: "FertilizacionInfo", title: "Fertilización", subTitle:"Funcionalidad", image:"https://www.fertiberia.com/media/605924/cabecera-maiz.jpg"},
        {id:3, rutaIr:"Herbicidas", rutaLeer: "HerbicidasInfo", title: "Herbicidas", subTitle:"Funcionalidad", image:"https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2017/03/8291973.jpg?itok=gHzlN8Vr"},
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