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

const Suelo = (props) => {


  const {
    eventoTxtSuelo,
    eventoTxtColor,
    eventoTxtPH,
    eventoTxtMOrganica,
    eventoTxtTopografia,
    eventoTxtTextura,
    suelo,
    color,
    ph,
    mOrganica,
    topografia,
    textura,
    eventoIrAgua,
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
                    <View style={styles.inputContainer}>
                    <TextInput keyboardType={"default"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Tipo de Suelo' 
                      onChangeText={eventoTxtSuelo}
                      value={suelo}
                    />
                    </View>
                    <TextInput keyboardType={"default"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Color' 
                      onChangeText={eventoTxtColor}
                      value={color}
                    />
                    <TextInput keyboardType={"numeric"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='PH' 
                      onChangeText={eventoTxtPH}
                      value={ph}
                    />
                    <TextInput keyboardType={"default"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Materia Organica' 
                      onChangeText={eventoTxtMOrganica}
                      value={mOrganica}
                    />
                    <TextInput keyboardType={"default"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Topografía' 
                      onChangeText={eventoTxtTopografia}
                      value={topografia}
                    />
                    <TextInput keyboardType={"default"} placeholderTextColor="white" autoCapitalize={'words'} style={styles.textInput} placeholder='Textura' 
                      onChangeText={eventoTxtTextura}
                      value={textura}
                    />
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight style={[styles.buttonContainer, styles.logInButton]}
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
  }
});

export default Suelo;