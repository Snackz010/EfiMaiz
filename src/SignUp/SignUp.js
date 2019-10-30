import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  Picker,
  Alert
} from 'react-native';

var hidde;
const SignUp = (props) => {

    const {valorDepto, changeDepto, changeOcupacion, valorOcupacion} = props;
    
    hidde = (valorOcupacion==='Productor')?'flex':'none';

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#000000'/>
        <ImageBackground source={require('../assets/fondo3.jpg')} style={styles.image}>
          <View style={styles.center}>
            <View style={styles.body}>
              <ScrollView>
                <View>
                  <View style={styles.center}>
                    <Image style={styles.logo} source={require('../assets/logo.png')}/>
                  </View>
                  <View >
                    <Text style={styles.title}>Regitro</Text>
                    <Text style={styles.text}>Ingrese sus datos para registrarse.</Text>
                    <Text style={styles.textSubTitle}></Text>
                  </View>
                  <View style={styles.center}>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Nombre'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Apellido'></TextInput>
                    <TextInput keyboardType={"numeric"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Teléfono'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Correo'></TextInput>
                    <View>
                      <Picker style={styles.selectInput} selectedValue={valorOcupacion} onValueChange={changeOcupacion}>
                        <Picker.Item label="Ocupación" value="" />
                        <Picker.Item label="Estudiante" value="Estudiante" />
                        <Picker.Item label="Docente" value="Docente" />
                        <Picker.Item label="Productor" value="Productor" />
                      </Picker>
                    </View>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={{...styles.textInput,...styles.hidden}} placeholder='Nombre de la Finca'></TextInput>
                    <TextInput keyboardType={"numeric"} placeholderTextColor="#c3c3c3" autoCapitalize={'words'} style={styles.textInput} placeholder='Coordenadas'></TextInput>
                    <View>
                      <Picker style={styles.selectInput} selectedValue={valorDepto} onValueChange={changeDepto}>
                        <Picker.Item label="Departamento" value="" />
                        <Picker.Item label="Boaco" value="Boaco" />
                        <Picker.Item label="Carazo" value="Carazo" />
                        <Picker.Item label="Chinandega" value="Chinandega" />
                        <Picker.Item label="Chontales" value="Chontales" />
                        <Picker.Item label="Costa Caribe Norte" value="Costa Caribe Norte" />
                        <Picker.Item label="Costa Caribe Sur" value="Costa Caribe Sur" />
                        <Picker.Item label="Estelí" value="Estelí" />
                        <Picker.Item label="Granda" value="Granda" />
                        <Picker.Item label="Jinotega" value="Jinotega" />
                        <Picker.Item label="León" value="León" />
                        <Picker.Item label="Madriz" value="Madriz" />
                        <Picker.Item label="Managua" value="Managua" />
                        <Picker.Item label="Masaya" value="Masaya" />
                        <Picker.Item label="Matagalpa" value="Matagalpa" />
                        <Picker.Item label="Nueva Segovia" value="Nueva Segovia" />
                        <Picker.Item label="Rio San Juan" value="Rio San Juan" />
                        <Picker.Item label="Rivas" value="Rivas" />
                      </Picker>
                    </View>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" style={styles.textInput} placeholder='Usuario'></TextInput>
                    <TextInput keyboardType={"default"} placeholderTextColor="#c3c3c3" secureTextEntry={true} style={styles.textInput} placeholder='Contraseña'></TextInput>
                  </View>
                </View>
                <View style={styles.button}>
                  <TouchableHighlight style={[styles.buttonContainer, styles.logInButton]}>
                    <Text style={styles.signUpText}>Ingresar</Text>
                  </TouchableHighlight>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
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
  logInButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 30,
    color: 'white',
    width: 300,
    textAlign: 'left'
  },
  selectInput: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 30,
    color: '#bbb',
    width: 300,
  },
  text: {
    fontSize: 16, 
    color: '#eee',
    textAlign: 'center',
  },
  text2: {
    fontSize: 12, 
    color: '#9ed4a3',
    textAlign: 'center',
  },
  textContainer: {
    fontSize: 12, 
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubTitle: {
    fontSize: 16, 
    textAlign: 'justify', 
    color: 'rgba(255, 255, 255, .4)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  body: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    width: '100%',
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 125,
    marginTop: 50
  },
  hidden:{
    display:hidde
  }
});

export default SignUp;
