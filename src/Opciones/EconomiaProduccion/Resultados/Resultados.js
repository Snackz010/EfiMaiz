import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Resultados = (props) => {
    const {
      manzanas,
      quintalesSembrados,
      inversionQuintales,
      quintalesCosechados,
      ventaAproximada,
      gananciaAproximada,
      resultado,
    } = props;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
        <View style={styles.center}>
          <View style={styles.body}>
            <ScrollView>
              <View>
                <Text style={styles.title}>
                  Resultados de la Económicos y de Producción.
                </Text>
                <View style={styles.center}>
                  <View style={styles.box}>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Área cultivada:</Text>
                      <Text style={styles.title2}>{(manzanas===''?'0':manzanas)+' Manzanas'}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Quintales sembrados:</Text>
                      <Text style={styles.title2}>{(quintalesSembrados===''?'0':quintalesSembrados)+' Quintales'}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Inversión en quintales cultivados:</Text>
                      <Text style={styles.title2}>{'C$ '+(inversionQuintales===''?'0':inversionQuintales)}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Quintales cosechados:</Text>
                      <Text style={styles.title2}>{(quintalesCosechados===''?'0':quintalesCosechados)+' Quintales'}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Venta aproximada:</Text>
                      <Text style={styles.title2}>{'C$ '+(ventaAproximada===''?'0':ventaAproximada)}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Ganancia aproximada:</Text>
                      <Text style={styles.title2}>{'C$ '+(gananciaAproximada===''?'0':gananciaAproximada)}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text2}>Esta obtuvo resultados:</Text>
                      <Text style={styles.title2}>{resultado===''?'Desconocido':resultado}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.button}>
                <TouchableHighlight style={[styles.buttonContainer, styles.actionButton]}
                >
                  <Text style={styles.buttonText}>Ir a Inicio <Icon name='home' color="white" size={18}/></Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
            
          </View>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
  },
  box:{
    backgroundColor: 'lightgreen',
    height: 580,
    width: 300,
    borderRadius: 10,
    marginTop: 30,
    padding: 20
  },
  text3: {
    fontSize: 16, 
    textAlign: 'center',
  },
  title2: {
    fontSize: 20,
    textAlign: 'left',
    color: 'darkgreen'
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
  actionButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 15
  },
  textBox: {
    marginBottom: 15
  }
});

export default Resultados;