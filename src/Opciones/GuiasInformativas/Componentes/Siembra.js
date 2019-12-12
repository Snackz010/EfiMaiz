import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

const Siembra = (props) => {

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Siembra</Text>
                <Text style={styles.subTitle}>Siembra del cultivo del maíz</Text>
              </View>
            </View>
          </View>
          <View style={styles.body} >
            <Text style={styles.title3}>Métodos de siembra</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Al voleo:</Text> se esparcen las semillas en la superficie del terreno de la manera más uniforme posible. </Text>
            <Image style={styles.cardImage} source={{uri:'https://sites.google.com/site/339tejidosdeproduccion/_/rsrc/1307975761451/tipos-de-siembra/SIEMBRA%20AL%20VOLEO.jpg?height=239&width=320'}}/>
            <Text style={styles.textDescription}><Text style={styles.title2}>Al golpe:</Text> se depositan las semillas de una en una en el lugar donde deseo que germinen.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.lahuertinadetoni.es/wp-content/uploads/2017/03/bonico-179-1024x576.jpg.webp'}}/>
            <Text style={styles.textDescription}><Text style={styles.title2}>A Chorrillo:</Text> se distribuyen las semillas en líneas paralelas tratando de conseguir la mayor uniformidad posible en la línea de siembra.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.odepa.gob.cl/wp-content/uploads/2017/08/Fotolia_54021686_Subscription_Monthly_XXL-1140x470.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title2}>En surco:</Text>  se realiza un surco en línea en profundidad variable según el tamaño de la semilla que estemos usando y después se van colocando las semillas.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.monografias.com/trabajos99/sistema-produccion-maiz-frijol/image003.jpg'}}/>
            <Text style={styles.title3}>¿Qué cantidad de plantas de maíz sembrar?</Text>
            <Text style={styles.textDescription}>La población o densidad óptima de plantas para la mayoría de variedades es de 40 a 60 mil plantas o sea de 35 a 40 libras de semilla por manzana.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Variedades precoces: </Text>La densidad es de 75 cm entre surco y 15 a 19 cm entre golpe, a una planta por golpe (6-8 polpes en un metro), para una población entre 50 a 60 mil plantas por manzana.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Variedades intermedias: </Text>La densidad es de 81 cm entre surco y a 20 cm entre golpe, a una planta por golpe (5 golpes en un metro), para un total de 43 mil plantas por manzana.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Variedades tardías: </Text>La densidad es de 90 cm entre surco y a 25 cm entre golpe, a una planta por golpe (4 golpes en un metro), para una población de 32 mil plantas por manzana.</Text>
            <Text style={styles.textDescription}>Una población adecuada de plantas fuertes, provenientes de una buena semilla, permite tolerar el ataque inicial de cualquier plaga.</Text>
            <Text style={styles.title3}>¿Cómo sembrar el maíz?</Text>
            <Text style={styles.title2}>Para la siembra al espeque sin fertilizar se debe hacer lo siguiente:</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Primero: </Text>Se realiza el control de las malezas con machete.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Segundo: </Text>Se siembra la semilla. Se puede utilizar semillas criollas Sprecoces) o mejoradas Sintermedias).</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Tercero: </Text>Después de la siembra ralear dejando una planta por golpe.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Cuarto: </Text>A los 25 días de nacido el maíz, debe limpiarse de malezas.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.elheraldo.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=WcODd8ciNjyokOgAj4agGM$daE2N3K4ZzOUsqbU5sYujCV6yPRIFc484sTVR9cRkWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'}}/>
            <Text style={styles.title3}>En zonas secas se debe sembrar 12 plg. entre plantas y a 33 plg. entre surcos, para obtener 25 mil plantas por manzana.</Text>
            <Text style={styles.title2}>Para la siembra con labranza mínima se realiza los siguiente:</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>a) </Text>Roza de las malezas en el mes de mayo.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>b) </Text>Tres días después se barren las malezas y rastrojos y se forman hileras en el área de siembra. Puede ser usado como cobertura muerta, para la construcción de aboneras o se saca del campo para su descomposición y así <Text style={styles.title2}> evitar la quema que es perjudicial para el suelo</Text></Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>c) </Text>No se debe usar cobertura o mulch en zonas muy húmedas.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>d) </Text>Una vez limpia el área de siembra, se espera que llueva para pasarle la primera raya de arado y siembra.</Text>
            <Image style={styles.cardImage} source={{uri:'https://sandpatyval.files.wordpress.com/2012/05/caballo-arando.jpg'}}/>
            <Text style={styles.title3}>La siembra se debe hacer con suficiente humedad en el suelo, a una profundidad de 1 a 1 y media pulgadas.</Text>
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
    margin:10,
    backgroundColor: 'rgba(0,0,0,.05)',
    borderRadius: 10,
    padding: 15,
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
  opacity:{
    flex: 1,
    zIndex: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    height: 150,
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
  cardImage:{
    height:150,
    flex: 1,
    width: null,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Siembra;