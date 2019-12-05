import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Clima = (props) => {

  const {
    eventoTxtTemperatura,
    eventoTxtPrecipitacion,
    eventoTxtHumedad,
    eventoTxtVelocidad,
    eventoTxtAltitud,
    eventoTxtNRadiacion,
    temperatura,
    humedad,
    precipitacion,
    velocidadV,
    altitud,
    nRadiacion,
    eventoIrSuelo,
  } = props;

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
          <View style={styles.center}>
            <View style={styles.body}>
              <ScrollView>
                <View>
                  <View >
                    <Text style={styles.title}>Clima</Text>
                    <Text style={styles.text}>Ingrese los datos del clima del sitio.</Text>
                    <Text style={styles.textSubTitle}></Text>
                  </View>
                  <View style={styles.center}>
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Temperatura' 
                      onChangeText={eventoTxtTemperatura}
                      value={temperatura}
                    />
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Precipitación' 
                      onChangeText={eventoTxtPrecipitacion}
                      value={precipitacion}
                    />
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Humedad' 
                      onChangeText={eventoTxtHumedad}
                      value={humedad}
                    />
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Velocidad del viento' 
                      onChangeText={eventoTxtVelocidad}
                      value={velocidadV}
                    />
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Altitud' 
                      onChangeText={eventoTxtAltitud}
                      value={altitud}
                    />
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Nivel de Radiación' 
                      onChangeText={eventoTxtNRadiacion}
                      value={nRadiacion}
                    />
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight style={[styles.buttonContainer, styles.logInButton]}
                    onPress={eventoIrSuelo}
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
  }
});

export default Clima;