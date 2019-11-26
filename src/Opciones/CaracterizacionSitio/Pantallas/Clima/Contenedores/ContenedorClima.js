import React,{Component} from 'react';

import Clima from '../Componentes/Clima';


class ContenedorClima extends Component{
    constructor(props){
        super(props);
        this.state = {
            Temperatura:'',
            Precipitacion:'',
            Humedad:'',
            VelocidadV:'',
            Altitud:'',
            NRadiacion:''
        }
    }

    //eventos pantalla clima

    eventoTxtTemperatura = (value) => {
        this.setState({
            Temperatura: value
        });
    }

    eventoTxtHumedad = (value) => {
        this.setState({
            Humedad: value
        })
    }

    eventoTxtPrecipitacion = (value) => {
        this.setState({
            Precipitacion: value
        });
    }

    eventoTxtVelocidad = (value) => {
        this.setState({
            VelocidadV: value
        });
    }

    eventoTxtAltitud = (value) => {
        this.setState({
            Altitud: value
        });
    }

    eventoTxtNRadiacion = (value) => {
        this.setState({
            NRadiacion: value
        });
    }

    render(){

        const { Temperatura, Humedad, VelocidadV, Altitud, NRadiacion, Precipitacion } = this.state

        return(
            <Clima 
                eventoTxtTemperatura={this.eventoTxtTemperatura}
                eventoTxtPrecipitacion={this.eventoTxtPrecipitacion}
                eventoTxtHumedad={this.eventoTxtHumedad}
                eventoTxtVelocidad={this.eventoTxtVelocidad}
                eventoTxtAltitud={this.eventoTxtAltitud}
                eventoTxtNRadiacion={this.eventoTxtNRadiacion}
                temperatura={Temperatura}
                humedad={Humedad}
                precipitacion={Precipitacion}
                velocidadV={VelocidadV}
                altitud={Altitud}
                nRadiacion={NRadiacion}
            />
        );
    }
}

export default ContenedorClima;