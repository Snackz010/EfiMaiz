import React, {Component} from 'react';
import ResultadosCaracterizacion from './ResultadosCaracterizacion';

export default class ContenedorResultados extends Component {
  state = {
    modalVisible: false,
    tableHead: ['Variable', 'Muestreo', 'Requerimientos'],
    tableTitle: ['Title', 'Title2', 'Title3'],
    tableData: [
      ['1', '2'],
      ['a', 'b'],
      ['1', '2'],
      ['1', '2'],
      ['a', 'b'],
      ['1', '2'],
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
