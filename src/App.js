import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Service from './Components/Service';
import Workshop from './Components/Workshop';
import Login from './Components/login';
import Signup from './Components/signup'
import './Images/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;
