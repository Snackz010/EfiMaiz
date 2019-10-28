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

const Agua = (props) => {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
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
                    <TextInput keyboardType={"numeric"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Volumen'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Calidad'></TextInput>
                    <TextInput keyboardType={"defautl"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Fuente'></TextInput>
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight style={[styles.buttonContainer, styles.logInButton]}>
                    <Text style={styles.signUpText}>Registrar</Text>
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
    borderBottomWidth: 0.4,
    borderColor: 'white',
    borderRadius: 5,
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 40,
    color: 'white',
    width: 300,
    height: 50,
    textAlign: 'left'
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

export default Agua;