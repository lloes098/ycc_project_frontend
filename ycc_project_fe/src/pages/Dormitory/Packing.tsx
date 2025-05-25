import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

type Category = '생활용품' | '욕실용품' | '세탁용품' | '청소용품';
type Status = '준비 전' | '준비 완료';

type Item = {
  id: string;
  name: string;
  category: Category;
  done: boolean;
};

const initialItems: Item[] = [
  { id: '1', name: '침구류', category: '생활용품', done: false },
  { id: '2', name: '신발', category: '생활용품', done: false },
  { id: '3', name: '개인 슬리퍼', category: '생활용품', done: false },
  { id: '4', name: '우산', category: '생활용품', done: false },
  { id: '5', name: '식기류', category: '생활용품', done: false },
  { id: '6', name: '멀티탭', category: '생활용품', done: false },
  { id: '7', name: '충전기', category: '생활용품', done: false },
  { id: '8', name: '상비약', category: '생활용품', done: false },
  { id: '9', name: '쓰레기통', category: '생활용품', done: false },
  { id: '10', name: '세안도구', category: '욕실용품', done: false },
  { id: '11', name: '목욕도수', category: '욕실용품', done: false },
  { id: '12', name: '수건', category: '욕실용품', done: false },
  { id: '13', name: '드라이기', category: '욕실용품', done: false },
  { id: '14', name: '고데기', category: '욕실용품', done: false },
  { id: '15', name: '발 매트', category: '욕실용품', done: false },
  { id: '16', name: '빨래바구니', category: '세탁용품', done: false },
  { id: '17', name: '세제', category: '세탁용품', done: false },
  { id: '18', name: '섬유유연제', category: '세탁용품', done: false },
  { id: '19', name: '빨래망', category: '세탁용품', done: false },
  { id: '8', name: '돌돌이', category: '청소용품', done: false },
  { id: '9', name: '밀대 걸레', category: '청소용품', done: false }
  
];

const PageContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Header = styled.div`
  padding: 16px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const TabRow = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0 16px;
`;

const Tab = styled.button<{ active: boolean }>`
  margin-right: 12px;
  padding: 8px 12px;
  background-color: ${({ active }) => (active ? '#2979ff' : '#eee')};
  color: ${({ active }) => (active ? '#fff' : '#666')};
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const ItemList = styled.div`
  padding: 0 16px;
`;

const ItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 12px 16px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const BackButton = styled.button`
  margin-right: 12px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CheckCircle = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? '#2979ff' : '#fff')};
  border: 2px solid #2979ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
`;

const Packing: React.FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>('생활용품');
  const [statusFilter, setStatusFilter] = useState<Status>('준비 전');
  const [items, setItems] = useState<Item[]>(initialItems);

  const filtered = items.filter(
    (item) => item.category === category && (statusFilter === '준비 완료' ? item.done : !item.done)
  );

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <>
      <PageContainer>
        <Header>
          <BackButton onClick={() => navigate(-1)}>←</BackButton>
          비품 준비
        </Header>
        

        {/* 상단 탭 */}
        <TabRow>
          {(['생활용품', '욕실용품', '세탁용품', '청소용품'] as Category[]).map((cat) => (
            <Tab key={cat} active={category === cat} onClick={() => setCategory(cat)}>
              {cat}
            </Tab>
          ))}
        </TabRow>

        {/* 상태 탭 */}
        <TabRow style={{ marginTop: '10px' }}>
          {(['준비 전', '준비 완료'] as Status[]).map((s) => (
            <Tab key={s} active={statusFilter === s} onClick={() => setStatusFilter(s)}>
              {s}
            </Tab>
          ))}
        </TabRow>

        {/* 아이템 리스트 */}
        <ItemList>
          {filtered.map((item) => (
            <ItemCard key={item.id} onClick={() => toggleItem(item.id)}>
              <span>{item.name}</span>
              <CheckCircle checked={item.done}>{item.done ? '✓' : ''}</CheckCircle>
            </ItemCard>
          ))}
        </ItemList>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Packing;
