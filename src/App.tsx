import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import SignupPage from './pages/SignupPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/*<!-- Navigation -->*/}
      <Navbar />

      {/* Page routing */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> 


      {/* <!-- Footer --> */}
      <Footer />

    </>
  );
}

export default App
