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
            <Text style={styles.title2}>Métodos de siembra</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Al voleo:</Text> se esparcen las semillas en la superficie del terreno de la manera más uniforme posible. </Text>
            <Image style={styles.cardImage} source={{uri:'https://sites.google.com/site/339tejidosdeproduccion/_/rsrc/1307975761451/tipos-de-siembra/SIEMBRA%20AL%20VOLEO.jpg?height=239&width=320'}}/>
            <Text style={styles.textDescription}><Text style={styles.title2}>A Chorrillo:</Text> se distribuyen las semillas en líneas paralelas tratando de conseguir la mayor uniformidad posible en la línea de siembra.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.odepa.gob.cl/wp-content/uploads/2017/08/Fotolia_54021686_Subscription_Monthly_XXL-1140x470.jpg'}}/>
            <Text style={styles.textDescription}><Text style={styles.title2}>En surco:</Text>  se realiza un surco en línea en profundidad variable según el tamaño de la semilla que estemos usando y después se van colocando las semillas.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.monografias.com/trabajos99/sistema-produccion-maiz-frijol/image003.jpg'}}/>
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