import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

function Index() {
  // 로그인 되어있을 때 자동으로 mypage로 이동
  // useEffect(() => {
  //   if (localStorage.getItem('logintoken') != null) {
  //     router.push('/mypage');
  //   }
  // }, []);
  const router = useRouter();

  const onProlog = () => {
    router.push({
      pathname: '/Prolog',
    });
  };
  return (
    <StyledIndexBox>
      <ImageBox>
        <Image src={'/Flogo-white.png'} alt={'logoimg'} width={170} height={170} />
        <br></br>
        <StyledText>FLOG</StyledText>
      </ImageBox>

      <StyledBtn onClick={onProlog}>Welcome&nbsp;:&#41;</StyledBtn>
    </StyledIndexBox>
  );
}

export default Index;

const StyledIndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5cc189;
  height: 100vh;
`;

const ImageBox = styled.div`
  margin: 10rem 0 0 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 9rem;
`;

const StyledText = styled.p`
  margin-left: 1.2rem;
  color: white;
  font-size: 3.3rem;
  font-weight: 550;
  letter-spacing: 0.2rem;
`;

const StyledBtn = styled.button`
  padding: 3.2px;
  cursor: pointer;
  color: #d5d5d5;
  background-color: #5cc189;
  border: 2px solid #d5d5d5;
  margin-bottom: 2rem;
  border-radius: 5%;
  transition: all 0.5s ease;
  &:hover {
    color: white;
    border-color: white;
    transform: translateY(-0.125rem);
  }
`;
