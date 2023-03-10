import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Bootstrap CSS

import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
