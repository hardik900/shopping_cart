import logo from './logo.svg';
import './App.css';
import Products from './Products'
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './Cart';
import Navbar from './Navbar';
import Error from './Error';
import SignUp from './SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/*" element={<Error />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Cart />
        <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
