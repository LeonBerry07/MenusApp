import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import Menu from './components/Menu/Menu';
import datos from './Datos De Prueba.json';
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Cards datos={datos} />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/menusemanal" element={<Menu/>} />
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
