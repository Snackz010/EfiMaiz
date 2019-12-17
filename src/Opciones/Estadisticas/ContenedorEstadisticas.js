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
      html:`
      <!DOCTYPE html>
      <html lang="es">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      
      <body>
        <div class=" navbar-fixed">
          <nav class="blue">
            <div class="nav-wrapper">
              <div class="container">
                <a href="#" class="brand-logo center" style="font-size: 18px;">Reporte  del ciclo de producción</a>
              </div>
            </div>
          </nav>
        </div>
      <br>
        <div>
          <div class="row">
              <div class="center col s12 m12 l12 card-panel z-depth-2">
                  <p class="center cyan white-text center" style="font-size: 20px;">Datos del productor</p>
      
                  <div class="center col s4 m4 l4 card-panel">
                    <ul class="collection">
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Nombre:</a><br/>Eliab Jaiver</li>
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Apellido:</a><br/> Selva Cruz</li>
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Teléfono:</a><br/> 87373581</li>
                    </ul>
                  </div>
                  <div class="center col s4 m4 l4 card-panel">
                    <ul class="collection">
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Ocupación:</a><br/> Productor</li>
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Departamento:</a><br/> Chontales</li>
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Correo:</a><br/> eliabjselvacruz51@gmail.com</li>
                    </ul>
                  </div>
                  <div class="center col s4 m4 l4 card-panel">
                    <ul class="collection">
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Nombre de la finca:</a><br/> Los Luareles</li>
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Ubicaccion coordenada X:</a><br/> 121300897</li>
                      <li class="collection-item" style="text-align: left; margin: 0px; padding: 2px; font-size: 12px;"> <a style="color: gray;">Ubicaccion coordenada Y:</a><br/> -798003121</li>
                    </ul>
                  </div>
                  <div class="row">
                    <div class="col s12">
                      <p class="center cyan lighten-2 white-text center" style="font-size: 20px;">Ganancias por año (C$)</p>
                      <div class=" card-panel col s3 teal">
                        <h5 style="font-size: 14px;">2000</h5>
                        <p style="font-size: 12px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 teal lighten-1">
                        <h5 style="font-size: 14px;">2000</h5>
                        <p style="font-size: 12px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 teal lighten-2">
                        <h5 style="font-size: 14px;">2000</h5>
                        <p style="font-size: 12px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 teal lighten-3">
                        <h5 style="font-size: 14px;">2000</h5>
                        <p style="font-size: 12px;">Año 2019</ap>
                      </div>
                    </div>
                    <div class="col s6">
                      <p class="center cyan lighten-2 white-text center" style="font-size: 18px;">Cosecha por año (Quintales)</p>
                      <div class=" card-panel col s3 deep-orange">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 deep-orange lighten-1">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 deep-orange lighten-2">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 deep-orange lighten-3">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                    </div>
                    <div class="col s6">
                      <p class="center cyan lighten-2 white-text center" style="font-size: 18px;">Germinacion de semillas (%)</p>
                      <div class=" card-panel col s3 green lighten-3">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 green lighten-3">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 green lighten-1">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                      <div class=" card-panel col s3 green">
                        <h5 style="font-size: 12px;">2000</h5>
                        <p style="font-size: 10px;">Año 2019</ap>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
        <!--  CDN jQuery -->
        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
        <!-- CDN Materialize JS  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
      </body>
      </html>
      `,
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