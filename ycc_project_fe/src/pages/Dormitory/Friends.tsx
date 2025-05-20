import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import './Friends.css';

interface Friend {
  id: string;
  name: string;
  room: string;
  isFavorite: boolean;
}

const Friends: React.FC = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [friends, setFriends] = useState<Friend[]>([
    { id: '1', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: true },
    { id: '2', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: true },
    { id: '3', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: false },
    { id: '4', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: false },
    { id: '5', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: false },
    { id: '6', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: false },
    { id: '7', name: '{유저명}', room: '{N}동 {NNNN}호', isFavorite: false }
  ]);

  const buildings = [
    { id: 'all', name: '동명부 보기' },
    { id: '1', name: '1동' },
    { id: '2', name: '2동' },
    { id: '3', name: '3동' }
  ];

  const handleBuildingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBuilding(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleItemClick = (friendId: string) => {
    // 아이템 클릭 시 처리할 로직
    console.log('Friend item clicked:', friendId);
  };

  const toggleFavorite = (e: React.MouseEvent, friendId: string) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    setFriends(prevFriends =>
      prevFriends.map(friend =>
        friend.id === friendId
          ? { ...friend, isFavorite: !friend.isFavorite }
          : friend
      )
    );
  };

  const filteredFriends = friends.filter(friend => {
    const matchesSearch = friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         friend.room.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBuilding = !selectedBuilding || selectedBuilding === 'all' ||
                           friend.room.startsWith(`{${selectedBuilding}}`);
    return matchesSearch && matchesBuilding;
  });

  const sortedFriends = [...filteredFriends].sort((a, b) => {
    if (a.isFavorite === b.isFavorite) {
      return 0;
    }
    return a.isFavorite ? -1 : 1;
  });

  return (
    <div className="friends-container">
      <div className="friends-header">
        <BackButton />
        <h1 className="friends-title">내 친구의 방</h1>
      </div>

      <div className="friends-filters">
        <select 
          className="building-select"
          value={selectedBuilding}
          onChange={handleBuildingChange}
        >
          {buildings.map(building => (
            <option key={building.id} value={building.id}>
              {building.name}
            </option>
          ))}
        </select>

        <div className="search-box">
          <input
            type="text"
            placeholder="이름 또는 방 번호로 검색"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="friends-list">
        {sortedFriends.map(friend => (
          <div 
            key={friend.id} 
            className="friend-item"
            onClick={() => handleItemClick(friend.id)}
          >
            <div className="friend-info">
              <div className="friend-name">{friend.name}</div>
              <div className="friend-room">{friend.room}</div>
            </div>
            <button
              className={`favorite-button ${friend.isFavorite ? 'active' : ''}`}
              onClick={(e) => toggleFavorite(e, friend.id)}
              aria-label={friend.isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
            >
              {friend.isFavorite ? '★' : '☆'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends; 