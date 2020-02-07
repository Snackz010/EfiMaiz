import React, {Component} from 'react';
import Resultados from './Resultados';
import {Alert, AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase'
import {StackActions, NavigationActions} from 'react-navigation';

export default class ContenedorResultados extends Component {
  constructor(props){
    super(props);
    this.state = {
      manzanas: '',
      quintalesSembrados: '',
      inversionQuintales: '',
      quintalesCosechados: '',
      ventaAproximada: '',
      gananciaAproximada: '',
      resultado: '',
      Email:''
    };
  }

  guardarResultEcoProd = () =>{
    const { inversionQuintales,ventaAproximada,gananciaAproximada,resultado } = this.state;
    var db = firebase.firestore();
    const ResultEcoProd = db.collection("producción").doc(this.state.Email);

    var nuevoObjeto={}

    const anioProduccion = new Date().getFullYear(); //Obteniendo el año actual
    nuevoObjeto['Produccion_'+anioProduccion] = {
      EcoProd:{
        ...this.obtenerParametros(),
        inversionQuintales:inversionQuintales,
        ventaAproximada:ventaAproximada,
        gananciaAproximada:gananciaAproximada,
       
      }
    }
    ResultEcoProd.set(
        {
          ...nuevoObjeto
        },
        {
          merge: true
        }).then( () => {
          Alert.alert('Éxito','Los datos se han almacenado')
          this.irInicio();
        console.log("Resultados se han almacenados");
      });
    }
    irInicio = () =>{
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'inicio' })],
      });
      this.props.navigation.dispatch(resetAction);
    }

    //Método para obtener el email del usuario para la extracción de los datos
    ObtenerEmail = async () => {
      const emailAsycn = await AsyncStorage.getItem ('DATO');
      return emailAsycn;
      }

  obtenerParametros = () => {
    return this.props.navigation.state.params;
  }
  calcularVenta = () => {
    const Param = this.obtenerParametros();
    return parseInt(Param.numQuintalesCosechados * Param.precioActual);
  }

  calcularInversion = () => {
    const Param = this.obtenerParametros();
    return (Param.numQuintalesSembrados * Param.precioQuintalesSembrados);
  }

  determinarResultados = () => {
    const Param = this.obtenerParametros();
    const ganancia = Param.numQuintalesSembrados * Param.precioQuintalesSembrados;
    const inversion = Param.numQuintalesSembrados * Param.precioQuintalesSembrados;
    var valor;

    if(ganancia > inversion){
      valor = 'Ganancia';
    }else if(ganancia < inversion){
      valor = 'Perdida'
    }else{
      valor = 'Inversión recuperada';
    }
    return valor;
  }

  calcularDatos = () => {
    const Param = this.obtenerParametros();
    this.setState({
      manzanas:Param.numManzanas,
      quintalesSembrados:Param.numQuintalesSembrados,
      inversionQuintales:this.calcularInversion(),
      quintalesCosechados:Param.numQuintalesCosechados,

      ventaAproximada:this.calcularVenta(),
      gananciaAproximada:(this.calcularVenta() - this.calcularInversion()),
      resultado:this.determinarResultados()


    });
  }

  render() {
    const {
      manzanas,
      quintalesSembrados,
      inversionQuintales,
      quintalesCosechados,
      ventaAproximada,
      gananciaAproximada,
      resultado,
    } = this.state;
    return (
        <Resultados
        manzanas={manzanas}
        quintalesSembrados={quintalesSembrados}
        inversionQuintales={inversionQuintales}
        quintalesCosechados={quintalesCosechados}
        ventaAproximada={ventaAproximada}
        gananciaAproximada={gananciaAproximada}
        resultado={resultado}
        guardarDatos={this.guardarResultEcoProd}
        />
    );
  }
 async componentDidMount(){
    const datos = await this.ObtenerEmail();
    console.log(datos);
    if (datos !== null) {
      const emailStorage = JSON.parse(datos);
      this.setState({
        Email: emailStorage,
      })
    }
    this.calcularDatos();
  }
}