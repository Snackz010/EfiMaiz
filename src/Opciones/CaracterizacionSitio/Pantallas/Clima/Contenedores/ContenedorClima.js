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


    navegarSuelo = () => {
        const { Temperatura, Precipitacion, VelocidadV, Humedad, Altitud, NRadiacion } = this.state;
        const { navigation } = this.props;
  
        const Datos = {
            TemperaturaC: Temperatura,
            PrecipitacionC: Precipitacion,
            VelocidadVC: VelocidadV,
            HumedadC: Humedad,
            AltitudC: Altitud,
            NRadiacionC: NRadiacion 
        }
        this.evaluarClima();
        navigation.navigate('Suelo',Datos);

    }

        evaluarClima = (props) => {
            const {Temperatura, Altitud, Precipitacion } = this.state;
            //const {Temperatura, Altitud, Precipitacion } = props;

            var contador = 0;

            if(parseInt(Temperatura)>=19 && parseInt(Temperatura)<=24){
                contador += 3;
            }else if((parseInt(Temperatura)>24 && parseInt(Temperatura)<=28)||(parseInt(Temperatura)>=15 && parseInt(Temperatura)<=18)){
                contador += 2;
            }else if(parseInt(Temperatura)>=29){
                contador += 1;
            }

            if(parseInt(Precipitacion)>=700 && parseInt(Precipitacion)<= 850){
                contador += 3;
            }else if((parseInt(Precipitacion)>=500 && parseInt(Precipitacion)<=700)||(parseInt(Precipitacion)>=850 && parseInt(Precipitacion)<=1000)){
                contador += 2;
            }else if(parseInt(Temperatura)<=500 || parseInt(Temperatura)>=1000){
                contador += 1;
            }

            if(parseInt(Altitud)>=200 && parseInt(Altitud)<= 800){
                contador += 3;
            }else if((parseInt(Altitud)>=100 && parseInt(Altitud)<=199)||(parseInt(Altitud)>=801 && parseInt(Altitud)<=1000)){
                contador += 2;
            }else if(parseInt(Altitud)>=0 && parseInt(Altitud)< 100){
                contador += 1;
            }

            // if(contador === 9){
            //     alert("Clima optimo");
            // }else if(contador === 6){
            //     alert("Clima Bueno");
            // }else if(contador === 3){
            //     alert("Clima marginal");
            // }
            return contador;
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

                eventoIrSuelo={this.navegarSuelo} 

            />
        );
    }
}


evaluarClima = (props) => {
    //const {Temperatura, Altitud, Precipitacion } = this.state;
    const {Temperatura, Altitud, Precipitacion } = props;

    var contador = 0;

    if(parseInt(Temperatura)>=19 && parseInt(Temperatura)<=24){
        contador += 3;
    }else if((parseInt(Temperatura)>24 && parseInt(Temperatura)<=28)||(parseInt(Temperatura)>=15 && parseInt(Temperatura)<=18)){
        contador += 2;
    }else if(parseInt(Temperatura)>=29){
        contador += 1;
    }

    if(parseInt(Precipitacion)>=700 && parseInt(Precipitacion)<= 850){
        contador += 3;
    }else if((parseInt(Precipitacion)>=500 && parseInt(Precipitacion)<=700)||(parseInt(Precipitacion)>=850 && parseInt(Precipitacion)<=1000)){
        contador += 2;
    }else if(parseInt(Temperatura)<=500 || parseInt(Temperatura)>=1000){
        contador += 1;
    }

    if(parseInt(Altitud)>=200 && parseInt(Altitud)<= 800){
        contador += 3;
    }else if((parseInt(Altitud)>=100 && parseInt(Altitud)<=199)||(parseInt(Altitud)>=801 && parseInt(Altitud)<=1000)){
        contador += 2;
    }else if(parseInt(Altitud)>=0 && parseInt(Altitud)< 100){
        contador += 1;
    }

    if(contador === 9){
        alert("Clima optimo");
    }else if(contador === 6){
        alert("Clima Bueno");
    }else if(contador === 3){
        alert("Clima marginal");
    }
    return contador;
}


export default ContenedorClima;