import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>연세대 기숙사 생활, 한 번에 연결하다</h1>
        <h2>Yonmate</h2>
      </div>
      <div className="login-form">
        <input 
          type="text" 
          placeholder="연세포탈 아이디를 입력하세요" 
        />
        <input 
          type="password" 
          placeholder="연세포탈 비밀번호를 입력하세요" 
        />
        <button className="login-button">로그인</button>
      </div>
      <p className="notice">*Yonmate는 개인정보를 수집하지 않습니다.</p>
    </div>
  );
};

export default Login; 