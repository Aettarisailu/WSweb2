import Home from './components/Home';
import Header from './components/Header'
import Coffee from './components/Products'
import Honey from './components/Honey'
import {  Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="honey" element ={<Honey/>}></Route>
        <Route path="Coffee" element ={<Coffee/>}></Route>
        {/* <Route path="/notfound" element ={<NotFound/>}></Route>*/}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
