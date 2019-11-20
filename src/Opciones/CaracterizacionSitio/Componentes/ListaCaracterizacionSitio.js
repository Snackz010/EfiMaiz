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

    return (
      <>
        <ScrollView>
          <View>
            <TouchableOpacity>
              <View style={styles.card}>
                {/*<Image style={styles.cardImage} source={{uri:item.imagen}}/>*/}
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>Clima</Text>
                    <Text style={styles.subTitle}>Evaluación del clima del sitio.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.card}>
                {/*<Image style={styles.cardImage} source={{uri:item.imagen}}/>*/}
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>Suelo</Text>
                    <Text style={styles.subTitle}>Evaluación del suelo del sitio.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.card}>
                    {/*<Image style={styles.cardImage} source={{uri:item.imagen}}/>*/}
                    <View style={styles.cardContent}>
                     <View>
                       <Text style={styles.title}>Agua</Text>
                      <Text style={styles.subTitle}>Evaluación del agua del sitio.</Text>
                    </View>
                  </View>
              </View>
            </TouchableOpacity>
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
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "lightblue",
    height: 150,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
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
});

export default CaracterizacionSitio;