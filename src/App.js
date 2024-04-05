import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Coffee from './components/Products';
import Honey from './components/Honey';
import About from './components/About';
import Footer from './components/Footer';
import Whychooseus from './components/Whychooseus'
import Menu from './components/Menu';
// Import NotFound if you have it
// import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="honey" element={<Honey />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="whychooseus" element={<Whychooseus />} />
          {/* Uncomment the following route if you have NotFound component */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
