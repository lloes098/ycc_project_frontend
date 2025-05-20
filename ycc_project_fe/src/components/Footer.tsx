import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e7e7e7;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const FooterText = styled.p`
  color: #6c757d;
  margin: 0;
  font-size: 14px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 YCC Project. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 