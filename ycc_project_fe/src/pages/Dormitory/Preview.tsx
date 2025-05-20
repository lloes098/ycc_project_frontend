import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Preview.css';

const Preview: React.FC = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<number>(1);
  const totalViews = 4;

  const handleBack = () => {
    navigate(-1);
  };

  const handleRotateLeft = () => {
    setCurrentView(prev => (prev === 1 ? totalViews : prev - 1));
  };

  const handleRotateRight = () => {
    setCurrentView(prev => (prev === totalViews ? 1 : prev + 1));
  };

  const handleReset = () => {
    setCurrentView(1);
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <span className="back-button" onClick={handleBack}>←</span>
        <h1 className="preview-title">방 미리보기</h1>
      </div>

      <div className="preview-content">
        <div className="room-preview">
          <img 
            src={`/images/room/view${currentView}.jpg`} 
            alt={`Room view ${currentView}`}
            className="room-image"
          />
          
          <div className="preview-controls">
            <button 
              className="control-button rotate"
              onClick={handleRotateLeft}
              aria-label="Rotate Left"
            >
              ↺
            </button>
            <button 
              className="control-button reset"
              onClick={handleReset}
              aria-label="Reset View"
            >
              ⟲
            </button>
            <button 
              className="control-button rotate"
              onClick={handleRotateRight}
              aria-label="Rotate Right"
            >
              ↻
            </button>
          </div>
        </div>

        <div className="room-info">
          <div className="info-section">
            <h2 className="section-title">기본 정보</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">방 유형</span>
                <span className="info-value">2인실</span>
              </div>
              <div className="info-item">
                <span className="info-label">면적</span>
                <span className="info-value">19.8m²</span>
              </div>
              <div className="info-item">
                <span className="info-label">층</span>
                <span className="info-value">3층</span>
              </div>
              <div className="info-item">
                <span className="info-label">방향</span>
                <span className="info-value">남향</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2 className="section-title">시설 정보</h2>
            <div className="facility-list">
              <div className="facility-item">
                <span className="facility-icon">🛏️</span>
                <span className="facility-name">싱글베드</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">💺</span>
                <span className="facility-name">책상/의자</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🪟</span>
                <span className="facility-name">창문</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🚿</span>
                <span className="facility-name">샤워실</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🚽</span>
                <span className="facility-name">화장실</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🗄️</span>
                <span className="facility-name">수납장</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview; 