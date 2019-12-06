import React,{Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Germinacion from '../../Componentes/Germinacion/Germinacion';

class ContenedorGerminacion extends Component {
    constructor(props){
        super(props);
        this,this.state = {

        }
    }
    render(){
        return(
            <Germinacion />
        );

    }
}
export default ContenedorGerminacion;