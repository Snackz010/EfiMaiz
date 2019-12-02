import React, {Component} from 'react';
import ResultadosCaracterizacion from './ResultadosCaracterizacion';

export default class ContenedorResultados extends Component {
  state = {
    modalVisible: false,
    tableHead: ['Variable', 'Muestreo', 'Req. Necesarios'],
    tableData: [
      ['Temperatura', '2','3'],
      ['Temperatura', '2','3'],
      ['Temperatura', '2','3'],
      ['Temperatura', '2','3'],
      ['Temperatura', '2','3'],
      ['Temperatura', '2','3'],
      ['Temperatura', '2','3'],
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
