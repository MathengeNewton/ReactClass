import React from 'react';
import './App.css';
import About from './pages/About.tsx';
import Login from './pages/login.tsx';
import HomeComponent from './pages/index.tsx';
import Layout from "./components/Layout.tsx"
import { Routes, Route } from 'react-router-dom';

      // create a logout page and import it here
      // Add logic to reset the global state to default once a user clicks on log out
      // In the logout page have the user confirm they want to log out. This step clears the global state and sets it back to default isLoggedIn: false
      //

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
