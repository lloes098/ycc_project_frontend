import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  padding: 20px;
  padding-bottom: 80px;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 8px;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  user-select: none;
`;

const AddressSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  user-select: none;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const AddressIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
`;

const AddressTitle = styled.h2`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`;

const AddressText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
  word-break: keep-all;
  line-height: 1.4;
`;

const CopyButton = styled.button`
  width: 100%;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }
`;

const Address: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const address = "인천 연수구 송도과학로 85 {동} {호수}";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <PageContainer>
        <Header>
          <BackButton />
          <Title>주소</Title>
        </Header>
        
        <AddressSection>
          <AddressIcon>📦</AddressIcon>
          <AddressTitle>내 기숙사 주소를 조회하고 복사해요</AddressTitle>
          <AddressText>{address}</AddressText>
          <CopyButton onClick={handleCopy}>
            {copySuccess ? '복사 완료!' : '복사하기'}
          </CopyButton>
        </AddressSection>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Address; 