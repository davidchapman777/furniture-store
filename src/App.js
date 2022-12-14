import React from 'react'
import { BrowserRouter as Router,Routes,   Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {HomePage, SingleProductsPage, CartPage, CheckoutPage, ErrorPage, PrivateRoute, ProductsPage, AboutPage, AuthWrapper} from './pages'

function App() {
  return (
    <AuthWrapper>

    <Router>
      <Navbar />
      <Sidebar/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:id' element={<SingleProductsPage />} />
          <Route path='checkout' element={
            <PrivateRoute>
              <CheckoutPage/>
            </PrivateRoute>
          } />
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AuthWrapper>
  )
}

export default App
