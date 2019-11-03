/**
 * @format
 */

import 'react-native';
import React from 'react';
import ContenedorApp from '../src/App/ContenedorApp.js';
import LogIn from '../src/LogIn/LogIn.js';
import SignUp from '../src/LogIn/LogIn.js';

import Opciones from '../src/Opciones/Opciones.js'
import CaracterizacionSitio from '../src/Opciones/CaracterizacionSitio/CaracterizacionSitio.js'
import Agua from '../src/Opciones/CaracterizacionSitio/Agua/Agua.js'
import Suelo from '../src/Opciones/CaracterizacionSitio/Suelo/Suelo.js'
import Clima from '../src/Opciones/CaracterizacionSitio/Clima/Clima.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Componente ContenedorApp se renderiza correctamente', () => {
  const componente = renderer.create(<ContenedorApp />).toJSON();
  expect(componente).toMatchSnapshot();
});

it('Componente LogIn se renderiza correctamente', () => {
  const componente = renderer.create(<LogIn />).toJSON();
  expect(componente).toMatchSnapshot();
});

it('Componente SignUp se renderiza correctamente', () => {
  const componente = renderer.create(<SignUp />).toJSON();
  expect(componente).toMatchSnapshot();
});

//Componentes de opciones

it('Componente opciones se renderiza correctamente',()=>{
  const componente = renderer.create(<Opciones />).toJSON();
  expect(componente).toMatchSnapshot();
})

//Componentes de caracterizacion del sitio

it('Componente CaracterizacionSitio se renderiza correctamente', () => {
  const componente = renderer.create(<CaracterizacionSitio />).toJSON();
  expect(componente).toMatchSnapshot();
});

it('Componente Suelo de caracterización de sitio se renderiza correctamente', () => {
  const componente = renderer.create(<Suelo />).toJSON();
  expect(componente).toMatchSnapshot();
});

it('Componente Clima de caracterización de sitio se renderiza correctamente', () => {
  const componente = renderer.create(<Clima />).toJSON();
  expect(componente).toMatchSnapshot();
});

it('Componente Agua de caracterización de sitio se renderiza correctamente', () => {
  const componente = renderer.create(<Agua />).toJSON();
  expect(componente).toMatchSnapshot();
});