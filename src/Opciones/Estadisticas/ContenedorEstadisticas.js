import React,{Component} from 'react';
import Estadisticas from './Estadisticas';
import { AsyncStorage,PermissionsAndroid, Alert } from 'react-native'
import firebase from 'react-native-firebase';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

class ContenedorEstadisticas extends Component {
  constructor(props){
    super(props);
    this.state = {
      Email:'',
      DatosProgresBar:{
        labels: ["", "", "", "", ""], // optional
        data: [0, 0, 0, 0, 0],
      },
      DatosLineChart:{
        labels: ["2019", "2018", "2017", "2016",],
        datasets: [
          {
            data: [0 ,0 ,0 ,0]
          }
        ]
      },
      DatosBarChat:{
        labels: ["2019", "2018", "2017", "2016",],
        datasets: [
          {
            data: [0 ,0 ,0 ,0]
          }
        ]
      }
    }
  }

  getFirebaseDocument = () => {
    var db = firebase.firestore();
    var docRef = db.collection("producción").doc(this.state.Email);
    docRef.get().then((doc) => {
      if (doc.exists) {
        this.setDataInState(doc.data()),
        this.setDataInState2(doc.data()),
        this.setDataInState3(doc.data())
          //console.log("Datos del docuemento: ", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No hay documento!");
      }
    }).catch((error) => {
        console.log("Error al obtener el documento:", error);
    });
  }

  setDataInState = (Data) => {
    var year = new Date().getFullYear();
    var NewData = []
    var Labels = []

      for (let index = 0; index < Object.keys(Data).length; index++) {

        Labels.push(JSON.stringify(year));
        NewData.push((Data['Produccion_'+year].FRgerminacion.PromedioGermi)/100)
        year -=1;
        if(NewData.length === 4)
          break;
      }
    this.setState({
      DatosProgresBar:{
        labels:Labels.reverse(),
        data:NewData.reverse()
      }
    });
   
  }

  setDataInState2 = (Data) => {
    var year = new Date().getFullYear();
    var NewData = []
    var Labels = []
    


      for (let index = 0; index < Object.keys(Data).length; index++) {

        Labels.push(JSON.stringify(year));
        NewData.push((Data['Produccion_'+year].EcoProd.gananciaAproximada))
        year -=1;
        if(NewData.length === 4)
          break;
      }

      const ObjetoDatos = {
        labels:Labels.reverse(),
        datasets:[{
          data:NewData.reverse()
        }]
          
        
      }

    this.setState({
      DatosLineChart:ObjetoDatos
    });
  }

  setDataInState3 = (Data) => {
    var year = new Date().getFullYear();
    var NewData = []
    var Labels = []
    


      for (let index = 0; index < Object.keys(Data).length; index++) {

        Labels.push(JSON.stringify(year));
        NewData.push((Data['Produccion_'+year].EcoProd.numQuintalesCosechados))
        year -=1;
        if(NewData.length === 4)
          break;
      }

      const ObjetoDatos = {
        labels:Labels.reverse(),
        datasets:[{
          data:NewData.reverse()
        }]
          
        
      }

    this.setState({
      DatosBarChat:ObjetoDatos
    });
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

    })
  }

  ObtenerEmail = async () => {
    const emailAsycn = await AsyncStorage.getItem ('DATO');
    return emailAsycn;
  }


  generarDocumento = async () =>{
    const anioActual = new Date().getFullYear();
    const options = {
      html:`<strong> aqui va el html, Zorra <strong />`,
      fileName: 'Reporte de produccion '+anioActual,
      directory: 'Reportes_Efimaíz',
    };

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)

    if(granted === PermissionsAndroid.RESULTS.GRANTED){

    const file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    Alert.alert('El documento se guardó en la siguiente ruta: ',file.filePath);
    }
  } 


  render(){
    const {DatosProgresBar, DatosLineChart, DatosBarChat} = this.state;
    return(
      <Estadisticas
        datosProgresBar = {DatosProgresBar}
        datosLineChart = {DatosLineChart}
        datosBarChart = {DatosBarChat}
        generarDoc = {this.generarDocumento}
      />
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
    this.getFirebaseDocument();
    //this.getspecificData();
    
  }




}
export default ContenedorEstadisticas;