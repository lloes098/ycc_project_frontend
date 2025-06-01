import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';
import BackButton from '../../components/BackButton';

type Message = {
  id: number;
  sender: 'me' | 'roommate';
  content: string;
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

const WhiteContainer = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  background-color: #F5F5F5;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  gap: 12px;
  background-color: #fff;
`;

const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const InfoBox = styled.div`
  background: #f1f1f1;
  padding: 12px 16px;
  margin: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
`;

const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  // ✅ 스크롤바 안 보이게
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`;

const MessageBubble = styled.div<{ sender: 'me' | 'roommate' }>`
  align-self: ${({ sender }) => (sender === 'me' ? 'flex-end' : 'flex-start')};
  background-color: ${({ sender }) => (sender === 'me' ? '#e5f0ff' : '#eee')};
  color: #000;
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 70%;
  font-size: 14px;
`;

const InputWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  max-width: 768px;
  margin: 0 auto;
  padding: 12px 16px;
  background: white;
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 100;
`;

const TextInput = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px 14px;
  font-size: 14px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #2979ff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

const Chat: React.FC = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'roommate', content: '안녕하세요' },
    { id: 2, sender: 'me', content: '안녕하세요' },
    { id: 3, sender: 'roommate', content: '잘 부탁드립니다 ^^' },
  ]);

  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'me',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');
  };

  // ✅ 메시지 추가될 때마다 자동 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <PageContainer>
        <WhiteContainer>
          <Header>
            <BackButton />
            <HeaderTitle>채팅</HeaderTitle>
          </Header>
        </WhiteContainer>

        <ContentContainer>
          <InfoBox>
            <strong>룸메이트들과 대화해요</strong>
            <br />
            인사를 나누고 이사 일정, 생활습관 등을 조율해요
          </InfoBox>

          <ChatBox>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} sender={msg.sender}>
                {msg.content}
              </MessageBubble>
            ))}
            <div ref={bottomRef} />
          </ChatBox>
        </ContentContainer>

        <InputWrapper>
          <TextInput
            type="text"
            placeholder="대화를 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <SendButton onClick={handleSend}>전송</SendButton>
        </InputWrapper>
      </PageContainer>

      <BottomNavigation />
    </>
  );
};

export default Chat;
