import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Social from './pages/Social';
import Animation from './pages/Animation';
import Portfolio from './pages/Portfolio';
import CV from './pages/CV';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Animation />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
