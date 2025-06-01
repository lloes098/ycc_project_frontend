import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledBackButton = styled.span`
  cursor: pointer;
  padding: 8px;
  font-size: 24px;
  color: #000;
  display: flex;
  align-items: center;
  background: none;
  user-select: none;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <StyledBackButton onClick={handleClick}>
      ←
    </StyledBackButton>
  );
};

export default BackButton; 