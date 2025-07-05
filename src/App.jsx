import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'

import ExplorePage from './components/Explorepage'

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

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App