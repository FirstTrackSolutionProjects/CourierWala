import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Trc from './pages/Trc'
import Price from './pages/Price'
import Blog from './pages/Blog'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Faq from './pages/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Offers from './components/Offers'
import Mission from './components/Mission'
import Choosus from './components/Choosus'
import Info from './components/Info'
import Indust from './components/Indust'
import Clientsay from './components/Clientsay'
import './App.css'

// Home Page Composition
const Home = () => (
  <>
    <Header />
    <Services />
    <Offers />
    <Mission />
    <Choosus />
    <Info />
    <Indust />
    <Clientsay />
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      {/* Navbar stays static across all pages */}
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/trc" element={<Trc />} />
        <Route path="/price" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
         
      </Routes>
     
    </Router>
  )
}

export default App
