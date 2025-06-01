import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000); // 2초 후 자동으로 로그인 페이지로 이동

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-bg">
      <div className="splash-top-icons">
        <span className="dots">···</span>
        <span className="star">★</span>
      </div>
      <div className="splash-center">
        {/* 로고 이미지는 public 폴더에 logo.png로 넣어주세요 */}
        <img src="/assets/Yonmate_P.png" alt="Yonmate Logo" className="splash-logo" />
        <div className="splash-korean">연세대 기숙사 올인원 서비스</div>
        <div className="splash-title">Yonmate</div>
      </div>
    </div>
  );
};

export default SplashScreen;
