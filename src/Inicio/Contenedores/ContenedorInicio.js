import React,{Component} from 'react';
import Inicio from '../Componentes/Inicio';
import { BackHandler,ToastAndroid } from 'react-native';

class ContenedorInicio extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
        if(this.is){

        }
    }

    render(){
        const {navigation} = this.props;
        return(
            <Inicio navigation={navigation}/>
        );
    }
}

export default ContenedorInicio;