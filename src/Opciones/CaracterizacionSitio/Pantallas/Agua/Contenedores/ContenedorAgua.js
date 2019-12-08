import React,{Component} from 'react';

import Agua from '../Componentes/Agua';


class ContenedorAgua extends Component{

    constructor(props){

        super(props);

        this.state = {
            Volumen:'',
            Calidad:'',
            Fuente:'',
            pickerSelection: 'Calidad del agua',
            pickerDisplayed: false,
            pickerSelection2: 'Fuente',
            pickerDisplayed2: false,
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

    togglePicker = () => {
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed
        })
    }

    setPickerValue = (newValue) =>{
        this.setState({
            pickerSelection: newValue
        })
        this.togglePicker();
    }

    togglePicker2 = () => {
        this.setState({
            pickerDisplayed2: !this.state.pickerDisplayed2
        })
    }

    setPickerValue2 = (newValue) =>{
        this.setState({
            pickerSelection2: newValue
        })
        this.togglePicker2();
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
            SueloApto: navigation.getParam('SueloApto')

        }
        console.log('Agua', Datos)
        return Datos;
    }

    irResultados = () => {
        const {navigation} = this.props;
        const { pickerSelection, Volumen, pickerSelection2 } = this.state;

        const ADatos = {
            ...this.extraerParametros(),
            VolumenA:Volumen,
            CalidadA: pickerSelection,
            FuenteA: pickerSelection2
        }

        navigation.navigate('Resultados',ADatos);        

    }

    render(){
        const pickerValues = [
            {
                title: 'Excelente',
                value: 'Excelente'
            },
            {
                title: 'Aceptable',
                value: 'Aceptable'
            },
            {
                title: 'Mala',
                value: 'Mala'
            },
        ]

        const pickerValues2 = [
            {
                title: 'Rio',
                value: 'Rio'
            },
            {
                title: 'Lago',
                value: 'Lago'
            },
            {
                title: 'Pozo',
                value: 'Pozo'
            },
            {
                title: 'Agua Pluvial',
                value: 'Agua Pluvial'
            },
        ]

        const {Volumen, Calidad, Fuente, pickerSelection, pickerDisplayed, pickerSelection2, pickerDisplayed2} = this.state;

        this.extraerParametros();
        
        return(
            <Agua
                pickerDisplayed={pickerDisplayed}
                pickerValues={pickerValues}
                togglePicker={this.togglePicker}
                setPickerValue={this.setPickerValue}
                pickerSelection={pickerSelection}

                pickerDisplayed2={pickerDisplayed2}
                pickerValues2={pickerValues2}
                togglePicker2={this.togglePicker2}
                setPickerValue2={this.setPickerValue2}
                pickerSelection2={pickerSelection2}

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