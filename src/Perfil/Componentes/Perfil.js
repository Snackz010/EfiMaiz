import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Perfil = (props) => {

  return (
    <>
      <View>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require('../../assets/user.png')}/>
          <View style={{...styles.cardContent}}>
            <View>
              <Text style={styles.title}>Eliab Javier Selva Cruz</Text>
              <Text style={styles.subTitle}>eliabjselvacruz51@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.listContainer}>
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={require('../../assets/userProfile.png')} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Nombre</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Eliab Javier</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={require('../../assets/userProfile.png')} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Apellido</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Selva Cruz</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={require('../../assets/phone.png')} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Teléfono</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>87373581</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={require('../../assets/email.png')} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Correo</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>eliabjselvacruz51@gmail.com</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={require('../../assets/ocupation.png')} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Ocupación</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Estudiante</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={require('../../assets/user2.png')} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Usuario</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>eliab51</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
  listContainer:{
    marginTop: 60
  },
});

export default Perfil;