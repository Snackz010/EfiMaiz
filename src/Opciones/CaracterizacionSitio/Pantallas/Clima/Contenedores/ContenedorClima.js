import React,{Component} from 'react';

import Clima from '../Componentes/Clima';


class ContenedorClima extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Clima />
        );
    }
}

export default ContenedorClima;