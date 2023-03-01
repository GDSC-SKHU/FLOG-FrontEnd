import Calendar from '@/components/Calendar';
import Modal from '@/components/Modal';
import router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

function mypage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <MyPageBox>
        <h1>Calendar</h1>
        <Calendar />
        캘린더 어쩌고 저쩌고
        <br />
        <StyledModalButton onClick={handleOpenModal}>Open Modal</StyledModalButton>
        <br />
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
      </MyPageBox>
    </>
  );
}

export default mypage;

const MyPageBox = styled.div`
  padding: 1rem;
  border: 1px solid red;
`;
const StyledModalButton = styled.button`
  all: unset;

  bottom: 0;
  &:hover,
  :focus,
  :active {
    color: red;
  }
`;

const StyledMypageButton = styled.button`
  all: unset;

  bottom: 2rem;
  &:hover,
  :focus,
  :active {
    color: red;
  }
`;
