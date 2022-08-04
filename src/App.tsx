import React from 'react';
import './App.css';
import Navbar from './component/navbar'
import Home from './component/home/home'
import Booking from './component/booking/bookign'
import ThankPage from './component/booking/thankPage'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/thank' element={<ThankPage />} />
      </Routes>
    </div>
  );
}

export default App;
