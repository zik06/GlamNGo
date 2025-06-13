// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import CustomNavbar from './assets/components/CustomNavbar';
import Carousel_Part from './assets/components/Carousel_Part';
import Cards_Part from './assets/components/Cards_Part';
import Footer from './assets/components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function HomePage() {
  return (
    <>
      <CustomNavbar />
      <Carousel_Part />
      <Cards_Part />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* You can add more routes like this */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
