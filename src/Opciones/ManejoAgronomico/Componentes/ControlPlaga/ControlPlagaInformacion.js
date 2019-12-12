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

const ControlPlagaInformacion = (props) => {
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
            <Image style={styles.headerImage} source={{uri:'https://cdn.pixabay.com/photo/2016/11/28/20/13/desert-locust-1865955_960_720.jpg'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Plagas</Text>
                <Text style={styles.subTitle}>Plagas comunes del cultivo del maíz</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.textDescription}>El manejo de plagas es fácil de aplicar en el cultivo de maíz, donde podemos poner en práctica diferentes tipos de control, como:</Text>
            <Text style={styles.title3}>El Control cultural:</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>1)</Text> Uso de semilla seleccionada.</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>2)</Text> Rotación de cultivos (maíz  frijol).</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>3)</Text> Asocio de cultivos (maíz  frijol).</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>4)</Text> Cero labranza o labranza mínima.</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>5)</Text> Epocas de siembras.</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>6)</Text> Manejo de plantas no deseables (malezas).</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>7)</Text> Antes de hacer el control de plagas, se realiza un muestreo y según los patrones que resultan se aplica el control.</Text>
            <Text style={styles.title3}>El control físico o mecánico</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>1)</Text> Recolección y destrucción manual de las partes de la planta afectadas.</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>2)</Text> Uso de instrumentos para destrucción de malezas (machete, azadón).</Text>
            <Text style={styles.title3}>Control fitogenético</Text>
            <Text style={styles.textItem}>Consiste en el uso de variedades resistentes o tolerantes a las plagas. En Nicaragua hay ejemplo de variedades de maíz tolerantes a achaparramiento como son los NB-6 y NB-12.</Text>
            <Text style={styles.title3}>Control etológico</Text>
            <Text style={styles.textItem}>Consiste en aprovechar el comportamiento de los insectos para su manejo, como sucede con el uso de:</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>1)</Text> Trampas lumínicas, que atrae a los adultos de gallina ciega.</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>2)</Text> Atrayentes, como el uso de cebos tóxicos para el control de gusanos cortadores.</Text>
            <Text style={styles.textItem}><Text style={styles.title2}>3)</Text> Repelentes, como el caso del Neem contra el gusano cogollero.</Text>
            <Text style={styles.title3}>Control biológico</Text>
            <Text style={styles.textItem}>Permite usar enemigos naturales de las plagas, atacándolas o devorándolas o sea matándolas.</Text>
            <Text style={styles.title3}>Control químico</Text>
            <Text style={styles.textItem}>Se refiere al uso de plaguicidas. Por su toxicidad, la decisión de aplicación debe partir de recuentos de plagas previamente realizados que nos indiquen si existe una población de plaga que dañe el rendimiento del cultivo en una proporción seria o grave.</Text>
            <Text style={styles.textDescription}>Antes de hacer el control de plagas, se realiza un muestreo y según los patrones que resultan se aplica el control: </Text>
            <Image style={styles.cardImage} source={{uri:'https://www.intagri.com/assets/images/articulos/categoria1/Fitosanidad/art302-gallina-ciega/larva.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Gallina ciega (Phyllophaga spp)</Text>, nivel de decisión: el umbral de 4 larvas por cuadrante en el cultivo de maíz representa una situación de emergencia que se debe atender de inmediato.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.huerto.bio/web/content/uploads/2017/03/agrotis_segetum_10.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Cortador (Agrotis spp)</Text>, nivel de decisión: 6 plantas cortadas por muestreo.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.agritotal.com/files/image/2/2832/50edacfbe4873.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Barrenador (Diatraea linoalata)</Text>, nivel de decisión: 20 huevos o larvas por muestreo,</Text>
            <Image style={styles.cardImage} source={{uri:'https://elabcrural.com/wp-content/uploads/2018/07/gusano-cogollero-2.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Cogollero (Spodoptera frugiperda)</Text>, nivel de decisión: 10 plantas con cogollero.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.agro.bayer.com.br/-/media/bcs-inter/ws_brazil/alvos/lagarta-elasmo---elasmopalpus-lignosellus/lagarta-elasmo---elasmopalpus-lignosellus.png?h=346&w=520&la=pt-BR&hash=8E44E99C8D3073FC71EF31A5FFAEEDA44B8EB5EE'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Coralillo (Elasmopalpus lignosellus)</Text>, nivel de decisión: 5 larvas por muestreo.</Text>
            <Image style={styles.cardImage} source={{uri:'https://mapio.net/images-p/63436600.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Medidor de las gramíneas (Mocis latipes)</Text>, nivel de decisión: 50 larvas por muestreo.</Text>
            <Image style={styles.cardImage} source={{uri:'https://pbs.twimg.com/media/DBOGbPfXoAEpvzd.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Mosquita de la panoja (Contarinia sorguicola)</Text>, nivel de decisión: 200 adultos por muestreo.</Text>
            <Image style={styles.cardImage} source={{uri:'http://staticf5a.lavozdelinterior.com.ar/sites/default/files/styles/landscape_750_422/public/nota_periodistica/chinche.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Chinches (Nezara viridula)</Text>, nivel de decisión: 400 por muestreo.</Text>
            <Image style={styles.cardImage} source={{uri:'https://bugguide.net/images/raw/HKU/KHK/HKUKHKNK5KNKQKD04QWKKKA0UQ1KIKCKSKNKHKWKKK102QWKLK9K2QD0QK9K2QHS1QJ0NQ30VQAK7K.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title3}>Spodoptera frugiperda</Text>, nivel de decisión: 20 larvas por muestreo en maíz</Text>
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
  textItem:{
    textAlign: 'justify',
    fontSize:14,
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

export default ControlPlagaInformacion;