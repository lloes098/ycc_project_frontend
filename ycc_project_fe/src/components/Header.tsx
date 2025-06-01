import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #fff;
  position: relative;
  max-width: 768px;
  margin: 0 auto;
  user-select: none;
`;

const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {showBackButton && <BackButton />}
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 