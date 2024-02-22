import React from 'react';
import './App.css';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contacto from './Component/Contacto/Contacto'

function App() {
  return (
    <div className="App">
      <About/>
      <Portfolio/>

      <Contacto/>
    </div>
  );
}
export default App;
