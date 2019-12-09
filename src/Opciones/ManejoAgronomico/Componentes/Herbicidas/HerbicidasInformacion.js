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

const HerbicidasInformacion = (props) => {
  const tableHead=['Tipo', 'Cantidad'];
  const tableData=[
    ['Urea', '2 qq / mz'],
    ['Urea', '3 qq / mz'],
    ['Urea', '3 qq / mz'],
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://www.eluniverso.com/sites/default/files/styles/powgallery_1280/public/fotos/2017/03/8291973.jpg?itok=gHzlN8Vr'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Control de Malezas</Text>
                <Text style={styles.subTitle}>Cultivo del maíz</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.textDescription}>Consiste en mantener libre el cultivo de malezas utilizando labores como:</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>1) Cultural:</Text> se realizan prácticas tales como fechas de siembra, densidades adecuadas, fertilización, entre otras.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>2) Mecánico:</Text> eliminación de las malezas por medio del machete, gancho de madera y chapeadoras mecánicas.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>3) Químico:</Text> aplicación de productos con atomizador acoplados a tractores.</Text>
            <Text style={styles.textDescription}>Es importante estar bien informado acerca del periodo de tiempo durante el cual el cultivo debe estar prácticamente libre de malezas para evitar una reducción en el rendimiento o la calidad del cultivo o daños a los cultivos en el futuro.</Text>
            <Text style={styles.textDescription}>En este cultivo, el período crítico comprende las primeras 6 semanas de edad de manera que mantener limpio el cultivo es importante para evitar que las malezas afecten los rendimientos.</Text>
            <Text style={styles.title2}>Herbicidas pre-emergentes contra malezas antes de la germinación del cultivo.</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.textDescription}>La abreviación <Text style={styles.title2}>dds</Text> quiere decir días después de la siembra.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Aporque:</Text> consiste en acumular suelo alrededor de la base de la planta para favorecer el anclaje y promover el desarrollo de raíces adventicias.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.uaem.mx/gacetavirtual/uploads/posts/aporque-de-experimento-maiz-pozolero-2-59a46ca0eb72a.jpg'}}/>
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
  },
  cardImage:{
    height:150,
    flex: 1,
    width: null,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default HerbicidasInformacion;