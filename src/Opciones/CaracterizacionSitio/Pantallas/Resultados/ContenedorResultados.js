import React, {Component} from 'react';
import ResultadosCaracterizacion from './ResultadosCaracterizacion';

export default class ContenedorResultados extends Component {
  state = {
    modalVisible: false,
    tableHead: ['Variable', 'Muestreo', 'Req. Necesarios'],
    tableData: [
      ['Temperatura', '2','30°'],
      ['Precipitación', '2','1000mn'],
      ['Humedad', '2','50%'],
      ['Velocidad del viento', '2','40km/h'],
      ['Altitud', '2','800msnm'],
      ['Nivel de radiación', '2','100W/m'],
    ]
  };

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
        />
    );
  }
}
