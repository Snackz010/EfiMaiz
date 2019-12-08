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

const FertilizanteInformacion = (props) => {
  const tableHead=['Tipo', 'Cantidad', 'Momento', 'Aporque'];
  const tableData=[
    ['12-30-10 o 10-30-20', '2 qq / mz', 'En la siembra', 'No'],
    ['Urea', '3 qq / mz', '25 - 30 dds ', 'Sí'],
    ['Urea', '3 qq / mz', '25 - 30 dds ', 'Sí'],
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://www.fertiberia.com/media/605924/cabecera-maiz.jpg'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Fertilización</Text>
                <Text style={styles.subTitle}>Fertilización del cultivo del maíz</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.textDescription}>Según el resultado del análisis de suelos se deben realizar las aplicaciones.</Text>
            <Text style={styles.textDescription}>Además del uso de abonos orgánicos. Incluir la cantidad requerida de abono orgánico y momento de aplicación (2 libras por metro lineal)</Text>
            <Text style={styles.textDescription}>En la siguiente tabla podemos encontrar las cantidades de fertilizantes:</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.textDescription}>La abreviación <Text style={styles.title2}>dds</Text> quiere decir días después de la siembra.</Text>
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
    margin: 6
  }
});

export default FertilizanteInformacion;