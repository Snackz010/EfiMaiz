import React, { Component } from 'react';
import Opciones from './Opciones';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Inicio = (props) => {

  const { navigation } = props;

  return (
    <>

      <View>
        <View style={styles.header}>
          <Image style={styles.headerImage} source={require('../../assets/encabezado.jpg')}/>
          <View style={{...styles.cardContent, ...styles.opacity}}>
            <View>
              <Text style={styles.title}>Maíz</Text>
              <Text style={styles.subTitle}>Manejo eficiente del cultivo</Text>
            </View>
          </View>
        </View>
        <Opciones navigation={navigation}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:200,
  },
  headerImage:{
    height:200,
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
  opacity:{
    flex: 1,
    zIndex: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 10,
    height: 200,
  },
});



export default Inicio;