import React,{Component} from 'react';
import Perfil from '../Componentes/Perfil';

export default class ContenedorPerfil extends Component{
  constructor(props){
    super(props);
  }

  render(){
      return(
          <Perfil/>
      );
  }
}