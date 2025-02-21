// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TheIdea from './pages/TheIdea';
import TheWhy from './pages/TheWhy';
import TheCreator from './pages/TheCreator';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theidea" element={<TheIdea />} />
      <Route path="/thewhy" element={<TheWhy />} />
      <Route path="/thecreator" element={<TheCreator />} />
    </Routes>
  );
}

export default App;





