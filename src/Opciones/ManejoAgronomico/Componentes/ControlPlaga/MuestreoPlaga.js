import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const muestreoPlaga = (props) => {
    const plaga = {
        Nombre:props.navigation.getParam('Nombre'),
        muestreoPlaga:props.navigation.getParam('muestreoPlaga')
    }
    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
        <ScrollView>
          <View>
            <View style={styles.header}>
              <Image style={styles.headerImage} source={{uri:'https://cdn.pixabay.com/photo/2016/11/28/20/13/desert-locust-1865955_960_720.jpg'}}/>
              <View style={{...styles.cardContent, ...styles.opacity}}>
                <View>
                  <Text style={styles.title}>Plagas</Text>
                  <Text style={styles.subTitle}>Método de muestreo de plaga</Text>
                </View>
              </View>
            </View>
            <View style={styles.body}>
                <View>
                <Text style={styles.textItem}><Text style={styles.title2}>Plaga: </Text>{plaga.Nombre}</Text>
                <Text style={styles.textItem}><Text style={styles.title2}>Muestreo: </Text>{plaga.muestreoPlaga}</Text>
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
      marginTop: 20,
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

export default muestreoPlaga;