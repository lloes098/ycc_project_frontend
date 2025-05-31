import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import BottomNavigation from '../../components/BottomNavigation';

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 100px; // ✅ BottomNavigation 안 가리도록 패딩 추가
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
`;

const Section = styled.section`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 20px 0;
  font-weight: 500;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  font-size: 16px;
`;

const Label = styled.span`
  color: #666;
`;

const Value = styled.span`
  color: #333;
  font-weight: 500;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  gap: 16px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #0066ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #666;
  margin: 0;
`;

const MatchingButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052cc;
  }
`;

const Matching: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <BackButton />
          <Title>룸메이트 매칭</Title>
        </Header>

        <Section>
          <SectionTitle>내 기숙사</SectionTitle>
          <InfoGrid>
            <Label>호실 유형</Label>
            <Value>무악학사</Value>

            <Label>동</Label>
            <Value>A동</Value>

            <Label>호수</Label>
            <Value>620호</Value>
          </InfoGrid>
        </Section>

        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>룸메이트 매칭을 기다리고 있어요!</LoadingText>
        </LoadingContainer>

        <MatchingButton onClick={() => console.log('매칭 알림 신청')}>
          매칭 완료 알림받기
        </MatchingButton>
      </Container>

      <BottomNavigation />
    </>
  );
};

export default Matching;
