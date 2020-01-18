import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const ControlPlaga = (props) => {

  const {
    pickerDisplayed,
    pickerValues,
    togglePicker,
    setPickerValue,
    pickerSelection,
    handleCantidadDecision,
    cantidadDecision,
    textInput,
    texto,
    tratamiento,
    navegarMuestreo,
    guardarIncidenciaPlaga
  } = props;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <View style={styles.center}>
        <View style={styles.body}>
          <ScrollView>
            <View>
              <View >
                <Text style={styles.title}>Control de  Plagas</Text>
                <View style={styles.padding}>
                  <Text style={styles.text2}>Selecione una plaga e introduzca el muestreo correspondiente para determinar si es necesario aplicar un control. En la parte inferior se sugiere un método químico de control.</Text>
                </View>
              </View>
              <View style={styles.center}>
                <View style={styles.button2}>
                  <TouchableHighlight onPress={togglePicker} style={[styles.buttonContainer2, styles.colorPickerButton]}>
                    <Text style={styles.buttonText}>{pickerSelection}</Text>
                  </TouchableHighlight>
                </View>
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder={textInput}
                  onChangeText={handleCantidadDecision}
                  value={cantidadDecision}
                />
                <Modal visible={pickerDisplayed} animationType={"slide"} transparent={true}>
                  <View style={styles.modal}>
                    <Text style={styles.textOpacity}>Selecione la calidad del suelo</Text>
                    <View style={styles.alignModal}>
                      { pickerValues.map((value, index) => {
                        return <TouchableHighlight key={index} onPress={() => {setPickerValue(value.value, value.textDecision, value.decision, value.tratamiento, value.mMuestreo)}} style={styles.itemText}>
                                  <Text>{ value.title }</Text>
                                </TouchableHighlight>
                      })}
                    </View>
                    <TouchableHighlight onPress={togglePicker} style={styles.buttonCancel}>
                      <Text style={styles.textOpacity}>Cancelar</Text>
                    </TouchableHighlight>
                  </View>
                </Modal>
                <View styles={styles.button}>
                  <TouchableHighlight onPress={navegarMuestreo} style={[styles.buttonContainer, styles.calcButton]}>
                    <Text>Ver método de muestreo</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box}>
                  <Text style={styles.text}>Nivel de decisión</Text>
                  <Text style={styles.title2}>{texto}</Text>
                  <Text style={styles.text}>{tratamiento}</Text>
                </View>
              </View>
              <View style={styles.button}>
                <TouchableHighlight 
                  style={[styles.buttonContainer, styles.calcButton]}
                  onPress = {guardarIncidenciaPlaga}
                >
                  <Text style={styles.signUpText}>Registrar<Icon name='plus-circle' color="white" size={18}/></Text>
                </TouchableHighlight>
            </View>
            </View>
          </ScrollView>
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
    width:350,
    borderRadius:20,
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 16, 
    textAlign: 'center',
  },
  text2: {
    fontSize: 16, 
    textAlign: 'justify',
  },
  textContainer: {
    fontSize: 12, 
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubTitle: {
    fontSize: 24,
    marginTop: 10,
    textAlign: 'justify', 
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  title2: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    color: 'darkgreen'
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
  button2: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer2: {
    height:75,
    display:'flex',
    justifyContent: 'center',
    padding: 10,
    width:350,
    borderRadius:10,
  },
  colorPickerButton: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modal: {
    margin: 20,
    padding: 20,
    backgroundColor: '#efefef',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute'
  },
  textOpacity: {
    color: '#999' 
  },
  itemText: { 
    paddingTop: 4,
    paddingBottom: 4,
  },
  buttonCancel: {
    paddingTop: 4, 
    paddingBottom: 4 
  },
  box:{
    backgroundColor: 'lightgreen',
    height: 390,
    width: 350,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 40,
    color: 'white',
    width: 350,
    textAlign: 'left'
  },
  padding:{
    padding: 15
  },
  alignModal: {
    textAlign: 'left'
  },
  calcButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  button: {
    marginTop: 40,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ControlPlaga;