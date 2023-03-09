import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import InfoMovie from './Pages/InfoMovie/InfoMovie';
import Results from './Pages/Results/Results';

function App() {
 
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Results />} />
            <Route path="/movie/:id" element={<InfoMovie />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
