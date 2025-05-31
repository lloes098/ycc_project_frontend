import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  padding: 20px;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px 0 30px;
  font-size: 20px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  margin: 20px 0 12px;
  font-size: 16px;
  font-weight: bold;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: translateY(-2px);
    transition: 0.2s ease-in-out;
  }
`;

const CardIcon = styled.div`
  font-size: 22px;
  margin-bottom: 8px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const CardDesc = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 4px;
`;

const HelperMain: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: '📦',
      title: '주소',
      desc: '내 기숙사 주소를 조회하고 복사해요',
      path: '/address'
    },
    {
      icon: '🗺️',
      title: '기숙사 지도',
      desc: '기숙사 지도를 살펴봐요',
      path: '/map'
    },
    {
      icon: '📍',
      title: '편의시설',
      desc: '주요 편의 시설 정보를 조회해요',
      path: '/facility'
    },
    {
      icon: '⏰',
      title: '소요시간',
      desc: '강의실까지 예상 소요시간을 조회해요',
      path: '/time'
    },
    {
      icon: '📘',
      title: '방 미리보기',
      desc: '미리 내 방을 알아봐요',
      path: '/preview'
    },
    {
      icon: '👥',
      title: '내 친구의 방',
      desc: '내 친구의 방 정보를 조회해요',
      path: '/friends'
    }
  ];

  return (
    <>
      <PageContainer>
        <Title>기숙사 생활 도우미</Title>
        <SubTitle>기숙사 도우미</SubTitle>

        <GridContainer>
          {services.map((s, idx) => (
            <Card key={idx} onClick={() => navigate(s.path)}>
              <CardIcon>{s.icon}</CardIcon>
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
            </Card>
          ))}
        </GridContainer>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default HelperMain;
