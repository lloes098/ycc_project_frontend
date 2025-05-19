import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import DormitoryMain from './pages/Dormitory/DormitoryMain';
import Address from './pages/Dormitory/Address';
import Map from './pages/Dormitory/Map';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dormitory" element={<DormitoryMain />} />
        <Route path="/address" element={<Address />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
