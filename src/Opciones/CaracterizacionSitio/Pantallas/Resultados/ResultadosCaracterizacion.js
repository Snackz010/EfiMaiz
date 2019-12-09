import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  Modal,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import ContenedorResultados from './ContenedorResultados';

var nivelClimaValue;
var nivelSueloValue;
var mostrarModl;
var mostrarModl2;
const ResultadoCaracterizacion = (props) => {
    const {
      mostrarModal, 
      visible, 
      changeState,
      tableHead,
      tableData,
      mostrarModal2, 
      visible2, 
      changeState2,
      tableHead2,
      tableData2,
      mostrarModal3, 
      visible3, 
      changeState3,
      tableHead3,
      tableData3,
      guardarResultados,
      nivelClima,
      nivelSuelo,
      semillas
    } = props;
    nivelClimaValue = nivelClima;
    mostrarModl = mostrarModal;
    mostrarModl2 = mostrarModal2;
    nivelSueloValue = nivelSuelo
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
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
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                          <Rows data={tableData} textStyle={styles.text}/>
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
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={visible2}
                >
                  <View style={styles.center}>
                    <View style={styles.modalContainer}>
                      <Text style={styles.title}>Resultados del Análisis del Suelo</Text>
                      <View style={styles.container}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                          <Row data={tableHead2} style={styles.head} textStyle={styles.text}/>
                          <Rows data={tableData2} textStyle={styles.text}/>
                        </Table>
                      </View>
                      <View style={styles.button}>
                        <TouchableHighlight
                          style={[styles.buttonContainer, styles.actionButton]}
                          onPress={changeState2}
                        >
                          <Text style={styles.buttonText}>Ok</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </Modal>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={visible3}
                >
                  <View style={styles.center}>
                    <View style={styles.modalContainer}>
                      <Text style={styles.title}>Resultados del Análisis del Agua</Text>
                      <View style={styles.container}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                          <Row data={tableHead3} style={styles.head} textStyle={styles.text}/>
                          <Rows data={tableData3} textStyle={styles.text}/>
                        </Table>
                      </View>
                      <View style={styles.button}>
                        <TouchableHighlight
                          style={[styles.buttonContainer, styles.actionButton]}
                          onPress={changeState3}
                        >
                          <Text style={styles.buttonText}>Ok</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </Modal>
              {
                resultadosClima()
              }
              {
                resultadosSuelo()
              }
              <TouchableHighlight onPress={mostrarModal3} style={[styles.buttonContainer2, styles.actionButton2]}>
                <Text style={styles.buttonText2}>Análisis del agua: Apto<Icon name='check' color="green" size={18}/></Text>
              </TouchableHighlight>
              </View>
              <View style={styles.center}>
              <View style={styles.box}>
                <Text style={styles.text2}>Segun la zona el tipo de semilla que se recomienda es:</Text>
                <Text style={styles.title2}>{semillas}</Text>
              </View>
              </View>

            </View>
            <View style={styles.button}>
              <TouchableHighlight style={[styles.buttonContainer, styles.actionButton]}
                onPress={guardarResultados}
              >
                <Text style={styles.buttonText}>Ir a Inicio <Icon name='home' color="white" size={18}/></Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </>
    );
};

resultadosClima = () => {
  if(nivelClimaValue==='Optimo'){
    return(
      <TouchableHighlight onPress={mostrarModl} style={[styles.buttonContainer2, styles.actionButton2]}>
        <Text style={styles.buttonText2}>Análisis del clima: {nivelClimaValue}<Icon name='check' color="green" size={18}/></Text>
      </TouchableHighlight>
    );
  }else if(nivelClimaValue==='Bueno'){
    return(
      <TouchableHighlight onPress={mostrarModl} style={[styles.buttonContainer2, styles.actionButton3]}>
        <Text style={styles.buttonText2}>Análisis del clima: {nivelClimaValue}<Icon name='check' color="green" size={18}/></Text>
      </TouchableHighlight>
    );
  }else if(nivelClimaValue==='Marginal'){
    return(
      <TouchableHighlight onPress={mostrarModl} style={[styles.buttonContainer2, styles.actionButton4]}>
        <Text style={styles.buttonText2}>Análisis del clima: {nivelClimaValue}<Icon name='check' color="green" size={18}/></Text>
      </TouchableHighlight>
    );
  }
}

resultadosSuelo = () => {
  if(nivelSueloValue === 'Optimo'){
    return(
      <TouchableHighlight onPress={mostrarModl2} style={[styles.buttonContainer2, styles.actionButton2]}>
        <Text style={styles.buttonText2}>Análisis del suelo: {nivelSueloValue}<Icon name='check' color="green" size={18}/></Text>
      </TouchableHighlight>
    );
  }else if(nivelSueloValue === 'Bueno'){
    return(
      <TouchableHighlight onPress={mostrarModl2} style={[styles.buttonContainer2, styles.actionButton3]}>
        <Text style={styles.buttonText2}>Análisis del suelo: {nivelSueloValue}<Icon name='check' color="green" size={18}/></Text>
      </TouchableHighlight>
    );
  }else if(nivelSueloValue === 'Marginal'){
    return(
      <TouchableHighlight onPress={mostrarModl2} style={[styles.buttonContainer2, styles.actionButton4]}>
        <Text style={styles.buttonText2}>Análisis del suelo: {nivelSueloValue}<Icon name='check' color="green" size={18}/></Text>
      </TouchableHighlight>
    );
  }
}

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
  actionButton3:{
    backgroundColor:'#e1aa1e'
  },
  actionButton4:{
    backgroundColor:'#d02328'
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
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: { 
    margin: 6
  },
  text2: {
    fontSize: 16, 
    textAlign: 'center',
  },
  box:{
    backgroundColor: 'lightgreen',
    height: 200,
    width: 370,
    borderRadius: 10,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title2: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    color: 'darkgreen'
  },
});

export default ResultadoCaracterizacion;