/**
 * @format
 */

import 'react-native';
import React from 'react';
import { 
  evaluarSuelo,
  evaluarClima,
  calcularFertilizante,
  calcularQuintales,
  calcularVenta,
  calcularInversion,
  determinarResultados,
  getFirebaseDocument
} from '../pruebasComponentes'

test('Evaluar eficiencia del suelo para el cultivo de maiz', () => {
  const valores = {
    pickerSelection:'Franco',
    PH:'6.6'
  }
  expect(evaluarSuelo(valores)).toBe(6);
});

test('Evaluar eficiencia del clima para el cultivo de maiz', () => {
  const valoresC = {
    Temperatura:'23',
    Altitud:'350',
    Precipitacion:'850'
  }
  expect(evaluarClima(valoresC)).toBe(9);
});

test('Calcular cantidad de fertilizante', () => {
  const valoresF = {
    cantidadManzana:'20', 
    pickerSelection:'12-30-10',
  }
  expect(calcularFertilizante(valoresF)).toBe(40);
});
test('Calcular rendimiento de producción quintales', () => {
  const valoresF = {
    numGranosFilaMazorca:'20',
    numFilasMazorca:'20',
    numMazorcasPlanta:'10',
    numPlantasSurco:'15',
    numSurcosManzana:'10',
    numManzanas:'3'
  }
  expect(calcularQuintales(valoresF)).toBe(39.85);
});

test('Calcular rendimiento de producción Venta quintales', () => {
  const valoresF = {
    numQuintalesCosechados:'39.85', 
    precioActual:'550'
  }
  expect(calcularVenta(valoresF)).toBe(21917);
});

test('Calcular rendimiento de producción Inversion', () => {
  const valoresF = {
    numQuintalesSembrados:'3', 
    precioQuintalesSembrados:'600'
  }
  expect(calcularInversion(valoresF)).toBe(1800);
});

test('Calcular rendimiento de producción Ganancia', () => {
  const valoresF = {
    numQuintalesSembrados:'10',
    precioQuintalesSembrados:'500', 
    numQuintalesCosechados:'200', 
    precioActual:'500'
  }
  expect(determinarResultados(valoresF)).toBe('Ganancia');
});

test('Extraer Datos para grafico 1', () => {
  const valoresF = {
    labels: ["2016", "2017", "2018", "2019",],
    datasets: [
      {
        data: [42.5 ,47.39 ,21.8 ,6025.68]
      }
    ]
  }
  expect(getFirebaseDocument("Bob@gmail.com")).toBe(valoresF);
});
