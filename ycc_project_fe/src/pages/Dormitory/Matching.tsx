import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import BottomNavigation from '../../components/BottomNavigation';

const Container = styled.div`
  padding: 20px;
  user-select: none;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
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
  user-select: none;
  margin-bottom: 20px;
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
  margin-top: 20px;

  &:hover {
    background-color: #0052cc;
  }
`;

const ToggleTestButton = styled.button`
  margin-bottom: 12px;
  padding: 8px 16px;
  background-color: #eee;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;

const Matching: React.FC = () => {
  const navigate = useNavigate();
  const [isMatched, setIsMatched] = useState(false);

  const roommates = [
    { name: '룸메1', major: 'OO공과', studentId: '25학번', gender: '여성', age: '20세' },
    { name: '룸메2', major: '문헌정보학과', studentId: '23학번', gender: '여성', age: '22세' }
  ];

  return (
    <>
      <Container>
        <Header>
          <BackButton />
          <Title>룸메이트 매칭</Title>
        </Header>

        {/* ✅ 테스트용 전환 버튼 */}
        <ToggleTestButton onClick={() => setIsMatched(prev => !prev)}>
          {isMatched ? '← 매칭 해제' : '→ 매칭 상태로 변경'}
        </ToggleTestButton>

        {/* 내 기숙사 정보 */}
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

        {isMatched ? (
          <>
            <Section>
              <SectionTitle>룸메이트</SectionTitle>
              {roommates.map((r, i) => (
                <InfoGrid key={i}>
                  <Label>이름</Label>
                  <Value>{r.name}</Value>
                  <Label>학과</Label>
                  <Value>{r.major}</Value>
                  <Label>학번</Label>
                  <Value>{r.studentId}</Value>
                  <Label>성별</Label>
                  <Value>{r.gender}</Value>
                  <Label>나이</Label>
                  <Value>{r.age}</Value>
                </InfoGrid>
              ))}
            </Section>

            <MatchingButton onClick={() => console.log('룸메이트 공간 입장')}>
              룸메이트 공간 입장
            </MatchingButton>
          </>
        ) : (
          <>
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>룸메이트 매칭을 기다리고 있어요!</LoadingText>
            </LoadingContainer>

            <MatchingButton onClick={() => console.log('매칭 알림 신청')}>
              매칭 완료 알림받기
            </MatchingButton>
          </>
        )}
      </Container>

      <BottomNavigation />
    </>
  );
};

export default Matching;
