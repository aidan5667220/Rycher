// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hometest from './pages/Hometest.js';
import TheIdea from './pages/TheIdea.js';
import TheWhy from './pages/TheWhy';
import TheCreator from './pages/TheCreator';
import NotFound from './pages/NotFound.js';
import './index.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hometest />} />
      <Route path="/theidea" element={<TheIdea />} />
      <Route path="/thewhy" element={<TheWhy />} />
      <Route path="/thecreator" element={<TheCreator />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;





