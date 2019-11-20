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

    return (
      <>
        <ScrollView>
          <View>
            <TouchableOpacity>
              <View style={styles.card}>
                {/*<Image style={styles.cardImage} source={{uri:item.imagen}}/>*/}
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>Caracterización del Sitio</Text>
                    <Text style={styles.subTitle}>Evaluación del sitio de cultivo.</Text>
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
                    <Text style={styles.title}>Control Agronómico del Cultivo</Text>
                    <Text style={styles.subTitle}>Seguimiento y control del cultivo.</Text>
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
                    <Text style={styles.title}>Producción.</Text>
                    <Text style={styles.subTitle}>Cálculo del rendimiento cultivo.</Text>
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
                    <Text style={styles.title}>Economía</Text>
                    <Text style={styles.subTitle}>Cálculo de ingresos y reportes de producción del cultivo.</Text>
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
                    <Text style={styles.title}>Guías</Text>
                    <Text style={styles.subTitle}>Guías informativas del cultivo.</Text>
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
                    <Text style={styles.title}>Otros</Text>
                    <Text style={styles.subTitle}>Otras opciones.</Text>
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
    backgroundColor: 'transparent',
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

export default Opciones;