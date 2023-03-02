import React from 'react';
import Welcome from './pages/Welcome';
import AudioBuzz from './pages/AudioBuzz';
import Works from './pages/Works';
import About from './pages/About';
import Petential from './pages/Petential';
import Bravoo from './pages/Bravoo';
import Halloween from './pages/Halloween';
import Karaoke from './pages/Karaoke';
import Lsc from './pages/Lsc';
import Hiretech from './pages/Hiretech';
import Weather from './pages/Weather';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//const mainBg = { backgroundImage: 'url(' + require('./styles/images/main.png') + ')', backgroundRepeat: 'no-repeat', backgroundSize:'cover' };
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/danny-suazo-portfolio" element={<Welcome />} exact />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Works />} />
          <Route path="/AudioBuzz" element={<AudioBuzz />} />
          <Route path="/Petential" element={<Petential />} />
          <Route path="/Bravoo" element={<Bravoo />} />
          <Route path="/Halloween" element={<Halloween />} />
          <Route path="/Karaoke" element={<Karaoke />} />
          <Route path="/Lsc" element={<Lsc />} />
          <Route path="/Hiretech" element={<Hiretech />} />
          <Route path="/Weather" element={<Weather />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
