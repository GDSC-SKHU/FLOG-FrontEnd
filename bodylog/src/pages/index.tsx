import Modal from '@/components/Modal';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import Login from 'src/pages/Login';
import styled from 'styled-components';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledIndexBox>
      <ImageBox>
        <Image src={'/logoimg.png'} alt={'logoimg'} width={200} height={200} />
        <br></br>
        <Image src={'/logotext.png'} alt={'logo'} width={200} height={60} />
      </ImageBox>
      <LoginButton
        onClick={() => {
          router.push('/Login');
        }}
      >
        LOGIN
      </LoginButton>
      <StyledModalButton onClick={handleOpenModal}>Open Modal</StyledModalButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>모달창 테스트 버튼</h2>
        <p>Noto is a global font collection for writing in all modern and ancient languages. Noto Sans KR is an unmodulated (“sans serif”) design for the Korean language using Hangul and the Korean Hanja scripts. It also supports Hiragana, Katakana, Latin, Cyrillic and Greek. It has multiple weights.</p>
      </Modal>
      <StyledMypageButton
        onClick={() => {
          router.push('/mypage');
        }}
      >
        LINK TO MYPAGE
      </StyledMypageButton>
    </StyledIndexBox>
  );
}

export default Home;

const StyledIndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffc529;
  min-height: 100%;
`;

const ImageBox = styled.div`
  margin: 10rem 0 0 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const LoginButton = styled.button`
  margin-top: 5rem;
  font-size: 1.5rem;
  all: unset;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.2rem;
  font-weight: bold;
  &:hover {
    background-color: #fe724c;
    transition: 0.3s;
  }
  &:active {
    background-color: #fe724c;
    transition: 0.1s;
  }
`;

const StyledModalButton = styled.button`
  all: unset;
  position: absolute;
  bottom: 0;
  &:hover,
  :focus,
  :active {
    color: red;
  }
`;

const StyledMypageButton = styled.button`
  all: unset;
  position: absolute;
  bottom: 2rem;
  &:hover,
  :focus,
  :active {
    color: red;
  }
`;
