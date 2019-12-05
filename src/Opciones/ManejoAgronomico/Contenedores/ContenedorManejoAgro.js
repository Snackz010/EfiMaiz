import React, { Component } from 'react';
import ManejoAgronomico from '../Componentes/ManejoAgronomico';

export default class ContenedorManejoAgro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, ruta:"Generalidades",title: "Generalidades", subTitle:"Guía", image:"http://delmaiz.info/wp-content/uploads/2017/01/caracter%C3%ADsticas-del-ma%C3%ADz.jpg"},
        {id:2, ruta:"Siembra",title: "Siembra", subTitle:"Guía", image:"https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
        {id:3, ruta:"Fertilizacion",title: "Fertilización", subTitle:"Guía", image:"https://pbs.twimg.com/media/EDOmFG-XYAALHiJ.jpg"} ,
        {id:4, ruta:"Malezas",title: "Maleza", subTitle:"Guía", image:"https://cdn.pixabay.com/photo/2017/07/19/08/50/gardening-2518377_960_720.jpg"}, 
        {id:5, ruta:"Plagas",title: "Plagas", subTitle:"Guía", image:"https://cdn.pixabay.com/photo/2016/11/28/20/13/desert-locust-1865955_960_720.jpg"}, 
        {id:6, ruta:"Enfermedades",title: "Enfermedades", subTitle:"Guía", image:"https://t2.ev.ltmcdn.com/es/posts/9/9/1/roya_del_maiz_2199_5_600.jpg"}, 
        {id:7, ruta:"Cosecha",title: "Cosecha", subTitle:"Guía", image:"https://www.infobae.com/new-resizer/E-5eS6rvl_s_WAZXuO2ESrBShEU=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/29110007/maiz-1.jpg"}, 
        {id:8, ruta:"Postcosecha",title: "Postcosecha", subTitle:"Guía", image:"https://www.agrarheute.com/media/styles/lightbox/public/media/554410/554410.gif?itok=tZ-T_1V_"}, 
      ]
    };
  }

  navegarPantalla = (item) => {
    this.props.navigation.navigate(item);
  }

  render() {
    return (
      <ManejoAgronomico
      navegarPantalla={this.navegarPantalla}
      data={this.state.data}
      />
    );
  }
}