import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, ruta:"Generalidades",title: "Generalidades", subTitle:"Guía", image:"http://delmaiz.info/wp-content/uploads/2017/01/caracter%C3%ADsticas-del-ma%C3%ADz.jpg"},
        {id:2, ruta:"Siembra",title: "Siembra", subTitle:"Guía", image:"https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
        {id:3, ruta:"Fertilizacion",title: "Fertilización", subTitle:"Guía", image:"https://pbs.twimg.com/media/EDOmFG-XYAALHiJ.jpg"} ,
        {id:4, ruta:"Malezas",title: "Maleza", subTitle:"Guía", image:"https://cdn.pixabay.com/photo/2017/07/19/08/50/gardening-2518377_960_720.jpg"}, 
        {id:5, ruta:"Plagas",title: "Plagas", subTitle:"Guía", image:"https://cdn.pixabay.com/photo/2016/11/28/20/13/desert-locust-1865955_960_720.jpg"}, 
        {id:6, ruta:"Enfermedades",title: "Enfermedades", subTitle:"Guía", image:"https://t2.ev.ltmcdn.com/es/posts/9/9/1/roya_del_maiz_2199_5_600.jpg"}, 
        {id:7, ruta:"Cosecha",title: "Cosecha", subTitle:"Guía", image:"https://www.infobae.com/new-resizer/E-5eS6rvl_s_WAZXuO2ESrBShEU=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/29110007/maiz-1.jpg"}, 
        {id:8, ruta:"Postcosecha",title: "Postcosecha", subTitle:"Guía", image:"https://www.agrarheute.com/media/styles/lightbox/public/media/554410/554410.gif?itok=tZ-T_1V_"}, 
      ]
    };
  }

  navegarPantalla = (item) => {
    this.props.navigation.navigate(item);
  }

  mensaje = (texto) => {
    Alert.alert('Información', 'Guías informativas del cultivo del maíz.' + texto)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
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
                      <TouchableOpacity style={styles.footerButton} onPress={()=>{this.navegarPantalla(item.ruta)}}>
                        <Image style={styles.icon} source={require('../../../assets/ir.png')}/>
                        <Text style={[styles.footerLabel, styles.labelColor]}>Acceder</Text>
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
    borderRadius: 10
  }
}); 