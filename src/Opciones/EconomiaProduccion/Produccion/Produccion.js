import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Alert
} from 'react-native';

const Produccion = (props) => {
  const { 
    navegarEconomia
  } = props; 
  return (
    <>
    <Text>Componente Produccion</Text>
    <Button
      title="Ir a economia"
      onPress={navegarEconomia}
    />
    </>
  );
}


const styles = StyleSheet.create({

});

export default Produccion;