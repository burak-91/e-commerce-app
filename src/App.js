import React from 'react'
import Home from './pages/Home/Home'
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import { Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  )
}

export default App