import React,{Component} from 'react';
import {Alert, AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';
import Germinacion from '../../Componentes/Germinacion/Germinacion';
import {NavigationActions, StackActions } from 'react-navigation';

class ContenedorGerminacion extends Component {
  constructor(props){
    super(props);
    this.state = {
      grupo1:'',
      grupo2:'',
      grupo3:'',
      grupo4: '',
      promedio:'',
      Email:''
    }
  }

  //Método para obtener el email del usuario para la extracción de los datos
  ObtenerEmail = async () => {
    const emailAsycn = await AsyncStorage.getItem ('DATO');
    return emailAsycn;
    }
  
  GuardarResultGerm = () =>{
    const {promedio, grupo1, grupo2, grupo3, grupo4} = this.state;

    if(grupo1 !== '' && grupo2 !== '' && grupo3 !== '' && grupo4 !== ''){
      const db = firebase.firestore();
      const ResultGerminacion = db.collection("producción").doc(this.state.Email);
      var nuevoObjeto={};
    
      const anioProduccion = new Date().getFullYear(); //Obteniendo el año actual
      nuevoObjeto['Produccion_'+anioProduccion] = {
        FRgerminacion:{
          PromedioGermi:promedio
        }
      }
      ResultGerminacion.set(
          {
            ...nuevoObjeto
          },
          {
            merge: true
          }).then( () => {
            Alert.alert('Éxito','Los datos se han almacenado')
            this.irInicio();
          console.log("Resultados de Germinación han almacenados");
        });
      }else{
        Alert.alert('Advertencia','Debes llenar todos los campos')
      }
    }
  
    
  validadarProm = () => {
    const {promedio} = this.state;
    if(promedio !== ''){
      return true;
    }
  }

  validarCampos=() => {
    const { grupo1, grupo2, grupo3, grupo4 } = this.state;

    if(grupo1 !== '' && grupo2 !== '' && grupo3 !== '' && grupo4 !== ''){
      return true
    }else{
      return false;
    }
  }
  
  irInicio = () =>{
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'inicio' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
    
      handleCantidadManzana = (value)=> {
        this.setState({
          cantidadManzana: value
        });
      }
  

  eventoTxtGrupo1 = (grupoValue)=> {
    if(!this.validarDatos(grupoValue)){
      this.setState({
        grupo1: grupoValue
      });
    }
  }

  eventoTxtGrupo2 = (grupoValue)=> {
    if(!this.validarDatos(grupoValue)){
      this.setState({
        grupo2: grupoValue
      });
    }
  }

  eventoTxtGrupo3 = (grupoValue)=> {
    if(!this.validarDatos(grupoValue)){
      this.setState({
        grupo3: grupoValue
      });
    }
  }

  eventoTxtGrupo4 = (grupoValue)=> {
    if(!this.validarDatos(grupoValue)){
      this.setState({
        grupo4: grupoValue
      });
    }
    
  }

  calcularPromedio = (g1,g2,g3,g4) => {
    if(g1==='' || g2==='' || g3==='' || g4===''){
      Alert.alert('Advertencia','¡Debes llenar todos lo campos!');
    }
    else{
      const prom = ((parseInt(g1)+parseInt(g2)+parseInt(g3)+parseInt(g4))/4);
      this.setState({
        promedio: prom
      });
    }
  }

  validarDatos = (value) => {
    if(value >100 || value < 0){
      Alert.alert('Advertencia', 'Debe introducir valores entre 0 y 100 Unidades');
      return true;
    }else{
      return false;
    }
  }

  obtenerAnioActual = ()=>{
    const anio = new Date().getFullYear()-1;

    var Producciones ={}

    Producciones['_'+anio] = {
        AVGSemillas:this.state.promedio
    }
    
    console.log(Producciones._2019.AVGSemillas);

  }

  render(){

    const {grupo1,grupo2,grupo3,grupo4,promedio} = this.state;

    return(
      <Germinacion 
        grupo1={grupo1}
        grupo2={grupo2}
        grupo3={grupo3}
        grupo4={grupo4}
        eventoTxtGrupo1={this.eventoTxtGrupo1}
        eventoTxtGrupo2={this.eventoTxtGrupo2}
        eventoTxtGrupo3={this.eventoTxtGrupo3}
        eventoTxtGrupo4={this.eventoTxtGrupo4}
        promedio={promedio}
        calcularPromedio={this.calcularPromedio}
        anioActual ={this.obtenerAnioActual}
        guardarResultados = {this.GuardarResultGerm}
      />
    );
  }

  async componentDidMount (){
    const datos = await this.ObtenerEmail();
    console.log(datos);
    if (datos !== null) {
      const emailStorage = JSON.parse(datos);
      this.setState({
        Email: emailStorage,
      })
    }
  }

}
export default ContenedorGerminacion;