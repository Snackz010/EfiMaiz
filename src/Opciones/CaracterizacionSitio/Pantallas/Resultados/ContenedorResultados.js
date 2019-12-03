import React, {Component} from 'react';
import ResultadosCaracterizacion from './ResultadosCaracterizacion';

export default class ContenedorResultados extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      tableHead: ['Variable', 'Muestreo', 'Req. Necesarios'],
      tableData: [
        ['Temperatura', '2','30°'],
        ['Precipitación', '2','1000mn'],
        ['Humedad', '2','50%'],
        ['Velocidad del viento', '2','40km/h'],
        ['Altitud', '2','800msnm'],
        ['Nivel de radiación', '2','100W/m'],
      ],
      Parametros:{...this.obtenerParametros()}
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
            TSueloS: navigation.getParam('TSueloS'),
            ColorS:navigation.getParam('ColorS'),
            PHS:navigation.getParam('PHS'),
            MOrganicaS:navigation.getParam('MOrganicas'),
            TopografiaS:navigation.getParam('TopografiaS'),
            TexturaS:navigation.getParam('TexturaS'),
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

  render() {
    const {tableData, tableHead, modalVisible, tableTitle} = this.state
    return (
        <ResultadosCaracterizacion 
          mostrarModal={this.mostrarModal}
          visible={modalVisible}
          changeState={this.changeState}
          tableHead={tableHead}
          tableData={tableData}
          tableTitle={tableTitle}
          mostrarC={this.mostrarPara}
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
        ['Altitud', ADatos.AltitudC,'200 msnm - 800msnm'],
        ['Nivel de radiación', ADatos.NRadiacionC+'W/m','-'],
      ]
    })
  }
}
