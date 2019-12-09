import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

const Opciones = (props) => {

  const {navigation} = props;

    return (
      <ScrollView>
        <View style={styles.margin}>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Caracterizacion')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../assets/sitio.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Caracterización del Sitio</Text>
                    <Text style={styles.subTitle}>Evaluación del clima, suelo y agua del sitio de cultivo.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('ManejoAgronomico')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../assets/control.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Control Agronómico del Cultivo</Text>
                    <Text style={styles.subTitle}>Seguimiento y control del cultivo.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('EcoPro')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../assets/ingresos.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Economía y Producción</Text>
                    <Text style={styles.subTitle}>Cálculo de ingresos y producción del cultivo.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('GuiasInformativas')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../assets/guia.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Guías</Text>
                    <Text style={styles.subTitle}>Guías informativas del cultivo.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Estadisticas')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../assets/estadisticas.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Estadísticas</Text>
                    <Text style={styles.subTitle}>Datos estadísticos de la Producción.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({

  card:{
    marginRight: 4,
    marginLeft: 4,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "lightblue",
    height: 130,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  cardImage:{
    flex: 1,
    height: 130,
    width: null,
    borderRadius: 10,
  },
  title:{
    fontSize:20,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  icon: {
    width:25,
    height:25,
  },
  subTitle:{
    fontSize:12,
    color: "#ffffff",
    marginTop: 5
  },
  opacity:{
    flex: 1,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,.4)',
    borderRadius: 10,
    height: 127,
  },
  margin: {
    marginBottom: 220
  }
});

export default Opciones;