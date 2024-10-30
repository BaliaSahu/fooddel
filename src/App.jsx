import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
// import Shop from './pages/Shop/Shop'
import Shop from './pages/Shop/Shop.jsx'
import Footer from './components/footer/footer.jsx'
import ShopCategory from './pages/ShopCateg/ShopCategory.jsx'
import Product from './pages/product/Product.jsx'
import Cart from './pages/cart/Cart.jsx'
import ContactPage from './pages/contact/ContactPage.jsx'
function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/starter' element={<ShopCategory category="starter"></ShopCategory>}></Route>
          <Route path='/veg' element={<ShopCategory category="veg"></ShopCategory>}></Route>
          <Route path='/nonveg' element={<ShopCategory category="nonveg"></ShopCategory>}></Route>
          <Route path='/product' element={<Product></Product>}>
            <Route path=':productid' element={<Product></Product>}></Route>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
