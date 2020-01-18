import firebase from 'react-native-firebase';

    //Metodos componente suelo

function evaluarSuelo (props){
        const { pickerSelection, PH } = props;
        var contador = 0;

        if(pickerSelection === 'Franco' || pickerSelection === 'Arena Franca'||pickerSelection === 'Arenoso'){
            contador += 3;
        }else if(pickerSelection === 'Franco Limoso'||pickerSelection === 'Franco Arcilloso'||pickerSelection === 'Arcilla Fina' || pickerSelection === 'Franco Pesada'){
            contador += 2;
        }

        if(parseFloat(PH) >= 6.0 && parseFloat(PH) <= 7.5){
            contador += 3;
        }else if(parseFloat(PH) >= 2.0 && parseFloat(PH) <= 5.9){
            contador += 2;
        }else if(PH <= 1.9){
            contador -= 3; 
        }
        
        
        return contador;
}

function evaluarClima(props) {
        const {Temperatura, Altitud, Precipitacion } = props;
        //const {Temperatura, Altitud, Precipitacion } = props;

        var contador = 0;

        if(parseInt(Temperatura)>=19 && parseInt(Temperatura)<=24){
            contador += 3;
        }else if((parseInt(Temperatura)>24 && parseInt(Temperatura)<=28)||(parseInt(Temperatura)>=15 && parseInt(Temperatura)<=18)){
            contador += 2;
        }else if(parseInt(Temperatura)>=29 || parseInt(Temperatura)<= 18){
            contador -= 3;
        }

        if(parseInt(Precipitacion)>=700 && parseInt(Precipitacion)<= 850){
            contador += 3;
        }else if((parseInt(Precipitacion)>=500 && parseInt(Precipitacion)<=700)||(parseInt(Precipitacion)>=850 && parseInt(Precipitacion)<=1000)){
            contador += 2;
        }else if(parseInt(Temperatura)<=500 || parseInt(Temperatura)>=1000){
            contador -= 3;
        }

        if(parseInt(Altitud)>=200 && parseInt(Altitud)<= 800){
            contador += 3;
        }else if((parseInt(Altitud)>=100 && parseInt(Altitud)<=199)||parseInt(Altitud)>=801 &&parseInt(Altitud)<=1000){
            contador += 2;
        }else if(parseInt(Altitud)>=0 && parseInt(Altitud)< 100 || parseInt(Altitud)>1000){
            contador -= 3;
        }
        return contador;
}

function calcularFertilizante(props){
    const { cantidadManzana, pickerSelection } = props;
    var quintales = 0;
    var cantidadFertilizante=0;
    if(cantidadManzana=='' || pickerSelection==='Tipo de Fertilizante'){
        Alert.alert('Advertencia','¡Debes llenar todos lo campos!');
    }
    else{
      if(pickerSelection==='12-30-10' || pickerSelection==='10-30-20'){
        quintales=2;
      }
      if(pickerSelection==='Urea'){
        quintales=3;
      }
        cantidadFertilizante = ((parseInt(cantidadManzana)*quintales));
      
    }
    return cantidadFertilizante
}

function calcularQuintales(props){
    const {numGranosFilaMazorca, numFilasMazorca, numMazorcasPlanta, numPlantasSurco, numSurcosManzana, numManzanas} = props;
    var quintales = ((numGranosFilaMazorca * numFilasMazorca)*numMazorcasPlanta)*numPlantasSurco;
    quintales = (quintales * numSurcosManzana)*numManzanas;
    return parseInt(((quintales/271)*0.60))/100;
}

function calcularVenta (props){
    const { numQuintalesCosechados, precioActual } = props;
    return parseInt(numQuintalesCosechados * precioActual);
}

function calcularInversion (props){
    const {numQuintalesSembrados, precioQuintalesSembrados}=props;
    return (numQuintalesSembrados * precioQuintalesSembrados);
}

function determinarResultados(props){
    const {numQuintalesSembrados, precioQuintalesSembrados, numQuintalesCosechados, precioActual}=props;
    const ganancia = numQuintalesCosechados * precioActual;
    const inversion = numQuintalesSembrados * precioQuintalesSembrados;
    var valor;

    if(ganancia > inversion){
      valor = 'Ganancia';
    }else if(inversion > ganancia){
      valor = 'Perdida'
    }else{
      valor = 'Inversión recuperada';
    }
    return valor;
  }


export { 
    evaluarSuelo, 
    evaluarClima,
    calcularFertilizante,
    calcularQuintales,
    calcularVenta,
    calcularInversion,
    determinarResultados,
    getFirebaseDocument
};