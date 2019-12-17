import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';


const Agua = (props) => {

  const {
    pickerDisplayed,
    pickerValues,
    togglePicker,
    setPickerValue,
    pickerSelection,
    pickerDisplayed2,
    pickerValues2,
    togglePicker2,
    setPickerValue2,
    pickerSelection2,
    eventoTxtVolumen,
    estadoVolumen,
    irResultados
  } = props;

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
        <View style={styles.center}>
          <View style={styles.body}>
            <ScrollView>
              <View>
                <View >
                  <Text style={styles.title}>Agua</Text>
                  <Text style={styles.text}>Ingrese los datos del agua del sitio.</Text>
                  <Text style={styles.textSubTitle}></Text>
                </View>
                <View style={styles.center}>
                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Volumen (m³)'
                    onChangeText={eventoTxtVolumen}
                    value={estadoVolumen}
                  />

                  <View style={styles.button2}>
                    <TouchableHighlight onPress={togglePicker} style={[styles.buttonContainer2, styles.colorPickerButton]}>
                      <Text style={styles.buttonText}>{pickerSelection}</Text>
                    </TouchableHighlight>
                  </View>
                  <Modal visible={pickerDisplayed} animationType={"slide"} transparent={true}>
                    <View style={styles.modal}>
                      <Text style={styles.textOpacity}>Selecione la calidad del agua</Text>
                      { pickerValues.map((value, index) => {
                        return <TouchableHighlight key={index} onPress={() => setPickerValue(value.value)} style={styles.itemText}>
                                  <Text>{ value.title }</Text>
                                </TouchableHighlight>
                      })}
                      <TouchableHighlight onPress={togglePicker} style={styles.buttonCancel}>
                        <Text style={styles.textOpacity}>Cancelar</Text>
                      </TouchableHighlight>
                    </View>
                  </Modal>

                  <View style={styles.button2}>
                    <TouchableHighlight onPress={togglePicker2} style={[styles.buttonContainer2, styles.colorPickerButton]}>
                      <Text style={styles.buttonText}>{pickerSelection2}</Text>
                    </TouchableHighlight>
                  </View>
                  <Modal visible={pickerDisplayed2} animationType={"slide"} transparent={true}>
                    <View style={styles.modal}>
                      <Text style={styles.textOpacity}>Selecione la fuente del agua</Text>
                      { pickerValues2.map((value, index) => {
                        return <TouchableHighlight key={index} onPress={() => setPickerValue2(value.value)} style={styles.itemText}>
                                  <Text>{ value.title }</Text>
                                </TouchableHighlight>
                      })}
                      <TouchableHighlight onPress={togglePicker2} style={styles.buttonCancel}>
                        <Text style={styles.textOpacity}>Cancelar</Text>
                      </TouchableHighlight>
                    </View>
                  </Modal>
                </View>
              </View>
              <View style={styles.button}>
                <TouchableHighlight style={[styles.buttonContainer, styles.colorButton]}
                  onPress={irResultados}
                >
                  <Text style={styles.textButton}>Registrar <Icon name='plus-circle' color="white" size={18}/></Text>
                </TouchableHighlight>
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
    width:300,
    borderRadius:20,
  },
  colorButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 40,
    color: 'white',
    width: 300,
    textAlign: 'left'
  },
  text: {
    fontSize: 16, 
    textAlign: 'center',
  },
  text2: {
    fontSize: 12, 
    color: '#9ed4a3',
    textAlign: 'center',
  },
  textContainer: {
    fontSize: 12, 
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubTitle: {
    fontSize: 16, 
    textAlign: 'justify', 
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
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
  logo: {
    width: 140,
    height: 125,
    marginTop: 50
  },
  button2: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer2: {
    height:50,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    width:300,
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
    margin: 20, padding: 20,
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
    paddingBottom: 4 
  },
  buttonCancel: {
    paddingTop: 4, 
    paddingBottom: 4 
  },
});

export default Agua;