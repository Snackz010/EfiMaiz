import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  Picker,
  Modal,
  Alert
} from 'react-native';

var hidde;
const SignUp = (props) => {

    const {
          pickerDisplayed, 
          pickerValues,
          setPickerValue, 
          togglePicker,
          pickerSelection} = props;

    const displayMode = (pickerSelection === 'Productor')?'flex':'none';
    
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
        <ImageBackground source={require('../assets/fondo3.jpg')} style={styles.image}>
          <View style={styles.center}>
            <View style={styles.body}>
              <ScrollView>
                <View>
                  <View style={styles.center}>
                    <Image style={styles.logo} source={require('../assets/logo.png')}/>
                  </View>
                  <View >
                    <Text style={styles.title}>Regitro</Text>
                    <Text style={styles.text}>Ingrese sus datos para registrarse.</Text>
                    <Text style={styles.textSubTitle}></Text>
                  </View>
                  <View style={styles.center}>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Nombre'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Apellido'></TextInput>
                    <TextInput keyboardType={"numeric"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Teléfono'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Correo'></TextInput>
                    <View style={styles.button}>
                      <TouchableHighlight onPress={togglePicker} style={[styles.buttonContainer, styles.logInButton]}>
                        <Text style={styles.signUpText}>{pickerSelection}</Text>
                      </TouchableHighlight>
                    </View>
                    <Modal visible={pickerDisplayed} animationType={"slide"} transparent={true}>
                      <View style={{ margin: 20, padding: 20,
                        backgroundColor: '#efefef',
                        bottom: 20,
                        left: 20,
                        right: 20,
                        alignItems: 'center',
                        position: 'absolute' }}>
                        <Text>Elija una ocupación</Text>
                        { pickerValues.map((value, index) => {
                          return <TouchableHighlight key={index} onPress={() => setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                              <Text>{ value.title }</Text>
                            </TouchableHighlight>
                        })}
                        <TouchableHighlight onPress={togglePicker} style={{ paddingTop: 4, paddingBottom: 4 }}>
                          <Text style={{ color: '#999' }}>Cancelar</Text>
                        </TouchableHighlight>
                      </View>
                    </Modal>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={{...styles.textInput, display:displayMode}} placeholder='Nombre de la Finca'></TextInput>
                    <TextInput keyboardType={"numeric"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={{...styles.textInput, display:displayMode}} placeholder='Coordenadas'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" style={styles.textInput} placeholder='Usuario'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" secureTextEntry={true} style={styles.textInput} placeholder='Contraseña'></TextInput>
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight style={[styles.buttonContainer, styles.logInButton]}>
                    <Text style={styles.signUpText}>Registrarse</Text>
                  </TouchableHighlight>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
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
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 30,
    color: 'white',
    width: 300,
    textAlign: 'left'
  },
  selectInput: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 30,
    color: '#bbb',
    width: 300,
  },
  text: {
    fontSize: 16, 
    color: '#eee',
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
    color: 'rgba(255, 255, 255, .4)',
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
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  body: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
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
  }
});

export default SignUp;
