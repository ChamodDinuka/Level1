import React from 'react';
import './App.css';
import Navbar from './component/navbar'
import Home from './component/home/home'
import Booking from './component/booking/bookign'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
