import React,{Component} from 'react';

import Agua from '../Componentes/Agua';


class ContenedorAgua extends Component{

    constructor(props){

        super(props);

        this.state = {
            Volumen:'',
            Calidad:'',
            Fuente:''
        }
    }



    //Eventos de texto pantalla Agua


    eventoTxtVolumen = (VolumenValue)=> {
        this.setState({
            Volumen: VolumenValue
        });
    }

    eventoTxtCalidad = (CalidadValue) => {
        this.setState({
            Calidad: CalidadValue,
        });
    }

    eventoTxtFuente = (FuenteValue) => {
        this.setState({
            Fuente: FuenteValue
        });
    }

    render(){
        const {Volumen, Calidad, Fuente} = this.state;
        return(
            <Agua 
                eventoTxtCalidad={this.eventoTxtCalidad}
                estadoCalidad={Calidad}
                eventoTxtFuente={this.eventoTxtFuente}
                estadoFuente={Fuente}
                eventoTxtVolumen={this.eventoTxtVolumen}
                estadoVolumen={Volumen}
            />

        );
    }
} 

export default ContenedorAgua;