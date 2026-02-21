
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {

  
  

  return (
    <>
     
     
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
