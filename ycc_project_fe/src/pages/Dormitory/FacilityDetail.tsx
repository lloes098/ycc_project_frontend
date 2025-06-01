import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #fff;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  padding: 0 16px;
`;

const InfoRow = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  width: 100px;
  color: #666;
  font-size: 16px;
`;

const InfoValue = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
`;

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

  if (!facility) {
    return <div>시설을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header title={facility.name} />
      <PageContainer>
        <ImageContainer>
          <img src={facility.image} alt={facility.name} />
        </ImageContainer>

        <InfoContainer>
          <InfoRow>
            <InfoLabel>구분</InfoLabel>
            <InfoValue>{facility.type}</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>운영시간</InfoLabel>
            <InfoValue>{facility.hours}</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>비용</InfoLabel>
            <InfoValue>{facility.price}</InfoValue>
          </InfoRow>
        </InfoContainer>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default FacilityDetail; 