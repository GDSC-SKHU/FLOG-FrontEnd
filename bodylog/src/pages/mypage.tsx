import Calendar from '@/components/Calendar/Calendar';
import Modal from '@/components/Calendar/Modal';
import Nav from '@/components/Nav/Nav';
import UnderNav from '@/components/Nav/UnderNav';
import router from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function mypage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState('');
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const isLoginLogic = () => {
      if (localStorage.getItem('logintoken') != null) {
        setIsLogin('로그인 O');
      } else {
        setIsLogin('로그인 X');
      }
    };
    isLoginLogic();
  }, []);

  return (
    <>
      <Nav />
      <MyPageBox>
        <h1>Calendar</h1>
        <Calendar />
        캘린더 어쩌고 저쩌고
        <br />
        <StyledModalButton onClick={handleOpenModal}>Open Modal</StyledModalButton>
        <br />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {/* ================children (contents)컨테이너================ */}
          <ModalContainer className='type-modal'>
            <h2>FLOG</h2>
            <div>MEAL TYPE</div>
            <ImageContainer>
              <ImageBox>1</ImageBox>
              <ImageBox>2</ImageBox>
              <ImageBox>3</ImageBox>
            </ImageContainer>

            <div>MEAL AMOUNT</div>
            <ImageContainer>
              <ImageBox>1</ImageBox>
              <ImageBox>2</ImageBox>
              <ImageBox>3</ImageBox>
            </ImageContainer>
            <div>
              <button>CANCLE</button>
              <button>SAVE</button>
            </div>
          </ModalContainer>
        </Modal>
        <StyledMypageButton
          onClick={() => {
            router.push('/mypage');
          }}
        >
          LINK TO MYPAGE
        </StyledMypageButton>
        <IsLoginBox>현재 로그인 여부: {isLogin}</IsLoginBox>
        <UnderNav />
      </MyPageBox>
    </>
  );
}

export default mypage;
const ImageBox = styled.div`
  background-image: src('/Flogo.png');
  padding: 2rem;
`;
const ModalContainer = styled.div`
  border: 1px blue solid;
  width: 70vw;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  border: 1px solid red;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const IsLoginBox = styled.div`
  border: orange 2px solid;
`;
const MyPageBox = styled.div`
  padding-top: 8vh;
  width: 100vw;
  height: 100vh;
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
