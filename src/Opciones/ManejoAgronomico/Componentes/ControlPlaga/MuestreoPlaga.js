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

const muestreoPlaga = (props) => {
    const plaga = {
        Nombre:props.navigation.getParam('Nombre'),
        muestreoPlaga:props.navigation.getParam('muestreoPlaga')
    }
    return(
        <View>
            <Text>
                Plaga: {plaga.Nombre}
            </Text>
            <Text>
                Muestreo: {plaga.muestreoPlaga}

            </Text>
        </View>
    );
    
}

export default muestreoPlaga;