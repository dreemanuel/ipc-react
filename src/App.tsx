import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import SignupPage from './pages/SignupPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import RootLayout from './components/layout/RootLayout'
import { CustomerTypeProvider, CustomerTypeIndicator } from './components/providers/CustomerTypeProvider'
import ErrorBoundary from './components/common/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CustomerTypeProvider>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ProductsPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          {/* Development indicator - remove in production */}
          <CustomerTypeIndicator />
        </CustomerTypeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App
