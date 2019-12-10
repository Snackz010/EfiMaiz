import React,{Component} from 'react';
import Produccion from './Produccion';

class ContenedorProduccion extends Component {
  constructor(props){
    super(props);
    this.state = {
      numGranosFilaMazorca: '',
      numFilasMazorca: '',
      numMazorcasPlanta: '',
      numPlantasSurco: '',
      numSurcosManzana: '',
      numManzanas: ''
    }
  }

  eventoNumGranosFilaMazorca = (granosFila)=> {
    this.setState({
      numGranosFilaMazorca: granosFila
    });
  }

  eventoNumFilasMazorca = (filasMazorca)=> {
    this.setState({
      numFilasMazorca: filasMazorca
    });
  }

  eventoNumMazorcasPlanta = (mazorcasPlanta)=> {
    this.setState({
      numMazorcasPlanta: mazorcasPlanta
    });
  }

  eventoNumPlantasSurco = (plantasSurco)=> {
    this.setState({
      numPlantasSurco: plantasSurco
    });
  }

  eventoNumSurcosManzana = (surcosManzana)=> {
    this.setState({
      numSurcosManzana: surcosManzana
    });
  }

  eventoNumManzanas = (manzanas)=> {
    this.setState({
      numManzanas: manzanas
    });
  }

  navegarEconomia = () => {
    const {navigation} = this.props;
    navigation.navigate('Economia');
  }

  render(){
    const {
      numGranosFilaMazorca,
      numFilasMazorca,
      numMazorcasPlanta,
      numPlantasSurco,
      numSurcosManzana,
      numManzanas
    } = this.state;
    return(
      <Produccion
        eventoNumGranosFilaMazorca={this.eventoNumGranosFilaMazorca}
        eventoNumFilasMazorca={this.eventoNumFilasMazorca}
        eventoNumMazorcasPlanta={this.eventoNumMazorcasPlanta}
        eventoNumPlantasSurco={this.eventoNumPlantasSurco}
        eventoNumSurcosManzana={this.eventoNumSurcosManzana}
        eventoNumManzanas={this.eventoNumManzanas}
        numGranosFilaMazorca={numGranosFilaMazorca}
        numFilasMazorca={numFilasMazorca}
        numMazorcasPlanta={numMazorcasPlanta}
        numPlantasSurco={numPlantasSurco}
        numSurcosManzana={numSurcosManzana}
        numManzanas={numManzanas}
        navegarEconomia={this.navegarEconomia}
      />
    );
  }
}
export default ContenedorProduccion;