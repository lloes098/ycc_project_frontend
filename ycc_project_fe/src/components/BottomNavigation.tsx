import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${props => props.active ? '#1a73e8' : '#757575'};
  font-size: 12px;
`;

const Icon = styled.div`
  font-size: 20px;
  margin-bottom: 4px;
`;

const Label = styled.span`
  font-size: 12px;
`;

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: '🏠', label: '홈', path: '/' },
    { icon: '🔍', label: '매칭', path: '/matching' },
    { icon: '🏢', label: '룸메공간', path: '/roommate' },
    { icon: '🧭', label: '도우미', path: '/dormitory' },
    { icon: '👤', label: '마이', path: '/mypage' },
  ];

  return (
    <NavContainer>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          active={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        >
          <Icon>{item.icon}</Icon>
          <Label>{item.label}</Label>
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default BottomNavigation; 