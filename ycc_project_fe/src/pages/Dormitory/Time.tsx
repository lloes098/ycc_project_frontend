import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import './Time.css';

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
    <div className="time-container">
      <div className="time-header">
        <BackButton />
        <h1 className="time-title">소요시간</h1>
      </div>

      <div className="tab-container">
        <div 
          className={`tab ${activeTab === 'sinchon' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('sinchon');
            setSelectedDepartment('');
            setSelectedBuilding('');
          }}
        >
          신촌캠퍼스
        </div>
        <div 
          className={`tab ${activeTab === 'international' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('international');
            setSelectedDepartment('');
            setSelectedBuilding('');
          }}
        >
          국제캠퍼스
        </div>
      </div>

      <div className="select-container">
        <select 
          className="select-box"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">단과대 선택</option>
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>

        <select 
          className="select-box"
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
        </select>
      </div>

      <div className="time-list">
        {buildings.map(building => (
          <div 
            key={building.id}
            className={`time-item ${selectedBuilding === building.id ? 'selected' : ''}`}
          >
            <div className="building-info">
              <div className="building-name">{building.name}</div>
              <div className="building-department">{building.department}</div>
            </div>
            <div className="estimated-time">
              소요시간
              <span className="time">{building.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time; 