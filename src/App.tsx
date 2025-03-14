import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project10Units from './pages/Project10Units';
import Project12Units from './pages/Project12Units';
import Project15Units from './pages/Project15Units';
import CustomProject from './pages/CustomProject';

function App() {
  return (
    <div className="min-h-screen bg-matte font-montserrat text-ice">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project-10-units" element={<Project10Units />} />
        <Route path="/project-12-units" element={<Project12Units />} />
        <Route path="/project-15-units" element={<Project15Units />} />
        <Route path="/custom-project" element={<CustomProject />} />
      </Routes>
    </div>
  );
}

export default App;