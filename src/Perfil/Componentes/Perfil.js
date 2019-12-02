import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Perfil = (props) => {

  return (
    <>
      <View>
        <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={{...styles.cardContent}}>
            <View>
              <Text style={styles.title}>Eliab Javier Selva Cruz</Text>
              <Text style={styles.subTitle}>eliabjselvacruz51@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#a1d4d6',
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
    fontSize:22,
    marginTop: 10,
    fontWeight:'bold',
    textAlign: 'center',
    marginTop: 40,
    color: 'white'
  },
  subTitle:{
    textAlign: 'center',
    fontSize:14,
    marginTop: 5,
    color: 'white',
  },
  opacity:{
    flex: 1,
    zIndex: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 10,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
});

export default Perfil;