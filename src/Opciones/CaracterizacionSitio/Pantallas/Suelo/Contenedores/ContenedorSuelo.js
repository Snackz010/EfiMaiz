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
            Textura:'',
            Profundidad:'',
            Pendiente:''
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

    eventoTxtProfundidad = (value) => {
        this.setState({
            Profundidad:value
        });
    }

    eventoTxtPendiente = (value) => {
        this.setState({
            Pendiente:value
        });
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
        this.evaluarSuelo();
        navigation.navigate('Agua',{...ADatos});

    } 

    //Funcion para hacer evaluacion del suelo

    evaluarSuelo = () => {
        const { TSuelo, PH, Profundidad, Pendiente } = this.state;
        var contador = 0;

        if(TSuelo === 'Franco'){
            contador += 3;
        }else if(TSuelo === 'Francoarenoso'){
            contador += 2;
        }else if(TSuelo === 'Francoarcilloso'){
            contador += 1;
        }

        if(parseFloat(PH) >= 6.5 && parseFloat(PH) <= 7.0){
            contador += 3;
        }else if(parseFloat(PH) >= 6.0 && parseFloat(PH) <= 6.4){
            contador += 2;
        }else if(PH < 6.0){
            contador += 1; 
        }
        
        if(parseInt(Profundidad)>=60){
            contador +=3;
        }else if(parseInt(Profundidad)>40 && parseInt(Profundidad)<60){
            contador += 2;
        }else if(parseInt(Profundidad)>10 && parseInt(Profundidad)<20){
            contador += 1;
        }
      

        if(parseInt(Pendiente)<=15){
            contador += 3;
        }else if(parseInt(Pendiente)>15 && parseInt(Pendiente)<=30){
            contador += 2;
        }else if(parseInt(Pendiente)>30){
            contador += 1;
        }
        //dasddasd
        // if(contador === 12){
        //     alert("Suelo optimo");
        // }else if(contador === 8){
        //     alert("Suelo Bueno");
        // }else if(contador === 4){
        //     alert("Suelo marginal");
        // }
    }

    render(){
        const { TSuelo, Color, PH, MOrganica, Topografia, Textura, Pendiente, Profundidad } = this.state;
        return(
            <Suelo 
            eventoTxtSuelo={this.eventoTxtSuelo}
            eventoTxtColor={this.eventoTxtColor}
            eventoTxtPH={this.eventoTxtPH}
            eventoTxtMOrganica={this.eventoTxtMOrganica}
            eventoTxtTopografia={this.eventoTxtTopografia}
            eventoTxtTextura={this.eventoTxtTextura}
            eventoTxtProfundidad={this.eventoTxtProfundidad}
            eventoTxtPendiente = {this.eventoTxtPendiente}
            suelo={TSuelo} 
            color={Color}
            ph={PH}
            mOrganica={MOrganica}
            topografia={Topografia}
            textura={Textura}
            pendiente={Pendiente}
            profundidad={Profundidad}
            eventoIrAgua={this.navegarAgua}
            />
        );
    }
}

export default ContenedorSuelo;