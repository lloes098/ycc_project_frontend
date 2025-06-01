import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import BottomNavigation from '../../components/BottomNavigation';

const PageContainer = styled.div`
  padding-bottom: 80px;
`;

const WhiteContainer = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  background-color: #F5F5F5;
  padding: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.div<{ active: boolean }>`
  flex: 1;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#007AFF' : 'transparent'};
  color: ${props => props.active ? '#007AFF' : '#666'};
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.2s;
`;

const SelectContainer = styled.div`
  padding: 0 16px;
  margin-bottom: 24px;
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  appearance: none;
  background: white url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 12px center;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const TimeList = styled.div`
  padding: 0 16px;
`;

const TimeItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 12px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.selected ? '#007AFF' : 'transparent'};
`;

const BuildingInfo = styled.div`
  flex: 1;
`;

const BuildingName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const BuildingDepartment = styled.div`
  font-size: 14px;
  color: #666;
`;

const EstimatedTime = styled.div`
  text-align: right;
  color: #666;
  font-size: 14px;

  span {
    display: block;
    color: #007AFF;
    font-size: 20px;
    font-weight: 600;
    margin-top: 4px;
  }
`;

interface Building {
  id: string;
  name: string;
  time: string;
  department: string;
}

interface Department {
  id: string;
  name: string;
  buildings: Building[];
}

// 신촌캠퍼스 단과대 및 건물 데이터
const sinchonDepartments: Department[] = [
  {
    id: 'liberal-arts',
    name: '문과대',
    buildings: [
      { id: 'lib-1', name: '중앙도서관', time: '5분', department: '문과대' },
      { id: 'lib-2', name: '학술정보원', time: '7분', department: '문과대' },
      { id: 'lib-3', name: '위당관', time: '10분', department: '문과대' }
    ]
  },
  {
    id: 'science',
    name: '이과대',
    buildings: [
      { id: 'sci-1', name: '과학관', time: '8분', department: '이과대' },
      { id: 'sci-2', name: '첨단과학기술연구관', time: '12분', department: '이과대' }
    ]
  },
  // 추가 단과대 데이터
];

// 국제캠퍼스 단과대 및 건물 데이터
const internationalDepartments: Department[] = [
  {
    id: 'songdo-1',
    name: '송도1캠퍼스',
    buildings: [
      { id: 'int-1', name: '국제캠퍼스도서관', time: '6분', department: '송도1캠퍼스' },
      { id: 'int-2', name: '진리관', time: '8분', department: '송도1캠퍼스' }
    ]
  },
  // 추가 단과대 데이터
];

const Time: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'sinchon' | 'international'>('sinchon');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedBuilding, setSelectedBuilding] = useState<string>('');

  const departments = activeTab === 'sinchon' ? sinchonDepartments : internationalDepartments;
  const buildings = selectedDepartment
    ? departments.find(d => d.id === selectedDepartment)?.buildings || []
    : [];

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
    setSelectedBuilding('');
  };

  const handleBuildingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBuilding(e.target.value);
  };

  return (
    <>
      <Header title="소요시간" />
      <PageContainer>
        <WhiteContainer>
          <TabContainer>
            <Tab 
              active={activeTab === 'sinchon'} 
              onClick={() => {
                setActiveTab('sinchon');
                setSelectedDepartment('');
                setSelectedBuilding('');
              }}
            >
              신촌캠퍼스
            </Tab>
            <Tab 
              active={activeTab === 'international'} 
              onClick={() => {
                setActiveTab('international');
                setSelectedDepartment('');
                setSelectedBuilding('');
              }}
            >
              국제캠퍼스
            </Tab>
          </TabContainer>
        </WhiteContainer>

        <ContentContainer>
          <SelectContainer>
            <SelectBox 
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">단과대 선택</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </SelectBox>

            <SelectBox 
              value={selectedBuilding}
              onChange={handleBuildingChange}
              disabled={!selectedDepartment}
            >
              <option value="">건물 선택</option>
              {buildings.map(building => (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              ))}
            </SelectBox>
          </SelectContainer>

          <TimeList>
            {buildings.map(building => (
              <TimeItem 
                key={building.id}
                selected={selectedBuilding === building.id}
              >
                <BuildingInfo>
                  <BuildingName>{building.name}</BuildingName>
                  <BuildingDepartment>{building.department}</BuildingDepartment>
                </BuildingInfo>
                <EstimatedTime>
                  소요시간
                  <span>{building.time}</span>
                </EstimatedTime>
              </TimeItem>
            ))}
          </TimeList>
        </ContentContainer>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Time; 