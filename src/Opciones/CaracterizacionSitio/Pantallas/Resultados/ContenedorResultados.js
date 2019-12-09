import React, {Component} from 'react';
import { AsyncStorage } from 'react-native'
import firebase from 'react-native-firebase'
import ResultadosCaracterizacion from './ResultadosCaracterizacion';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ContenedorResultados extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      tableHead: ['Variable', 'Muestreo', 'Req. Optimos'],
      tableData: [
        ['Temperatura', '2','30°'],
        ['Precipitación', '2','1000mn'],
        ['Humedad', '2','50%'],
        ['Velocidad del viento', '2','40km/h'],
        ['Altitud', '2','800msnm'],
        ['Nivel de radiación', '2','100W/m'],
      ],
      modalVisible2: false,
      tableHead2: ['Variable', 'Muestreo', 'Req. Optimos'],
      tableData2: [
        ['Tipo suelo', 'Arenoso','Arenoso'],
        ['Color', 'Rojo','Negro'],
        ['Textura', 'Limoso','Limoso'],
        ['PH', '7','7'],
        ['Profundidad', '100 cm','100 cm'],
        ['Pendiente', '20%','20%'],
      ],
      modalVisible3: false,
      tableHead3: ['Variable', 'Muestreo', 'Req. Necesarios'],
      tableData3: [
        ['Volumen', '1000gl/mz','1000gl/mz'],
        ['Calidad', 'Buena','Buena'],
        ['Fuente', 'Rio','Lago'],
      ],
      Parametros:{...this.obtenerParametros()},
      NivelClima:'',
      NivelSuelo:'',
      Email:'',
      semillas:[],
      cadenSemillas:''
    };
    
  }

  //Método para obtener el email del usuario para la extracción de los datos
  ObtenerEmail = async () => {
    const emailAsycn = await AsyncStorage.getItem ('DATO');
    return emailAsycn;
    }

  GuardarResultadosCSitio = () =>{

  const db = firebase.firestore();
  const ResultadosCSRef = db.collection("producción").doc(this.state.Email);
  
  var nuevoObjeto={};
  const anioProduccion = new Date().getFullYear();
  nuevoObjeto['Produccion_'+anioProduccion] = {
    fResultadosCS:{...this.obtenerParametros()}
  }
  ResultadosCSRef.set(
      {
        ...nuevoObjeto
      },
      {
        merge: true
      }).then( () => {
        this.irInicio();
      console.log("Resultados creados");
    });
  
  }
  
  presentar = () => {
    var nuevoObjeto={};
    const anioProduccion = new Date().getFullYear();
    nuevoObjeto['Produccion_'+anioProduccion] = {
      fResultadosCS:{...this.obtenerParametros()}
    }
    //console.log(nuevoObjeto);
  }

  obtenerParametros=() => {
    const {navigation} = this.props;
    const ADatos = {
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
      SueloApto:navigation.getParam('SueloApto'),
      VolumenA:navigation.getParam('VolumenA'),
      FuenteA:navigation.getParam('FuenteA'),
      CalidadA:navigation.getParam('CalidadA'),
    }
    //console.log(ADatos)

    return ADatos;
  }
 

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  mostrarModal = () => {
    this.setModalVisible(true);
  }

  changeState = () => {
    this.setModalVisible(!this.state.modalVisible);
  }

  setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
  }

  mostrarModal2 = () => {
    this.setModalVisible2(true);
  }

  changeState2 = () => {
    this.setModalVisible2(!this.state.modalVisible2);
  }

  setModalVisible3(visible) {
    this.setState({modalVisible3: visible});
  }

  mostrarModal3 = () => {
    this.setModalVisible3(true);
  }

  changeState3 = () => {
    this.setModalVisible3(!this.state.modalVisible3);
  }

  irInicio = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'inicio' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  evaluarSemilla = (RSuelo, RClima) => {
    var FBVariedad;
    if(RSuelo === 'Marginal' && RClima === 'Marginal'){
      FBVariedad = 'Criollas';
    }else if(RSuelo === 'Bueno' && RClima === 'Bueno'){
      FBVariedad = 'Hibridos'
    }else if(RSuelo === 'Optimo' && RClima === 'Optimo'){
      FBVariedad = 'Mejoradas'
    }else{
      FBVariedad = 'Criollas'
    }
    return FBVariedad;
  }

  extraerDatosSemillaFireBase = (resultados) => {
    var db = firebase.firestore(); //Referencia a firestore cloud
    var docRef = db.collection('Semillas').doc(resultados); // refrencia al directorio específico de donde exraigo datos
    docRef.get().then ( (doc) => {
    if(doc.exists){
      this.setState({
        semillas: doc.data().Variedad
      })
      console.log(this.state.semillas)
      this.valoresResultadoSemilla();
    }else{
      console.log('No existe el documento')
    }
    }).catch (function(error) {
      console.log('Ha surgido el siguiente error: ', error) 
    })
  }

  valoresResultadoSemilla = () => {
    const {semillas} = this.state;
    var cadena ='';
    
    for (let index = 0; index < semillas.length; index++) {
      if(index+1 === semillas.length){
        cadena += semillas[index]+'.'
      }else{
        cadena += semillas[index]+', '
      }
    }

    this.setState({
      cadenSemillas:cadena
    });
    console.log(cadena);
  }

  render() {
    const {
      tableData,
      tableHead,
      modalVisible,
      tableTitle,
      tableData2,
      tableHead2,
      modalVisible2,
      tableData3,
      tableHead3,
      modalVisible3,
      NivelClima,
      NivelSuelo,
      cadenSemillas
    } = this.state
    return (
        <ResultadosCaracterizacion 
          mostrarModal={this.mostrarModal}
          visible={modalVisible}
          changeState={this.changeState}
          tableHead={tableHead}
          tableData={tableData}
          tableTitle={tableTitle}
          
          mostrarModal2={this.mostrarModal2}
          visible2={modalVisible2}
          changeState2={this.changeState2}
          tableHead2={tableHead2}
          tableData2={tableData2}

          mostrarModal3={this.mostrarModal3}
          visible3={modalVisible3}
          changeState3={this.changeState3}
          tableHead3={tableHead3}
          tableData3={tableData3}

          guardarResultados={this.GuardarResultadosCSitio}
          nivelClima = {NivelClima}
          nivelSuelo = {NivelSuelo}
        
          semillas={cadenSemillas}
        />
    );
  }

  async componentDidMount(){
    const ADatos = {...this.obtenerParametros()};
    this.setState({
      tableData:[
        ['Temperatura', ADatos.TemperaturaC+'°','19° - 24°'],
        ['Precipitación', ADatos.PrecipitacionC+'mn','700mn - 850 mn'],
        ['Humedad', ADatos.HumedadC+'%','-'],
        ['Velocidad del viento', ADatos.VelocidadVC+'K/h','-'],
        ['Altitud', ADatos.AltitudC+'msnm','200 msnm - 800msnm'],
        ['Nivel de radiación', ADatos.NRadiacionC+'W/m','-'],
      ],
      tableData2: [
        ['Tipo suelo', ADatos.TSueloS,'Franco,   Franco-Arenoso,   Arenoso'],
        ['Color', ADatos.ColorS,'-'],
        ['Textura', ADatos.TexturaS,'-'],
        ['PH', ADatos.PHS,'6.5 - 7.0'],
      ],
      tableData3: [
        ['Volumen', ADatos.VolumenA+'gl/mz','- gl/mz'],
        ['Calidad', ADatos.CalidadA,'Buena'],
        ['Fuente', ADatos.FuenteA,'-'],
      ],
      NivelClima:ADatos.NivelaptoC,
      NivelSuelo:ADatos.SueloApto
    })

    //Obteniendo el correo ID par guardar los resultados de caraterización del sito del usuario logueado en ese moment
    const datos = await this.ObtenerEmail();
    //console.log(datos);
    if (datos !== null) {
      const emailStorage = JSON.parse(datos);
      this.setState({
        Email: emailStorage,
      })
      //this.getDataFirebase(); //Enviar resultados de la caracterizaión del sitio al firebase
    }

    this.extraerDatosSemillaFireBase(
      this.evaluarSemilla(ADatos.SueloApto, ADatos.NivelaptoC)
    );
    console.log("Aquí voy");
    
  }

}