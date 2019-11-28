import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import AppStack from './AppStack/AppStack.js'; 

class ContenedorApp extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <AppStack />
        );
    }

}

export default ContenedorApp;