import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

const CaracterizacionSitio = (props) => {

  const { navigation } = props;

    return (
      <>
        <ScrollView>
          <View style={styles.margin}>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Clima')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../../assets/clima.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Clima</Text>
                    <Text style={styles.subTitle}>Evaluación del clima del sitio.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Suelo')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../../assets/suelo.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Suelo</Text>
                    <Text style={styles.subTitle}>Evaluación del suelo del sitio.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Agua')}}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={require('../../../assets/agua.jpg')}/>
                <View style={{...styles.cardContent, ...styles.opacity}}>
                  <View>
                    <Text style={styles.title}>Agua</Text>
                    <Text style={styles.subTitle}>Evaluación del agua del sitio.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </>
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
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  icon: {
    width:25,
    height:25,
  },
  subTitle:{
    fontSize:13,
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
  margin:{
    marginBottom: 230
  }
});

export default CaracterizacionSitio;