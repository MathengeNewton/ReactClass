import React from 'react';
import './App.css';
import About from './pages/About.tsx';
import Login from './pages/login.tsx';
import HomeComponent from './pages/index.tsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
