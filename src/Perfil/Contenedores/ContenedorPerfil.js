import React,{Component} from 'react';
import { AsyncStorage } from 'react-native'
import Perfil from '../Componentes/Perfil';
import firebase from 'react-native-firebase'

export default class ContenedorPerfil extends Component{
  constructor(props){
    super(props);
    this.state={
      Nombre: '',
      Email:'',
      Apellido:'',
      Ocupacion:'',
      Telefono:'',
      Usuario:'',
    }
  }

  LogOut = () => {
    firebase.auth().signOut().then( ()=>{
      //Especificar el redireccionamiento al LogIn
      this.irLogIn();
    });
  }

  irLogIn = () => {
    const { navigation } = this.props;

    navigation.navigate('logSign');
}

  getspecificData = () =>{
    var db = firebase.firestore();
    var produccRef = db.collection('producción').doc(this.state.Email);

    produccRef.get()
    .then ((directorio)=> {
      if (directorio.exists) {
        console.log(directorio.data().Produccion_2019.FRfertilizante.CManzanas)
      }else{
        console.log('El docuento expecificado no existe en la colección')
      }
      
    })
  }

  //Obteniedo datos específicos desde firestore para caragarlos en el componente Perfil
  getDataFirebase = () => {
    
    var db = firebase.firestore(); //Referencia a firestore cloud
    var docRef = db.collection('users').doc(this.state.Email); // refrencia al directorio específico de donde exraigo datos
    docRef.get().then ( (doc) => {
    if(doc.exists){
      this.setState({
        Nombre:doc.data().fNombre,
        Apellido:doc.data().fApellido,
        Telefono:doc.data().fTelefono,
        Ocupacion:doc.data().fOcupacion,
        Usuario:doc.data().fUsuario,
      })
    }else{
      console.log('No existe el documento')
    }
    }).catch (function(error) {
      console.log('Ha surgido el siguiente error: ', error) 
    })
  }

  //Método para obtener el email del usuario para la extracción de los datos
  ObtenerEmail = async () => {
    const emailAsycn = await AsyncStorage.getItem ('DATO');
    return emailAsycn;
    }

  irEditarPerfil = () => {
    const {navigation} = this.props;

    navigation.navigate('EditarPerfil');
  }
  render(){
    const {Email, Nombre, Apellido, Ocupacion, Telefono, Usuario} = this.state;
      return(
          <Perfil
          correodb = {Email}
          nombredb = {Nombre}
          apellidodb = {Apellido}
          ocupaciondb = {Ocupacion}
          telefonodb = {Telefono}
          usuariodb= {Usuario}
          irEditarPerfil={this.irEditarPerfil}
          LogOut = {this.LogOut}
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
      this.getDataFirebase();
    }
    this.getspecificData();
  }
}