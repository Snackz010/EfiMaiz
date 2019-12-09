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

const Produccion = (props) => {
  const {
    eventoNumGranosFilaMazorca,
    eventoNumFilasMazorca,
    eventoNumMazorcasPlanta,
    eventoNumPlantasSurco,
    eventoNumSurcosManzana,
    eventoNumManzanas,
    numGranosFilaMazorca,
    numFilasMazorca,
    numMazorcasPlanta,
    numPlantasSurco,
    numSurcosManzana,
    numManzanas,
    navegarEconomia
  } = props; 
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
        <View style={styles.center}>
          <View style={styles.body}>
            <ScrollView>
              <View>
                <View >
                  <Text style={styles.title}>Producción</Text>
                  <Text style={styles.text}>Ingrese los datos solicitados para calcular la producción.</Text>
                  <Text style={styles.textSubTitle}></Text>
                </View>
                <View style={styles.center}>
                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='N° granos por fila por mazorca'
                    onChangeText={eventoNumGranosFilaMazorca}
                    value={numGranosFilaMazorca}
                  />

                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Filas de grano por mazorca'
                    onChangeText={eventoNumFilasMazorca}
                    value={numFilasMazorca}
                  />

                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='N° de mazorcas por plantas'
                    onChangeText={eventoNumMazorcasPlanta}
                    value={numMazorcasPlanta}
                  />

                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='N° de plantas por surco'
                    onChangeText={eventoNumPlantasSurco}
                    value={numPlantasSurco}
                  />

                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='N° de surcos por manzana'
                    onChangeText={eventoNumSurcosManzana}
                    value={numSurcosManzana}
                  />

                  <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='N° de manzanas cultivadas'
                    onChangeText={eventoNumManzanas}
                    value={numManzanas}
                  />

                </View>
              </View>
              <View style={styles.button}>
                <TouchableHighlight style={[styles.buttonContainer, styles.colorButton]}
                  onPress={navegarEconomia}
                >
                  <Text style={styles.textButton}>Registrar <Icon name='plus-circle' color="white" size={18}/></Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
        </View>
    </>
  );
}


const styles = StyleSheet.create({
  colorButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
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
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 16, 
    textAlign: 'center',
  },
  textSubTitle: {
    fontSize: 16, 
    textAlign: 'justify', 
    textAlign: 'center',
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
  button: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    borderRadius:20,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
  },
});

export default Produccion;