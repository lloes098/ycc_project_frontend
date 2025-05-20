import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  padding: 20px;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 80px; /* Add padding for BottomNavigation */
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px 0 40px;
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  margin: 30px 0 20px;
  font-size: 20px;
  font-weight: bold;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardIcon = styled.div`
  font-size: 24px;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

const DormitoryMain: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "📦",
      title: "주소",
      description: "내 기숙사 주소를 조회하고 복사해요",
      path: "/address"
    },
    {
      icon: "🗺️",
      title: "기숙사 지도",
      description: "기숙사 지도를 살펴봐요",
      path: "/map"
    },
    {
      icon: "📍",
      title: "편의시설",
      description: "주요 편의 시설 정보를 조회해요",
      path: "/facilities"
    },
    {
      icon: "⏰",
      title: "소요시간",
      description: "강의실까지 예상 소요시간을 조회해요",
      path: "/time"
    },
    {
      icon: "📝",
      title: "방 미리보기",
      description: "미리 내 방을 알아봐요",
      path: "/preview"
    },
    {
      icon: "👥",
      title: "내 친구의 방",
      description: "내 친구의 방 정보를 조회해요",
      path: "/friends"
    }
  ];

  return (
    <>
      <PageContainer>
        <Title>기숙사 생활 도우미</Title>
        <SubTitle>기숙사 도우미</SubTitle>
        <GridContainer>
          {services.map((service, index) => (
            <Card key={index} onClick={() => navigate(service.path)}>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </GridContainer>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default DormitoryMain; 