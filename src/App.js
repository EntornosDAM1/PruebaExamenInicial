import React from 'react';
import './style.css';
import BarraNavegacion from './components/BarraNavegacion';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './style.css';

//Importar componentes
import {MenuElements} from './data/MenuElements';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      <BarraNavegacion />
      <h1>Desarrollo de Interfaces: Examen React.js </h1>
      <p>
        Resuelve los ejercicios propuestos en los distintos apartados de la
        barra de navegación. Para ello, haz un fork de este repositorio desde tu
        cuenta de Github y súbelo a la tarea de examen. El repositorio debe
        tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
        son los tuyos.
      </p>
      {MenuElements.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
      {/*
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
      */}
      </Router>
    </>
  );
}