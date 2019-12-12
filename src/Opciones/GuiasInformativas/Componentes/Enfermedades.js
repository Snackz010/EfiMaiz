import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

const Enfermedades = (props) => {

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://t2.ev.ltmcdn.com/es/posts/9/9/1/roya_del_maiz_2199_5_600.jpg'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Maíz</Text>
                <Text style={styles.subTitle}>Enfermedades</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.textDescription}>En Nicaragua, el cultivo de maíz es atacado por varias enfermedades, siendo actualmente las más importantes: el Achaparramiento del Maíz y la Pudrición de la Mazorca.</Text>
          <Text style={styles.title3}>El achaparramiento del maíz</Text>
          <Text style={styles.textDescription}>Es transmitido por organismo vector llamado Chicharrita. Se caracteriza en que la planta presenta enanismo, alteraciones en el color verde de las hojas (clorosis) o enrojecimiento que inicia en la punta de las hojas (lapeado), proliferación de tallos y de mazorcas, entrenudos cortos y más alteraciones de la planta.</Text>
          <Image style={styles.cardImage} source={{uri:'https://www.researchgate.net/profile/Roman_Gordon/publication/269393186/figure/fig3/AS:392042669723655@1470481664554/Figura-6-Adulto-de-Dalbulus-maydis-y-planta-de-maiz-mostrando-los-sintomas-de-la.png'}}/>
          <Text style={styles.textDescription}>El control o manejo se dá con el uso de variedades resistentes y respetando las fechas de siembra. Las mayores poblaciones de chicharrita aparecen de julio a diciembre.</Text>
          <Text style={styles.textDescription}>Se deben implementar las siembras de primera en zonas secas y cualquiera de los ciclos para las zonas húmedas; pero nunca debemos sembrar todos los ciclos seguidos.</Text>
          <Text style={styles.title2}>El control químico no es muy eficiente para el manejo de la chicharrita.</Text>
          <Text style={styles.title3}>Pudrición de la Mazorca</Text>
          <Text style={styles.textDescription}>Es una enfermedad causada por un hongo, se inicia en las hojas con manchas pequeñas que tienen el centro blanco y orillas de color café; después más alargadas son cafés con orilla amarilla.</Text>
          <Image style={styles.cardImage} source={{uri:'https://www.chilebio.cl/wp-content/uploads/2017/02/maiz.jpg'}}/>
          <Text style={styles.textDescription}>Luego pasa a la base de de la mazorca destruyendo los granos. Se forma una costra blanca o algodoncillo entre los granos. Las mazorcas dañadas no pesan mucho y los granos son oscuros.</Text>
          <Text style={styles.textDescription}>Las principales formas de manejo son:</Text>
          <Text style={styles.title2}>Elimine los rastrojos de maíz que contengan el hongo. No siembre maíz ni sorgo en lotes donde hubo enfermedad. En lotes donde hubo ataque de pudrición, siembre otro cultivo como frijol, soya, yuca o maní, de esta forma evitará que se reproduzca la enfermedad.</Text>
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
  title3:{
    fontSize:14,
    fontWeight:'bold',
    marginTop: 10,
    textAlign: 'justify',
    color: 'darkgreen'
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

export default Enfermedades;