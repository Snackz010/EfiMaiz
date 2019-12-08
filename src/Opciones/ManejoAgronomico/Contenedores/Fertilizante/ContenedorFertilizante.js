import React,{Component} from 'react';
import {Alert, AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';
import Fertilizante from '../../Componentes/Fertilizante/Fertilizante';
import {NavigationActions, StackActions } from 'react-navigation';

class ContenedorFertilizante extends Component {
  constructor(props){
    super(props);
    this.state = {
      cantidadManzana: '',
      cantidadSurco: '',
      plantasSurco: '',
      fertilizante: '', 
      Email:''
    }
  }

  //Método para obtener el email del usuario para la extracción de los datos
  ObtenerEmail = async () => {
    const emailAsycn = await AsyncStorage.getItem ('DATO');
    return emailAsycn;
    }

  GuardarResultFert = () =>{
  const {cantidadManzana, fertilizante} = this.state;
  const db = firebase.firestore();
  const ResultFertilizante = db.collection("producción").doc(this.state.Email);
  
  var nuevoObjeto={};

  const anioProduccion = new Date().getFullYear(); //Obteniendo el año actual
  nuevoObjeto['Produccion_'+anioProduccion] = {
    FRfertilizante:{
      CManzanas:cantidadManzana,
      CantidaFertilizante:fertilizante
    }
  }
  ResultFertilizante.set(
      {
        ...nuevoObjeto
      },
      {
        merge: true
      }).then( () => {
        Alert.alert('Éxito','Los datos se han registrado')
        this.irInicio();
      console.log("Resultados de fertilizante almacenados");
    });

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

  handleCantidadSurco = (value)=> {
    this.setState({
      cantidadSurco: value
    });
  }

  handlePlantasSurco = (value)=> {
    this.setState({
      plantasSurco: value
    });
  }

  calcularFertilizante = () => {
    const { cantidadManzana, cantidadSurco, plantasSurco } = this.state;
    console.log(cantidadManzana, cantidadSurco, plantasSurco)
    if(cantidadManzana=='' || cantidadSurco=='' || plantasSurco==''){
        Alert.alert('Advertencia','¡Debes llenar todos lo campos!');
    }else{
      const cantidadFertilizante = ((parseInt(cantidadManzana)+parseInt(cantidadSurco)+parseInt(plantasSurco)))+'gr';
      this.setState({
        fertilizante: cantidadFertilizante
      });
    }
  }

  render(){

    const {cantidadManzana, cantidadSurco, plantasSurco, fertilizante} = this.state;

    return(
      <Fertilizante
        cantidadManzana={cantidadManzana}
        cantidadSurco={cantidadSurco}
        plantasSurco={plantasSurco}
        handleCantidadManzana={this.handleCantidadManzana}
        handleCantidadSurco={this.handleCantidadSurco}
        handlePlantasSurco={this.handlePlantasSurco}
        fertilizante={fertilizante}
        calcularFertilizante={this.calcularFertilizante}
        guardarResultados={this.GuardarResultFert}
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
  }
}
export default ContenedorFertilizante;