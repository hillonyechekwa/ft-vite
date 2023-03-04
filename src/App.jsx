import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Welcome from './welcome'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import Projects from './Projects'
import NotFound from './404'
import Home from './Home'



function App() {
  

  return (
    
    <div className="App">
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App