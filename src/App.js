import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home'
import About from './components/about/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route exact path='/about' element={<About />}>
        </Route>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
