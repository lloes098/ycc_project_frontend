import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  gap: 12px;
`;

const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
`;

const Arrow = styled.div`
  font-size: 18px;
  color: #ccc;
`;

const RoommateSpace: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageContainer>
        <Header>
          <BackButton />
          <HeaderTitle>룸메이트 공간</HeaderTitle>
        </Header>

        <Card onClick={() => navigate('/chat')}>
          <Info>
            <Icon>💬</Icon>
            <strong>채팅</strong>
            <span>룸메이트들과 인사를 나눠보세요</span>
          </Info>
          <Arrow>›</Arrow>
        </Card>

        <Card onClick={() => navigate('/location')}>
          <Info>
            <Icon>🛏️</Icon>
            <strong>위치 선정</strong>
            <span>침대·책상 위치를 사다리타기로 결정해요</span>
          </Info>
          <Arrow>›</Arrow>
        </Card>

        <Card onClick={() => navigate('/checklist')}>
          <Info>
            <Icon>🧳</Icon>
            <strong>비품 준비</strong>
            <span>필수 비품 준비를 논의해요</span>
          </Info>
          <Arrow>›</Arrow>
        </Card>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default RoommateSpace;
