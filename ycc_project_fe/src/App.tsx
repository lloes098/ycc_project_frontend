import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import DormitoryMain from './pages/Dormitory/DormitoryMain';
import Address from './pages/Dormitory/Address';
import Map from './pages/Dormitory/Map';
import Facility from './pages/Dormitory/Facility';
import FacilityDetail from './pages/Dormitory/FacilityDetail';
import Time from './pages/Dormitory/Time';
import Preview from './pages/Dormitory/Preview';
import Friends from './pages/Dormitory/Friends';
import Matching from './pages/Dormitory/Matching';
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
        <Route path="/facility" element={<Facility />} />
        <Route path="/facility/:id" element={<FacilityDetail />} />
        <Route path="/time" element={<Time />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/matching" element={<Matching />} />
      </Routes>
    </Router>
  );
}

export default App;
