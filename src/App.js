import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Coffee from './components/Products';
import Honey from './components/Honey';
import About from './components/About';
import Whychooseus from './components/Whychooseus'
import Menu from './components/Menu';
import PrivacyPolicy from './components/PrivacyPolicy'
import ShippingPolicy from './components/ShippingPolicy'
import CancellationPolicy from './components/CancellationPolicy'
import QualityProduct from './components/QualityProduct'
import ProtectYourDetails from './components/ProtectYourDetails'
import Termsandconditions from './components/Termsandconditions'
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
          <Route path="/Menu/honey" element={<Honey />} />
          <Route path="/Menu/coffee" element={<Coffee />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="whychooseus" element={<Whychooseus />} />
          <Route path="/termsandconditions" element={<Termsandconditions />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/shippingpolicy" element={<ShippingPolicy />}></Route>
        <Route path="/cancellationpolicy" element={<CancellationPolicy />}></Route>
        <Route path="/qualityproduct" element={<QualityProduct />}></Route>
        <Route path="/protectyourdetails" element={<ProtectYourDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
