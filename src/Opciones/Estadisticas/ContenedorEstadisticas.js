import React,{Component} from 'react';
import Estadisticas from './Estadisticas';
import { AsyncStorage } from 'react-native'
import firebase from 'react-native-firebase';

class ContenedorEstadisticas extends Component {
  constructor(props){
    super(props);
    this.state = {
      Email:'',
      DatosProgresBar:[]
    }
  }

  getspecificData = () =>{

    const {DatosProgresBar} = this.state;

    var db = firebase.firestore();
    var produccRef = db.collection('producción').doc(this.state.Email);

    produccRef.get()
    .then ((directorio)=> {
      if (directorio.exists) {
        DatosProgresBar.push(parseInt(directorio.data().Produccion_20+'20'.FRfertilizante.CManzanas))
        this.setState({
          DatosProgresBar:DatosProgresBar
        })
      }else{
        console.log('El documento expecificado no existe en la colección')
      }
      console.log(this.state.DatosProgresBar)
    })
  }

  ObtenerEmail = async () => {
    const emailAsycn = await AsyncStorage.getItem ('DATO');
    return emailAsycn;
  }

  render(){
    return(
      <Estadisticas/>
    );
  }

  async componentDidMount(){
    const datos = await this.ObtenerEmail();
    if (datos !== null) {
      const emailStorage = JSON.parse(datos);
      this.setState({
        Email: emailStorage,
      })
    }
    this.getspecificData();
  }




}
export default ContenedorEstadisticas;