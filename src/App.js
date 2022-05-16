import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import CarRental from './Pages/Car Rental/CarRental';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Error from './Pages/Not Found/Error';
import Product from './Pages/Products/Product';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className='bg-black'>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CarRental" element={<CarRental />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
