import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  padding-bottom: 80px;
  user-select: none;
`;

const WhiteContainer = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  user-select: none;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 0;
  border-bottom: 1px solid #e0e0e0;
`;

const ContentContainer = styled.div`
  background-color: #F5F5F5;
  padding: 20px;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 16px;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#007AFF' : 'transparent'};
  color: ${props => props.active ? '#007AFF' : '#666'};
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.2s;
`;

const MapContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const MapLegend = styled.div`
  padding: 16px;
  background: white;
  margin-top: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const LegendTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${props => props.color};
  margin-right: 8px;
  border-radius: 4px;
`;

const Map: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('신촌');

  return (
    <>
      <Header title="기숙사 지도" />
      <PageContainer>
        <WhiteContainer>
          <TabContainer>
            <Tab 
              active={activeTab === '신촌'} 
              onClick={() => setActiveTab('신촌')}
            >
              신촌캠퍼스
            </Tab>
            <Tab 
              active={activeTab === '국제'} 
              onClick={() => setActiveTab('국제')}
            >
              국제캠퍼스
            </Tab>
          </TabContainer>
        </WhiteContainer>

        <ContentContainer>
          <MapContainer>
            <MapImage 
              src={activeTab === '신촌' ? '/images/sinchon-map.png' : '/images/international-map.png'} 
              alt={`${activeTab}캠퍼스 지도`}
            />
          </MapContainer>
        </ContentContainer>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Map; 