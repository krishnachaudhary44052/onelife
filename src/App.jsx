import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import ComingSoon from './components/ComingSoon';
import WhatWeOffer from './Pages/WhatWeOffer';
import HowSeniorsBenefits from './Pages/HowSeniorsBenefits';
import WhoGain from './Pages/WhoGain';
import FAQ from './components/FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from './components/ScrollToTop';
import { Router } from 'lucide-react';


function App() {


  return (
    <ScrollTop>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/coming' element={<ComingSoon/>}/>
       <Route path='/WhatWeOffer' element={<WhatWeOffer/>}/>
        <Route path='/HowSeniorsBenefits' element={<HowSeniorsBenefits/>}/>
        <Route path='/Faqs' element={<FAQ/>}/>
         <Route path='/WhoGain' element={<WhoGain/>}/>

      
    </Routes>
    </ScrollTop>
    
  )
}

export default App