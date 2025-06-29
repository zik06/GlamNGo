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
import Wishlist from './assets/components/Wishlist';
import KidsPage from './assets/components/KidsPage';
import JewelryPage from './assets/components/JewelryPage';
import BeautyPage from './assets/components/BeautyPage';
import Signup from './assets/components/Signup';
import Login from './assets/components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './assets/components/ProductDetails';
import Cart from './assets/components/Cart';
import { CartProvider } from './assets/context/CartContext';
import SearchResults from './assets/components/SearchResults';
import { WishlistProvider } from './assets/context/WishlistContext';
import Buy from './assets/components/Buy';

function App() {
  return (
    <WishlistProvider>
    <CartProvider>
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<><Carousel_Part /><Cards_Part /></>} /> 
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<Wishlist />} /> 
        <Route path="/kids" element={<KidsPage />} /> 
        <Route path="/jewelry" element={<JewelryPage />} /> 
        <Route path="/beauty" element={<BeautyPage />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
    </WishlistProvider>
  );
}

export default App
