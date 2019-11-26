import React,{Component} from 'react';

import Suelo from '../Componentes/Suelo';


class ContenedorSuelo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Suelo />
        );
    }
}

export default ContenedorSuelo;