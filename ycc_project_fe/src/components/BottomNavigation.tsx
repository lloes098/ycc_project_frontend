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
  color: ${props => props.active ? '#0068FF' : '#757575'};
  font-size: 12px;
`;

interface IconProps {
  active?: boolean;
}

const Icon = styled.img<IconProps>`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  filter: ${props => props.active ? 'invert(40%) sepia(93%) saturate(1352%) hue-rotate(203deg) brightness(119%) contrast(119%)' : 'invert(47%) sepia(9%) saturate(13%) hue-rotate(316deg) brightness(94%) contrast(86%)'};
`;

const Label = styled.span`
  font-size: 12px;
`;

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: '/assets/home.svg', label: '홈', path: '/main' },
    { icon: '/assets/matching.svg', label: '매칭', path: '/matching' },
    { icon: '/assets/room.svg', label: '룸메공간', path: '/roommate' },
    { icon: '/assets/help.svg', label: '도우미', path: '/dormitory' },
    { icon: '/assets/my.svg', label: '마이', path: '/mypage' },
  ];

  return (
    <NavContainer>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <NavItem
            key={index}
            active={isActive}
            onClick={() => navigate(item.path)}
          >
            <Icon 
              src={item.icon} 
              alt={item.label}
              active={isActive}
            />
            <Label>{item.label}</Label>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default BottomNavigation; 