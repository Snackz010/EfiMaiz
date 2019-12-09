import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const Produccion = (props) => {
  return (
    <>
    <Text>Componente Produccion</Text>
    <Button
      title="Ir a economia"
      onPress={() => Alert.alert('Hace el enrutamiendo hpta,  NO VAS A IR A COMALAPA ¡ENTENDELO!')}
    />
    </>
  );
}


const styles = StyleSheet.create({

});

export default Produccion;