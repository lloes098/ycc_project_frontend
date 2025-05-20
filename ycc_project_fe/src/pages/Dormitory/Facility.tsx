import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import './Facility.css';

interface Facility {
  id: string;
  name: string;
  type: string;
  hours: string;
}

const sinchonFacilities: Facility[] = [
  {
    id: 'nanumsamm-sinchon',
    name: '나눔샘',
    type: '학식',
    hours: '11:00 - 19:00'
  },
  {
    id: 'cafe-muak',
    name: '무악학사 카페',
    type: '카페',
    hours: '08:00 - 22:00'
  },
  {
    id: 'laundry-sinchon',
    name: '세탁실',
    type: '편의시설',
    hours: '24시간'
  },
  {
    id: 'gym-sinchon',
    name: '헬스장',
    type: '운동시설',
    hours: '06:00 - 23:00'
  }
];

const internationalFacilities: Facility[] = [
  {
    id: 'songdo1-cafeteria',
    name: '송도1학사 식당',
    type: '학식',
    hours: '11:00 - 19:00'
  },
  {
    id: 'songdo-cafe',
    name: '카페테리아',
    type: '카페',
    hours: '09:00 - 21:00'
  },
  {
    id: 'laundry-songdo',
    name: '코인세탁실',
    type: '편의시설',
    hours: '24시간'
  }
];

const FacilityList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sinchon' | 'international'>('sinchon');
  const navigate = useNavigate();
  
  const handleFacilityClick = (facilityId: string) => {
    navigate(`/facility/${facilityId}`);
  };

  return (
    <div className="facility-container">
      <div className="facility-header">
        <BackButton />
        <h1 className="facility-title">편의시설</h1>
      </div>
      
      <div className="tab-container">
        <div 
          className={`tab ${activeTab === 'sinchon' ? 'active' : ''}`}
          onClick={() => setActiveTab('sinchon')}
        >
          신촌캠퍼스
        </div>
        <div 
          className={`tab ${activeTab === 'international' ? 'active' : ''}`}
          onClick={() => setActiveTab('international')}
        >
          국제캠퍼스
        </div>
      </div>

      {(activeTab === 'sinchon' ? sinchonFacilities : internationalFacilities).map(facility => (
        <div 
          className="facility-card" 
          key={facility.id}
          onClick={() => handleFacilityClick(facility.id)}
        >
          <div className="facility-name">{facility.name}</div>
          <div className="facility-type">{facility.type}</div>
          <div className="facility-hours">{facility.hours}</div>
          <span className="arrow-icon">→</span>
        </div>
      ))}
    </div>
  );
};

export default FacilityList; 