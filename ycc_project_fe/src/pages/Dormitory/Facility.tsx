import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import BottomNavigation from '../../components/BottomNavigation';

interface Facility {
  id: string;
  name: string;
  type: string;
  hours: string;
}

const PageContainer = styled.div`
  padding-bottom: 80px;
`;

const WhiteContainer = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
`;

const FacilityListContainer = styled.div`
  background-color: #F5F5F5;
  padding: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.div<{ active: boolean }>`
  flex: 1;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#007AFF' : 'transparent'};
  color: ${props => props.active ? '#007AFF' : '#666'};
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.2s;
`;

const FacilityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const FacilityName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const FacilityType = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const FacilityHours = styled.div`
  font-size: 14px;
  color: #666;
`;

const ArrowIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #007AFF;
`;

const sinchonFacilities: Facility[] = [
  {
    id: 'nanumsamm-sinchon',
    name: '나눌샘',
    type: '학식',
    hours: '11:00 - 19:00'
  },
  {
    id: 'cafe-muak',
    name: '무악학사 카페',
    type: '카페',
    hours: '08:00 - 22:00'
  },
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
    <>
      <Header title="편의시설" />
      <PageContainer>
        <WhiteContainer>
          <TabContainer>
            <Tab 
              active={activeTab === 'sinchon'} 
              onClick={() => setActiveTab('sinchon')}
            >
              신촌캠퍼스
            </Tab>
            <Tab 
              active={activeTab === 'international'} 
              onClick={() => setActiveTab('international')}
            >
              국제캠퍼스
            </Tab>
          </TabContainer>
        </WhiteContainer>

        <FacilityListContainer>
          {(activeTab === 'sinchon' ? sinchonFacilities : internationalFacilities).map(facility => (
            <FacilityCard 
              key={facility.id}
              onClick={() => handleFacilityClick(facility.id)}
            >
              <FacilityName>{facility.name}</FacilityName>
              <FacilityType>{facility.type}</FacilityType>
              <FacilityHours>{facility.hours}</FacilityHours>
              <ArrowIcon>→</ArrowIcon>
            </FacilityCard>
          ))}
        </FacilityListContainer>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default FacilityList; 