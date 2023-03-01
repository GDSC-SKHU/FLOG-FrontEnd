import Modal from '@/components/Modal';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <StyledIndexBox>
      <ImageBox>
        <Image src={'/logoimg.png'} alt={'logoimg'} width={200} height={200} />
        <br></br>
        <Image src={'/logotext.png'} alt={'logo'} width={200} height={60} />
      </ImageBox>
      <LoginButton
        onClick={() => {
          router.push('/login');
        }}
      >
        LOGIN
      </LoginButton>
    </StyledIndexBox>
  );
}

export default Home;

const StyledIndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-color: #ffc529;
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
