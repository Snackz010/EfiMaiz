import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const ManejoAgronomico = (props) => {

  const {data, navegarPantalla,navegarPantallaLeer} = props;

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor= {(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                </View>
              </View>
              <Image style={styles.cardImage} source={{uri:item.image}}/>
              <View style={styles.cardFooter}>
                <View style={styles.cardFooterContainer}>
                  <View style={styles.footerSection}>
                    <TouchableOpacity style={styles.footerButton} onPress={()=>{navegarPantalla(item.rutaIr)}}>
                      <Image style={styles.icon} source={require('../../../assets/ir.png')}/>
                      <Text style={[styles.footerLabel, styles.labelColor]}>Ir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton} onPress={()=>{navegarPantallaLeer(item.rutaLeer)}}>
                      <Image style={styles.icon} source={require('../../../assets/leer.png')}/>
                      <Text style={[styles.footerLabel, styles.labelColor]}>Leer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center',
    marginTop: 10,
  },
  separator: {
    marginTop: 0,
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
    borderRadius: 10
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  title:{
    fontSize:16,
    color: "#316b71",
    flex:1,
  },
  subTitle:{
    fontSize:12,
    color: "#5aa990",
    marginTop: 5
  },
  labelColor:{
    color: "#ffffff",
    fontSize:14,
  },
  icon: {
    width:16,
    height:16,
  },

  cardFooterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  footerSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  footerLabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  footerButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(70, 160, 90, .9)',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    margin: 2
  }
});

export default ManejoAgronomico;