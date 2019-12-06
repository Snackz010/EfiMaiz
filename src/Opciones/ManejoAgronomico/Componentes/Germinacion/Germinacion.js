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


const Germinacion = (props) => {

  const {
    grupo1,
    grupo2,
    grupo3,
    grupo4,
    eventoTxtGrupo1,
    eventoTxtGrupo2,
    eventoTxtGrupo3,
    eventoTxtGrupo4,
    promedio,
    calcularPromedio,
  } = props;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <View style={styles.center}>
        <View style={styles.body}>
          <ScrollView>
            <View>
              <View >
                <Text style={styles.title}>Germinación</Text>
                <Text style={styles.text}>Germinación de las semillas.</Text>
                <Text style={styles.textSubTitle}>{promedio}</Text>
              </View>
              <View style={styles.center}>
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Semillas grupo #1'
                  onChangeText={eventoTxtGrupo1}
                  value={grupo1}
                />
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Semillas grupo #2'
                  onChangeText={eventoTxtGrupo2}
                  value={grupo2}
                />
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Semillas grupo #3'
                  onChangeText={eventoTxtGrupo3}
                  value={grupo3}
                />
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Semillas grupo #4'
                  onChangeText={eventoTxtGrupo4}
                  value={grupo4}
                />
              </View>
            </View>
            <View style={styles.button}>
              <TouchableHighlight 
                style={[styles.buttonContainer, styles.calcButton]}
                onPress={()=>{calcularPromedio(grupo1,grupo2,grupo3,grupo4)}}
              >
                <Text style={styles.signUpText}>Calcular<Icon name='calculator' color="white" size={18}/></Text>
              </TouchableHighlight>
              <TouchableHighlight 
                style={[styles.buttonContainer, styles.calcButton, styles.marginButtonContainer]}
                onPress={()=>{calcularPromedio(grupo1,grupo2,grupo3,grupo4)}}
              >
                <Text style={styles.signUpText}>Registrar<Icon name='plus-circle' color="white" size={18}/></Text>
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
  marginButtonContainer: {
    marginTop: 10
  },
  calcButton: {
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
    fontSize: 24,
    marginTop: 30,
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

export default Germinacion;