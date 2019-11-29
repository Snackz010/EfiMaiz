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



    extraerParametros = () => {
        const { navigation } = this.props;
        const Data = {
            TemperaturaC: navigation.getParam('TemperaturaC'),
            PrecipitacionC: navigation.getParam('PrecipitacionC'),
            VelocidadVC: navigation.getParam('VelocidadVC'),
            HumedadC: navigation.getParam('HumedadC'),
            AltitudC: navigation.getParam('AltitudC'),
            NRadiacionC: navigation.getParam('NRadiacionC'),
        }
        return {...Data};
    }

    navegarAgua = () => {
        const { TSuelo, Color, PH, MOrganica,Topografia,Textura } = this.state;
        const {navigation} = this.props;

        const ADatos = {
            ...this.extraerParametros(),
            TSueloS: TSuelo,
            ColorS:Color,
            PHS:PH,
            MOrganicaS:MOrganica,
            TopografiaS:Topografia,
            TexturaS:Textura
        }
        
        navigation.navigate('Agua',{...ADatos});

    } 

    //Funcion para hacer evaluacion del suelo

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
            eventoIrAgua={this.navegarAgua}
            />
        );
    }
}

export default ContenedorSuelo;