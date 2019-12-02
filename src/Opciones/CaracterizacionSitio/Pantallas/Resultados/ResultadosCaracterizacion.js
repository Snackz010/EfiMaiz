import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  Modal,
} from 'react-native';
import { Table, Row, Rows,TableWrapper, Col } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const ResultadoCaracterizacion = (props) => {
    const {
      mostrarModal, 
      visible, 
      changeState,
      tableHead,
      tableData,
      tableTitle
    } = props;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
          <View style={styles.center}>
            <View style={styles.body}>
              <View>
                <Text style={styles.title}>
                  Resultados de la Caracterizacion de sitio
                </Text>
                <View>
                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={visible}
                  >
                    <View style={styles.center}>
                      <View style={styles.modalContainer}>
                        <Text style={styles.title}>Resultados del Análisis del Clima</Text>
                        <View style={styles.container}>
                          <Table borderStyle={{borderWidth: 1}}>
                            <Row data={tableHead} flexArr={[1,,2]} style={styles.head} textStyle={styles.text}/>
                            <TableWrapper style={styles.wrapper}>
                              <Col data={tableTitle} style={styles.tableTitle} heightArr={[28,28]} textStyle={styles.text}/>
                              <Rows data={tableData} flexArr={[1,2,3]} style={styles.row} textStyle={styles.text}/>
                            </TableWrapper>
                          </Table>
                        </View>
                        <View style={styles.button}>
                          <TouchableHighlight
                            style={[styles.buttonContainer, styles.actionButton]}
                            onPress={changeState}
                          >
                            <Text style={styles.buttonText}>Ok</Text>
                          </TouchableHighlight>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
                <TouchableHighlight onPress={mostrarModal} style={[styles.buttonContainer2, styles.actionButton2]}>
                  <Text style={styles.buttonText2}>Análisis del clima: Apto<Icon name='check' color="green" size={18}/></Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer2, styles.actionButton2]}>
                  <Text style={styles.buttonText2}>Análisis del suelo: Apto<Icon name='check' color="green" size={18}/></Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer2, styles.actionButton2]}>
                  <Text style={styles.buttonText2}>Análisis del agua: Apto<Icon name='check' color="green" size={18}/></Text>
                </TouchableHighlight>
              </View>
              <View style={styles.button}>
                <TouchableHighlight style={[styles.buttonContainer, styles.actionButton]}>
                  <Text style={styles.buttonText}>Ir a Inicio</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
      </>
    );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    borderRadius:20,
  },
  buttonContainer2: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:80,
    borderRadius:10,
    marginRight: 20,
    marginLeft: 20,
    marginTop:20
  },
  actionButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  actionButton2: {
    backgroundColor: '#d8fde2',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    fontSize: 16,
  },
  textContent: {
    fontSize: 16, 
    textAlign: 'center',
  },
  textSubTitle2: {
    fontSize: 18,
    textAlign: 'justify',
    textAlign: 'center',
    marginTop: 5
  },
  button: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10
  },
  body: {
    width: '100%',
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    backgroundColor: '#d8fde2',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    height: 80,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexContent:{
    display: 'flex'
  },
  flexItem: {
    flex: 1
  },
  modalContainer: {
    marginTop: 20
  },
  titleModal: {
    fontSize: 16,
    textAlign: 'center'
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  tableTitle: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

export default ResultadoCaracterizacion;