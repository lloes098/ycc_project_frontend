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
import Chat from './pages/Dormitory/Chat';
import Location from './pages/Dormitory/Location';
import Packing from './pages/Dormitory/Packing'
import RoommateSpace from './pages/Dormitory/RoommateSpace';
import Mypage from './pages/Dormitory/MyPage'
import './App.css';
import HelperMain from './pages/Dormitory/HelperMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<DormitoryMain />} />
        <Route path="/address" element={<Address />} />
        <Route path="/map" element={<Map />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/facility/:id" element={<FacilityDetail />} />
        <Route path="/time" element={<Time />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/location" element={<Location />} />
        <Route path="/checklist" element={<Packing />} />
        <Route path="/roommate" element={<RoommateSpace />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/dormitory" element={<HelperMain />} />
      
      </Routes>
    </Router>
  );
}

export default App;
