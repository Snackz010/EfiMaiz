import React,{Component} from 'react';

import Suelo from '../Componentes/Suelo';


class ContenedorSuelo extends Component{
    constructor(props){
        super(props);
        this.state = {
            TSuelo:'',
            Color:'',
            PH:'',
            MOrganica:'',
            Topografia:'',
            Textura:''
        }
    }

    //Funciones para pantalla de suelo

    eventoTxtSuelo =(value) => {
        this.setState({
            TSuelo:value
        })
    }

    eventoTxtColor = (value) => {
        this.setState({
            Color:value
        })
    }

    eventoTxtPH = (value) => {
        this.setState({
            PH:value
        })
    }


    eventoTxtMOrganica = (value) => {
        this.setState({
            MOrganica:value
        })
    }

    eventoTxtTopografia = (value) => {
        this.setState({
            Topografia:value
        })
    }


    eventoTxtTextura = (value) => {
        this.setState({
            Textura:value
        })
    }

    render(){

        const { TSuelo, Color, PH, MOrganica, Topografia, Textura } = this.state;
        return(
            <Suelo 
            eventoTxtSuelo={this.eventoTxtSuelo}
            eventoTxtColor={this.eventoTxtColor}
            eventoTxtPH={this.eventoTxtPH}
            eventoTxtMOrganica={this.eventoTxtMOrganica}
            eventoTxtTopografia={this.eventoTxtTopografia}
            eventoTxtTextura={this.eventoTxtTextura}
            suelo={TSuelo}
            color={Color}
            ph={PH}
            mOrganica={MOrganica}
            topografia={Topografia}
            textura={Textura}
            />
        );
    }
}

export default ContenedorSuelo;