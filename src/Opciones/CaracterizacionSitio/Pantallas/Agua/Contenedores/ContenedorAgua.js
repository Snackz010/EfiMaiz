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


    extraerParametros = () => {
        const {navigation} = this.props;
        const Datos = {
            TemperaturaC: navigation.getParam('TemperaturaC'),
            PrecipitacionC: navigation.getParam('PrecipitacionC'),
            VelocidadVC: navigation.getParam('VelocidadVC'),
            HumedadC: navigation.getParam('HumedadC'),
            AltitudC: navigation.getParam('AltitudC'),
            NRadiacionC: navigation.getParam('NRadiacionC'),
            NivelaptoC: navigation.getParam('NivelaptoC'),
            TSueloS: navigation.getParam('TSueloS'),
            ColorS:navigation.getParam('ColorS'),
            PHS:navigation.getParam('PHS'),
            TexturaS:navigation.getParam('TexturaS'),
            ProfundidadS:navigation.getParam('ProfundidadS'),
            PendienteS:navigation.getParam('PendienteS'),
            SueloApto: navigation.getParam('SueloApto')

        }
        console.log('Agua', Datos)
        return Datos;
    }

    irResultados = () => {
        const {navigation} = this.props;
        const { Volumen, Calidad, Fuente } = this.state;

        const ADatos = {
            ...this.extraerParametros(),
            VolumenA:Volumen,
            CalidadA: Calidad,
            FuenteA: Fuente
        }

        navigation.navigate('Resultados',ADatos);        

    }

    render(){
        const {Volumen, Calidad, Fuente} = this.state;
        

        this.extraerParametros();
        
        return(
            <Agua 
                eventoTxtCalidad={this.eventoTxtCalidad}
                estadoCalidad={Calidad}
                eventoTxtFuente={this.eventoTxtFuente}
                estadoFuente={Fuente}
                eventoTxtVolumen={this.eventoTxtVolumen}
                estadoVolumen={Volumen}
                irResultados={this.irResultados}
            />

        );
    }
} 

export default ContenedorAgua;