// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import CustomNavbar from './assets/components/CustomNavbar';
import Carousel_Part from './assets/components/Carousel_Part';
import Cards_Part from './assets/components/Cards_Part';
import Footer from './assets/components/Footer';
import MenPage from './assets/components/MenPage';
import WomenPage from './assets/components/WomenPage';
import ProfilePage from './assets/components/ProfilePage';
import WishlistPage from './assets/components/WishlistPage';
import KidsPage from './assets/components/KidsPage';
import JewelryPage from './assets/components/JewelryPage';
import BeautyPage from './assets/components/BeautyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<><Carousel_Part /><Cards_Part /></>} /> 
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} /> 
        <Route path="/kids" element={<KidsPage />} /> 
        <Route path="/jewelry" element={<JewelryPage />} /> 
        <Route path="/beauty" element={<BeautyPage />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
