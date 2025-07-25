import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';



import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'

import ExplorePage from './components/ExplorePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Featured/>
          </>
        }/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />


      </Routes>
      <Footer/>
    </Router>
  )
}



export default App