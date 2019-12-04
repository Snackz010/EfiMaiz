import React, {Component} from 'react';
import ResultadosCaracterizacion from './ResultadosCaracterizacion';

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
      NivelSuelo:''
    };
    
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
      ProfundidadS:navigation.getParam('ProfundidadS'),
      PendienteS:navigation.getParam('PendienteS'),
      TexturaS:navigation.getParam('TexturaS'),
      SueloApto:navigation.getParam('SueloApto'),
      VolumenA:navigation.getParam('VolumenA'),
      FuenteA:navigation.getParam('FuenteA'),
      CalidadA:navigation.getParam('CalidadA'),
    }
    //console.log(ADatos)

    return ADatos;
  }
 
  mostrarPara = ()=>{
    console.log(this.state.Parametros)
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
      NivelSuelo} = this.state
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

          mostrarC={this.mostrarPara}
          nivelClima = {NivelClima}
          nivelSuelo = {NivelSuelo}
          
        />
    );
  }

  componentDidMount(){
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
        ['Tipo suelo', ADatos.TSueloS,'Franco'],
        ['Color', ADatos.ColorS,'-'],
        ['Textura', ADatos.TexturaS,'-'],
        ['PH', ADatos.PHS,'6.5 - 7.0'],
        ['Profundidad', ADatos.ProfundidadS+' cm','< 60 cm'],
        ['Pendiente', ADatos.PendienteS+' %','15%'],
      ],
      tableData3: [
        ['Volumen', ADatos.VolumenA+'gl/mz','- gl/mz'],
        ['Calidad', ADatos.CalidadA,'Buena'],
        ['Fuente', ADatos.FuenteA,'-'],
      ],
      NivelClima:ADatos.NivelaptoC,
      NivelSuelo:ADatos.SueloApto
    })
  }
}
