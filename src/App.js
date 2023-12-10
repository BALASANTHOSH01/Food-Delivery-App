import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conduct from './pages/Conduct';
import { Home } from './pages/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Navbar/Header';
import BottomNav from './components/Navbar/BottomNav';
import { Menu } from './pages/Menu';
import { LoginSignup } from './pages/LoginSignup';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';

import veg_banner from './Assets/images/Veg/veg_banner.jpg';
import nonveg_banner from './Assets/images/NonVeg/nonveg_banner.jpg';
import snacks_banner from './Assets/images/Snacks/snacks_banner.jpg';

import offer1 from './Assets/images/NonVeg/offer.jpg';
import offer2 from './Assets/images/Veg/offer.jpg';
import offer3 from './Assets/images/Snacks/offer.jpg';
import Login from './pages/Login.jsx';
import MenuList from './components/Navbar/MenuList/MenuList.jsx';



function App() {

  return (
    <div>

      <BrowserRouter>
      <header>
        <Header />
      </header>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/NonVeg' element={<Menu category='nonveg' offer={offer1} banner={nonveg_banner} />} />
          <Route path='/Veg' element={<Menu category='veg' offer={offer2} banner={veg_banner} />} />
          <Route path='/Snacks' element={<Menu offer={offer3} banner={snacks_banner} category="snacks" />} />

          <Route path='/product' element={<Product/>} >
            <Route path=':productid' element={<Product/>} />
          </Route>

          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Conduct' element={<Conduct category='conduct' />} />
          <Route path='/Signup' element={<LoginSignup/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/MenuList' element={<MenuList/>} />
        </Routes>
        <Footer />
        <BottomNav />
      </BrowserRouter>

    </div>

  );
}

export default App;

       