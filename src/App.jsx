// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import CustomNavbar from './assets/components/CustomNavbar';
import Carousel_Part from './assets/components/Carousel_Part';
import Cards_Part from './assets/components/Cards_Part';
import Footer from './assets/components/Footer';

 function App() {
  return (
    <div>
      <CustomNavbar />
      <Carousel_Part />
      <Cards_Part />
      <Footer />
    </div>
  );
}

export default App
