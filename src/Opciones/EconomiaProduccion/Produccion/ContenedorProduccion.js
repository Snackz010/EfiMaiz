import React,{Component} from 'react';
import Produccion from './Produccion';
import {Alert} from 'react-native';

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
    const{
      numGranosFilaMazorca,
      numFilasMazorca,
      numMazorcasPlanta,
      numPlantasSurco,
      numSurcosManzana,
      numManzanas
    } = this.state;

    const ADatos = {
      numGranosFilaMazorca: numFilasMazorca,
      numFilasMazorca:numFilasMazorca,
      numMazorcasPlanta:numMazorcasPlanta,
      numPlantasSurco:numPlantasSurco,
      numSurcosManzana:numSurcosManzana,
      numManzanas:numManzanas
    }
    const {navigation} = this.props;
    if(numGranosFilaMazorca === '' || numFilasMazorca ==='' || numMazorcasPlanta && numPlantasSurco ==='' || numSurcosManzana ==='' 
    || numManzanas === ''){
      Alert.alert("Advertencia","Debes llenar todos los datos.")
    }else{
      navigation.navigate('Economia',ADatos);
    }
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