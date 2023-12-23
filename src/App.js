import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Service from './Components/Service';
import Workshop from './Components/workshop';
import './Images/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <Routes>
      <Header />
      <Service/>
      
    </Routes>
  );
}

export default App;
