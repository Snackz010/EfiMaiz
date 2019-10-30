import React, {Component} from 'react';
import SignUp from './SignUp';

export default class ContenedorSignUp extends Component{
  constructor(props){
    super(props)
    this.state= {
      valorDepto: '',
      valorOcupacion: ''
    }
  }

  render(){
    const {valorDepto, valorOcupacion} = this.state
    
    const changeDepto = (valorDepto) => {
      this.setState({ valorDepto: valorDepto })
    }

    const changeOcupacion = (valorOcupacion) => {
      this.setState({ valorOcupacion: valorOcupacion })
    }

    return(
      <SignUp valorDepto={valorDepto} valorOcupacion={valorOcupacion} changeDepto={changeDepto} changeOcupacion={changeOcupacion}/>
    )
  }

}