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

const Suelo = (props) => {


  const {
    eventoTxtSuelo,
    eventoTxtColor,
    eventoTxtPH,
    eventoTxtMOrganica,
    eventoTxtTopografia,
    eventoTxtTextura,
    eventoTxtProfundidad,
    eventoTxtPendiente,
    suelo,
    color,
    ph,
    mOrganica,
    topografia,
    textura,
    eventoIrAgua,
    pendiente,
    profundidad,
    pickerDisplayed,
    pickerValues,
    togglePicker,
    setPickerValue,
    pickerSelection,
  } = props;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
          <View style={styles.center}>
            <View style={styles.body}>
              <ScrollView>
                <View>
                  <View >
                    <Text style={styles.title}>Suelo</Text>
                    <Text style={styles.text}>Ingrese los datos del suelo del sitio.</Text>
                    <Text style={styles.textSubTitle}></Text>
                  </View>
                  <View style={styles.center}>
                    <View style={styles.button2}>
                      <TouchableHighlight onPress={togglePicker} style={[styles.buttonContainer2, styles.colorPickerButton]}>
                        <Text style={styles.buttonText}>{pickerSelection}</Text>
                      </TouchableHighlight>
                    </View>
                    <Modal visible={pickerDisplayed} animationType={"slide"} transparent={true}>
                      <View style={styles.modal}>
                        <Text style={styles.textOpacity}>Elija una ocupación</Text>
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
                    <TextInput
                      keyboardType={"default"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='Color' 
                      onChangeText={eventoTxtColor}
                      value={color}
                    />
                    <TextInput
                      keyboardType={"numeric"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='PH' 
                      onChangeText={eventoTxtPH}
                      value={ph}
                    />
                    <TextInput
                      keyboardType={"default"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='Materia Organica' 
                      onChangeText={eventoTxtMOrganica}
                      value={mOrganica}
                    />
                    <TextInput
                      keyboardType={"default"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='Topografía' 
                      onChangeText={eventoTxtTopografia}
                      value={topografia}
                    />
                    <TextInput
                      keyboardType={"default"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='Textura' 
                      onChangeText={eventoTxtTextura}
                      value={textura}
                    />
                    <TextInput
                      keyboardType={"numeric"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='Profundidad' 
                      onChangeText={eventoTxtProfundidad}
                      value={profundidad}
                    />
                    <TextInput
                      keyboardType={"numeric"}
                      placeholderTextColor="white"
                      autoCapitalize={'words'}
                      style={styles.textInput}
                      placeholder='Pendiente %' 
                      onChangeText={eventoTxtPendiente}
                      value={pendiente}
                    />
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight
                    style={[styles.buttonContainer, styles.logInButton]}
                    onPress={eventoIrAgua}
                  >
                    <Text style={styles.signUpText}>Registrar <Icon name='plus-circle' color="white" size={18}/></Text>
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
  logInButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  signUpText: {
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

export default Suelo;