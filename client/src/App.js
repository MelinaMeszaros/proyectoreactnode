import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import InfoMovie from './Pages/InfoMovie/InfoMovie';
import Results from './Pages/Results/Results';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
 
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Results />} />
            <Route path="/movie/:id" element={<InfoMovie />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
