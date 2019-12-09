import React,{Component} from 'react';
import Economia from './Economia';

class ContenedorEconomia extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <Economia/>
    );
  }
}
export default ContenedorEconomia;