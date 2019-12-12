import React,{Component} from 'react';
import Inicio from '../Componentes/Inicio';
import firebase from 'react-native-firebase'
import { BackHandler,ToastAndroid } from 'react-native';


class ContenedorInicio extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    //Método temporal para desloguearse de efimaiz, esto irá luego en el perfil usuario
    LogOut = () => {
        firebase.auth().signOut().then(success =>{
            //Especificar el redireccionamiento al LogIn
            console.log("Esta función está siendo pasada correctamente"),
            this.irLogIn();
        });
        }

    irLogIn = () => {
        const { navigation } = this.props;
        navigation.navigate('logSign');
    }
    

    render(){
        const {navigation} = this.props;
        return(
            <Inicio
             navigation={navigation}
             navigation={navigation}
             LogOut = {this.LogOut}
            />
        );
    }
}

export default ContenedorInicio;