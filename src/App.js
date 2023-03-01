import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home'
import About from './components/about/about'
import Shop from './components/shop/shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/product_details/product_details';
import LoginForm from './components/login_form/login_form';
import RegistrationForm from './components/registration_form/registration_form';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route exact path='/about' element={<About />}>
        </Route>
        <Route exact path='/shop' element={<Shop />}>
        </Route>
        <Route exact path='/product' element={< ProductDetails />}>
        </Route>
        <Route exact path='/login' element={< LoginForm />}>
        </Route>
        <Route exact path='/register' element={< RegistrationForm />}>
        </Route>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
