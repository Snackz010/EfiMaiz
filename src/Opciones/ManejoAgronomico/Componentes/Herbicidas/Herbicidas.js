import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Herbicidas = (props) => {

  const {
    pickerDisplayed,
    pickerValues,
    togglePicker,
    setPickerValue,
    pickerSelection,
    dosis,
  } = props;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <View style={styles.center}>
        <View style={styles.body}>
          <ScrollView>
            <View>
              <View >
                <Text style={styles.title}>Herbicidas</Text>
                <Text style={styles.text}>Dosificación de herbicidas para el cultivo del maíz.</Text>
              </View>
              <View style={styles.center}>
                <View style={styles.button2}>
                  <TouchableHighlight onPress={togglePicker} style={[styles.buttonContainer2, styles.colorPickerButton]}>
                    <Text style={styles.buttonText}>{pickerSelection}</Text>
                  </TouchableHighlight>
                </View>
                <Modal visible={pickerDisplayed} animationType={"slide"} transparent={true}>
                  <View style={styles.modal}>
                    <Text style={styles.textOpacity}>Selecione la calidad del suelo</Text>
                    { pickerValues.map((value, index) => {
                      return <TouchableHighlight key={index} onPress={() => {setPickerValue(value.value, value.dosis)}} style={styles.itemText}>
                                <Text>{ value.title }</Text>
                              </TouchableHighlight>
                    })}
                    <TouchableHighlight onPress={togglePicker} style={styles.buttonCancel}>
                      <Text style={styles.textOpacity}>Cancelar</Text>
                    </TouchableHighlight>
                  </View>
                </Modal>
                <View style={styles.box}>
                  <Text style={styles.text}>Se recominenda usar</Text>
                  <Text style={styles.title2}>{dosis}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    borderRadius:20,
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 16, 
    textAlign: 'center',
  },
  textContainer: {
    fontSize: 12, 
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubTitle: {
    fontSize: 24,
    marginTop: 10,
    textAlign: 'justify', 
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  title2: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    color: 'darkgreen'
  },
  body: {
    width: '100%',
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer2: {
    height:75,
    display:'flex',
    justifyContent: 'center',
    padding: 10,
    width:300,
    borderRadius:10,
  },
  colorPickerButton: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modal: {
    margin: 20, padding: 20,
    backgroundColor: '#efefef',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute'
  },
  textOpacity: {
    color: '#999' 
  },
  itemText: { 
    paddingTop: 4,
    paddingBottom: 4 
  },
  buttonCancel: {
    paddingTop: 4, 
    paddingBottom: 4 
  },
  box:{
    backgroundColor: 'lightgreen',
    height: 200,
    width: 300,
    borderRadius: 10,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Herbicidas;