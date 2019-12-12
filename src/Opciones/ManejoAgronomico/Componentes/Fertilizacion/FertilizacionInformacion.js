import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

const FertilizanteInformacion = (props) => {
  const tableHead=['Tipo', 'Cantidad', 'Momento', 'Aporque'];
  const tableData=[
    ['12-30-10 o 10-30-20', '2 qq / mz', 'En la siembra', 'No'],
    ['Urea', '3 qq / mz', '25 - 30 dds ', 'Sí'],
    ['Urea', '3 qq / mz', '25 - 30 dds ', 'Sí'],
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{uri:'https://www.fertiberia.com/media/605924/cabecera-maiz.jpg'}}/>
            <View style={{...styles.cardContent, ...styles.opacity}}>
              <View>
                <Text style={styles.title}>Fertilización</Text>
                <Text style={styles.subTitle}>Fertilización del cultivo del maíz</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.textDescription}>Al momento de la siembra, fertilice con una fórmula completa.</Text>
            <Text style={styles.textDescription}>Para los suelos del Pacífico de Nicaragua puede usar las fórmulas completas.</Text>
            <Text style={styles.title3}>Formula completa: 12 - 30 - 10</Text>
            <Text style={styles.textDescription}>Según el resultado del análisis de suelos se deben realizar las aplicaciones.</Text>
            <Text style={styles.textDescription}>Además del uso de abonos orgánicos. Incluir la cantidad requerida de abono orgánico y momento de aplicación (2 libras por metro lineal)</Text>
            <Text style={styles.textDescription}>En la siguiente tabla podemos encontrar las cantidades de fertilizantes:</Text>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} textStyle={styles.text}/>
              </Table>
            </View>
            <Text style={styles.textDescription}>La abreviación <Text style={styles.title2}>dds</Text> quiere decir días después de la siembra.</Text>
            <Text style={styles.textDescription}><Text style={styles.title2}>Aporque:</Text> consiste en acumular suelo alrededor de la base de la planta para favorecer el anclaje y promover el desarrollo de raíces adventicias.</Text>
            <Image style={styles.cardImage} source={{uri:'https://www.uaem.mx/gacetavirtual/uploads/posts/aporque-de-experimento-maiz-pozolero-2-59a46ca0eb72a.jpg'}}/>
            <Text style={styles.title3}>Abonos verdes para el cultivo de maíz</Text>
            <Text style={styles.title2}>¿Qué son los abonos verdes?</Text>
            <Text style={styles.textDescription}>Son plantas que producen vainas y que se siembran principalmente por su capacidad de abonar la tierra, tienen una capacidad especial para fijar nitrógeno que es elemento importante para mantener las plantas verdes.</Text>
            <Text style={styles.title2}>¿Cómo se pueden sembrar abonos verdes con maíz?</Text>
            <Text style={styles.textDescription}>La manera de combinar los abonos verdes con el maíz depende mucho del número de meses de lluvia y la época de siembra de maíz en el lugar. En general, hay cuatro posibles combinaciones:</Text>
            <Text style={styles.title3}>El asocio entre maíz y abonos verdes de ciclo corto 8-12 semanas (Frijol Mungo y Alasín, leguminosas que se pueden comer)</Text>
            <Text style={styles.textDescription}>El maíz y estos abonos verdes se siembran en el mismo momento. Los abonos verdes no dejan crecer la maleza y dan su cosecha a los 50-70 días. El maíz se queda solo hasta la cosecha</Text>
            <Text style={styles.title3}>El asocio entre el maíz y abonos verdes de ciclo largo de 3 a 6 meses (Caballero, Canavalia y Mucuna)</Text>
            <Text style={styles.textDescription}>El abono verde se siembra de los 20 a 30 días después de la siembra del maíz, para que produzca cobertura y abono durante el asocio. Si no hay siembra de postrera o de apante, los abonos verdes siguen creciendo después de la cosecha del maíz. Al final se secan o se eliminan con una chapoda. Esto es una manera de abonar el suelo, se agrega materia orgánica al terreno, resulta en tierra más suelta y esto mejora las cosecha </Text>
            <Text style={styles.title3}>Los abonos verdes en rotación con el maíz</Text>
            <Text style={styles.textDescription}>Dependiendo del número de meses de lluvia, el abono verde se siembra solo: De dos a cuatro meses antes de la siembra de maíz los de ciclo corto. Y posterior al maíz los de ciclo largo.</Text>
            <Text style={styles.title3}>Los abonos verdes como arbustos en barreras vivas.</Text>
            <Text style={styles.textDescription}>Sembrados en curva de nivel o en bandas, los arbustos sirven de barrera viva contra la erosión. En el momento de la poda, las ramas y hojas podadas se usan como abono </Text>
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

export default FertilizanteInformacion;