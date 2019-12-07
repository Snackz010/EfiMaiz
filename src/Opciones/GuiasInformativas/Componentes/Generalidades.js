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

const Generalidades = (props) => {
  const tableHead=['Época', 'Fecha'];
  const tableData=[
    ['Temperatura C°', '20 - 27'],
    ['Altitud', '0 - 1000'],
    ['Precipitaciones (msnm)', '500 -1000'],
    ['Suelo (textura)','Franco, franco-arenoso, arenoso'],
    ['pH','6 - 7.5'],
  ];
  const tableData2=[
    ['Familia:', 'Gramíneas'],
    ['Género:', 'Zea'],
    ['Nombre científico:', 'Zea Mays'],
  ];
  const tableData3=[
    ['Primera', 'Mayo - Junio'],
    ['Postrerón', 'Julio'],
    ['Postrera', 'Agosto - Septiembre'],
    ['Apante', 'Diciembre'],
    ['Riego', 'Febrero'],
  ];
  const tableHead4=['Departamento', 'Héctareas'];
  const tableData4=[
    ['Boaco', '78, 412'],
    ['Carazo', '18, 634'],
    ['Chinandega', '128, 066'],
    ['Chontales', '74, 649'],
    ['Estelí', '4, 893'],
    ['Granda', '31, 751'],
    ['Jinotega', '65, 415'],
    ['León', '29, 539'],
    ['Madriz', '1, 285'],
    ['Managua', '21, 938'],
    ['Matagalpa', '52, 988'],
    ['Nueva Segovia', '26, 418'],
    ['RAAN', '237, 671'],
    ['RAAS', '68, 940'],
    ['Rio San Juan', '79, 274'],
    ['Rivas', '41, 104'],
  ];
  const total=[
    ['Total', '996, 386'],
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'http://delmaiz.info/wp-content/uploads/2017/01/caracter%C3%ADsticas-del-ma%C3%ADz.jpg'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Maíz</Text>
                <Text style={styles.subTitle}>Generalidades del cultivo</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.title2}>Generalidades del maíz</Text>
            <Text style={styles.textDescription}>Los granos básicos (maíz, frijol, sorgo y arroz) son la dieta fundamental de la población nicaragüense, la cultura de sus ciudadanos está muy arraigada a cultivos como el maíz, del cual se derivan una serie de alimentos típicos de la gastronomía nacional.</Text>
            <Text style={styles.textDescription}>El 79% de la producción nacional de granos básicos se encuentra en manos de pequeños y medianos productores, unos 181 mil productores se dedican al cultivo de estas especies en el país.</Text>
            <Image style={styles.cardImage} source={{uri:'https://radio-corporacion.com/wp-content/uploads/2017/01/Granos-b%C3%A1sicos1-e1483370640517.jpg'}}/>
            <Text style={styles.title2}>Taxonomía y morfología de la planta de maíz</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Raíces:</Text> fasciculadas, aportan un perfecto anclaje a la planta, sobresalen nudos de las raíces a nivel del suelo y suele ocurrir en aquellas raíces secundarias o adventicias.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Tallos:</Text> simple erecto, robusto y sin ramificaciones. No presenta entrenudos y sí una médula esponjosa, pudiendo alcanzar 4 m.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Flores:</Text> monoica con inflorescencia masculina (panícula) y femenina (espádice) dentro de la misma planta.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Hojas:</Text> largas, lanceoladas, alternas, paralelinervias. El haz presenta vellosidades y los extremos de las hojas son muy afilados y cortantes.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Fruto:</Text> compuesto por una determinada cantidad de granos, el cual recibe el nombre de mazorca.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Semilla:</Text>  llamada cariópside, está insertado en el raquis cilíndrico u olote; la cantidad de granos determina el fruto.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.researchgate.net/profile/Mairett_Rodriguez-Balza/publication/311923885/figure/fig1/AS:444012399206400@1482872213291/Figura-1-Plantas-de-maiz-Zea-mays-L-Fuente-wwwspaincenterorg-agricultura-maizhtm.png'}}/>
            <Text style={styles.title2}> Taxonomía de la planta de maíz</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Rows data={tableData2} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.title2}>Requerimientos edafoclimáticos</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Rows data={tableData} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.title2}>Zonas de cultivo del maíz</Text>
            <Text style={styles.textDescription}>El maíz se cultiva en todo el país y se puede sembrar todo el año, en cinco épocas de siembra: primera, postrerón, postrera, apante y riego. Entre los departamentos que se destacan se encuentran Chinandega y la Costa Caribe.</Text>
            <Text style={styles.title2}>Época y meses de siembra</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData3} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.title2}>Hectáreas potenciales para establecer cultivo de maíz</Text>
            <Text style={styles.textDescription}>Según el Manual del Protagonista - Granos Básicos (INATEC, 2017) las áreas potenciales son:</Text>
            <Image style={styles.cardImage2} source={{uri:'https://fvmstatic.s3.amazonaws.com/maps/m/NI-EPS-02-4001.png'}}/>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Row data={tableHead4} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData4} textStyle={styles.text}/>
                <Rows data={total} style={styles.head} textStyle={styles.text}/>
              </Table>
            </View>
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
  cardImage:{
    height:150,
    flex: 1,
    width: null,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  cardImage2:{
    height:200,
    flex: 1,
    width: null,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
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

export default Generalidades;