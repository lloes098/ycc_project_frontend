import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FacilityDetail.css';

interface FacilityDetailInfo {
  id: number;
  name: string;
  type: string;
  hours: string;
  price: string;
  image: string;
  campus: 'sinchon' | 'international';
}

const facilityDetails: Record<string, FacilityDetailInfo> = {
  'nanumsamm-sinchon': {
    id: 1,
    name: '나눔샘',
    type: '학식당',
    hours: '11:00 - 19:00',
    price: '6,000 - 7,600원',
    image: '/images/facilities/nanumsamm.jpg',
    campus: 'sinchon'
  },
  'cafe-muak': {
    id: 2,
    name: '무악학사 카페',
    type: '카페',
    hours: '08:00 - 22:00',
    price: '2,000 - 4,500원',
    image: '/images/facilities/muak-cafe.jpg',
    campus: 'sinchon'
  },
  // 다른 시설들 추가 가능
};

const FacilityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const facility = id ? facilityDetails[id] : null;

  const handleBack = () => {
    navigate(-1);
  };

  if (!facility) {
    return <div>시설을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="facility-detail-container">
      <div className="facility-detail-header">
        <span className="back-button" onClick={handleBack}>←</span>
        <h1 className="facility-detail-title">{facility.name}</h1>
      </div>

      <div className="facility-detail-image">
        <img src={facility.image} alt={facility.name} />
      </div>

      <div className="facility-detail-info">
        <div className="info-row">
          <div className="info-label">구분</div>
          <div className="info-value">{facility.type}</div>
        </div>
        
        <div className="info-row">
          <div className="info-label">운영시간</div>
          <div className="info-value">{facility.hours}</div>
        </div>
        
        <div className="info-row">
          <div className="info-label">비용</div>
          <div className="info-value">{facility.price}</div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail; 