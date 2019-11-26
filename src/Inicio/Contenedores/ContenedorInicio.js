import React,{Component} from 'react';
import Inicio from '../Componentes/Inicio';

class ContenedorInicio extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {navigation} = this.props;
        return(
            <Inicio navigation={navigation}/>
        );
    }
}

export default ContenedorInicio;