import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';
import LadderRenderer from '../../components/LadderRenderer';
import BackButton from '../../components/BackButton';

type Assignment = {
  userId: string;
  name: string;
  bedNumber: number | null;
  deskNumber: number | null;
  isSelf: boolean;
};

const sampleUsers: Assignment[] = [
  { userId: 'me', name: '본인', bedNumber: null, deskNumber: null, isSelf: true },
  { userId: '1', name: '유저명1', bedNumber: null, deskNumber: null, isSelf: false },
  { userId: '2', name: '유저명2', bedNumber: null, deskNumber: null, isSelf: false }
];

const PageContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 100px;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
<<<<<<< HEAD
  padding: 16px;
  font-size: 18px;
  user-select: none;
  font-weight: bold;
`;

const BackButton = styled.button`
  margin-right: 12px;
  font-size: 20px;
  background: none;
  user-select: none;
  border: none;
  cursor: pointer;
=======
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  gap: 12px;
`;

const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
>>>>>>> main
`;

const TabBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid ${({ active }) => (active ? '#2979ff' : 'transparent')};
  background: none;
  font-size: 16px;
  color: ${({ active }) => (active ? '#2979ff' : '#aaa')};
  cursor: pointer;
`;

const Box = styled.div`
  text-align: center;
  user-select: none;
`;

const UserRow = styled.div`
  display: flex;
  user-select: none;
  justify-content: space-around;
  margin: 12px 0;
`;

const Name = styled.div<{ highlight?: boolean }>`
  font-weight: ${({ highlight }) => (highlight ? 'bold' : 'normal')};
  color: ${({ highlight }) => (highlight ? '#2979ff' : '#333')};
`;

const BedLabel = styled.div<{ selected?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 6px;
  user-select: none;
  padding: 8px 12px;
  font-size: 14px;
  background-color: ${({ selected }) => (selected ? '#e5f0ff' : '#f9f9f9')};
`;

const ResultBox = styled.div`
  background: #f5f5f5;
  padding: 16px;
  margin: 16px;
  border-radius: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 90%;
  margin: 0 auto;
  display: block;
  background-color: #2979ff;
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

const rowCount = 6;

const generateLadder = (colCount: number): boolean[][] => {
  const ladder: boolean[][] = [];

  for (let r = 0; r < rowCount; r++){
    const row = Array(colCount - 1).fill(false);
    for (let i = 0; i < row.length; i++){
      row[i] = Math.random() < 0.5;
    }
    ladder.push(row);
  }

  return ladder;
};

const Location: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'bed' | 'desk'>('bed');
  const [assignments, setAssignments] = useState<Assignment[]>(sampleUsers);
  const [ladderData] = useState<boolean[][]>(() => generateLadder(sampleUsers.length));
  const [selected, setSelected] = useState(false);

  const shuffle = () => {
    const shuffled = [...assignments].map((user) => ({ ...user }));
    const indices = [1, 2, 3].sort(() => Math.random() - 0.5);

    shuffled.forEach((user, i) => {
      if (tab === 'bed') user.bedNumber = indices[i];
      else user.deskNumber = indices[i];
    });

    setAssignments(shuffled);
    setSelected(true);
  };

  const reset = () => {
    const resetUsers = assignments.map((u) => ({
      ...u,
      bedNumber: null,
      deskNumber: null
    }));
    setAssignments(resetUsers);
    setSelected(false);
  };

  return (
    <>
      <PageContainer>
        <Header>
          <BackButton />
          <HeaderTitle>위치 선정</HeaderTitle>
        </Header>

        <TabBar>
          <Tab active={tab === 'bed'} onClick={() => setTab('bed')}>침대</Tab>
          <Tab active={tab === 'desk'} onClick={() => setTab('desk')}>책상</Tab>
        </TabBar>

        {!selected ? (
          <>
            <Box>
              <UserRow>
                {assignments.map((user) => (
                  <Name key={user.userId} highlight={user.isSelf}>
                    {user.name}
                  </Name>
                ))}
              </UserRow>
              
              <LadderRenderer
                rows={rowCount}
                columns={assignments.length}
                ladder={ladderData}
              />

              <UserRow>
                {[1, 2, 3].map((n) => (
                  <BedLabel key={n}>{n}번 {tab === 'bed' ? '침대' : '책상'}</BedLabel>
                ))}
              </UserRow>
            </Box>
            <Button onClick={shuffle}>
              {tab === 'bed' ? '침대 위치 사다리 타기' : '책상 위치 사다리 타기'}
            </Button>
          </>
        ) : (
          <>
            <ResultBox>
              <strong>위치 선정 결과</strong>
              <ul>
                {assignments.map((user) => (
                  <li key={user.userId}>
                    {user.name} — {user.bedNumber}번 침대 / {user.deskNumber}번 책상
                  </li>
                ))}
              </ul>
            </ResultBox>
            <Button onClick={reset}>다시 선정하기</Button>
          </>
        )}
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Location;
