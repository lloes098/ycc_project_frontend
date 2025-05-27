import React, { useState } from 'react';
import styled from 'styled-components';
import BottomNavigation from '../../components/BottomNavigation';
import BackButton from '../../components/BackButton';


type Assignment = {
  roomType: string;
  building: string;
  roomNumber: string;
};

type UserInfo = {
  department: string;
  studentId: string;
  gender: string;
  age: string;
};

type PublicFields = {
  department: boolean;
  studentId: boolean;
  gender: boolean;
  age: boolean;
};

const PageContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 24px 0;
`;

const Section = styled.div`
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const RadioRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 14px;
`;


const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;



const Button = styled.button`
  width: 90%;
  margin: 24px auto 0;
  display: block;
  background-color: #2979ff;
  color: white;
  font-weight: bold;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

const MyPage: React.FC = () => {
  const [assignment] = useState<Assignment>({
    roomType: '무악학사',
    building: 'A동',
    roomNumber: '620호'
  });

  const [userInfo] = useState<UserInfo>({
    department: '문헌정보학과',
    studentId: '2023118032',
    gender: '여성',
    age: '22세'
  });


  const [publicFields, setPublicFields] = useState<PublicFields>({
    department: true,
    studentId: true,
    gender: false,
    age: false
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (field: keyof PublicFields) => {
    if (!editMode) return;
    setPublicFields((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleToggleEdit = () => {
    if (editMode) {
      // ✅ TODO: 저장 API 요청 자리 (PATCH /api/public-fields 등)
      console.log('저장된 공개 설정:', publicFields);
    }
    setEditMode(!editMode);
  };

  return (
    <>
      <PageContainer>
        <HeaderWrapper>
          <BackButton/>
          <Title>마이페이지</Title>
        </HeaderWrapper>
        

        <Section>
          <SectionTitle>내 배정 결과</SectionTitle>
          <Row><Label>호실 유형</Label><Value>{assignment.roomType}</Value></Row>
          <Row><Label>동</Label><Value>{assignment.building}</Value></Row>
          <Row><Label>호수</Label><Value>{assignment.roomNumber}</Value></Row>
        </Section>

        <Section>
          <SectionTitle>내 정보</SectionTitle>
          <Row><Label>학과</Label><Value>{userInfo.department}</Value></Row>
          <Row><Label>학번</Label><Value>{userInfo.studentId}</Value></Row>
          <Row><Label>성별</Label><Value>{userInfo.gender}</Value></Row>
          <Row><Label>나이</Label><Value>{userInfo.age}</Value></Row>
        </Section>

        <Section>
          <SectionTitle>매칭 상대에게 공개할 정보</SectionTitle>

          <RadioRow>
            <input
              type="checkbox"
              checked={publicFields.department}
              onChange={() => handleChange('department')}
            />
            학과: {userInfo.department}
          </RadioRow>

          <RadioRow>
            <input
              type="checkbox"
              checked={publicFields.studentId}
              onChange={() => handleChange('studentId')}
            />
            학번: {userInfo.studentId}
          </RadioRow>

          <RadioRow>
            <input
              type="checkbox"
              checked={publicFields.gender}
              onChange={() => handleChange('gender')}
            />
            성별: {userInfo.gender}
          </RadioRow>

          <RadioRow>
            <input
              type="checkbox"
              checked={publicFields.age}
              onChange={() => handleChange('age')}
            />
            나이: {userInfo.age}
          </RadioRow>
        </Section>

        <Button onClick={handleToggleEdit}>
          {editMode ? '저장하기' : '수정하기'}
        </Button>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default MyPage;
