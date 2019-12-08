import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

const GerminacionInstrucciones = (props) => {
  const tableHead=['Grupo', 'Plántulas emergidas'];
  const tableData=[
    ['Uno', '97'],
    ['Dos', '90'],
    ['Tres', '92'],
    ['Cuatro','81'],
    ['Total','360 / 4 = 90'],
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://hidroponia.mx/wp-content/uploads/2018/05/PLANTULAMAIZ-300x278.png'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Prueba de germinación</Text>
                <Text style={styles.subTitle}>Germinación del maíz</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.title2}>Prueba de germinación</Text>
            <Text style={styles.textDescription}>Es una práctica que se realiza sobre una muestra de semilla que sirve para estimar el porcentaje de semillas con capacidad para germinar. Permite saber la cantidad de semilla requerida para el establecimiento en un área determinada.</Text>
            <Text style={styles.textDescription}>Para obtener la población requerida y lograr buen rendimiento del cultivo es sumamente importante que se realice la prueba de germinación de la semilla 15 días antes de la siembra (das).</Text>
            <Text style={styles.title2}>Procedimiento para realizar la prueba de germinación:</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>1)</Text> Obtener una muestra de semilla del recipiente donde ha sido almacenada. Si tiene más de dos recipientes tomar una muestra y mezclarlas.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>2)</Text> Retire 400 semillas sin escogerlas de la muestra.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>3)</Text> Forme cuatro grupos de 100 semillas cada uno.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>4)</Text> Coloque los cuatro grupos de 100 semillas en el suelo o arena. Cada grupo debe quedar por separado.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>5)</Text> Regarlas diariamente.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>6)</Text> Las plántulas comenzaran a emerger de 4 a 5 días después de sembradas.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>7)</Text> Contar las plántulas que emergieron en cada uno de los grupos. Luego sumar los cuatro grupos como se muestra en el ejemplo.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>8)</Text> Dividir el total de plantas emergidas entre cuatro.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>9)</Text> El resultado de la división anterior, es el porcentaje de germinación de la semilla.</Text>
            <Text style={styles.title2}>Ejemplo: ¿Cómo calcular el porcentaje de germinación?</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.textDescription}>Este resultado indica que la semilla tiene un 90% de germinación, es decir, que por cada 100 semillas que siembre 90 de éstas germinarán, lo cual es excelente.</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:150,
  },
  headerImage:{
    height:150,
    flex: 1,
    width: null,
  },
  body:{
    marginTop:10,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  title:{
    fontSize:24,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold',
    textAlign: 'center',
  },
  subTitle:{
    textAlign: 'center',
    fontSize:14,
    color: "#ffffff",
    marginTop: 5
  },
  title2:{
    fontSize:14,
    fontWeight:'bold',
    marginTop: 10,
    textAlign: 'justify',
  },
  textDescription:{
    textAlign: 'justify',
    fontSize:14,
    marginTop: 5
  },
  opacity:{
    flex: 1,
    zIndex: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    height: 150,
  },
  body:{
    margin:10,
    backgroundColor: 'rgba(0,0,0,.05)',
    borderRadius: 10,
    padding: 15,
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom:15,
    backgroundColor: '#fff'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: { 
    margin: 6,
    fontSize: 12
  }
});

export default GerminacionInstrucciones;