import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
        <Image src={'/Flogo.png'} alt={'logoimg'} width={170} height={170} />
        <br></br>
        <StyledText>FLOG</StyledText>
      </ImageBox>

      <StyledBtn onClick={onProlog}>Welcome&nbsp;:)</StyledBtn>
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
  width: 100vw;
`;

const ImageBox = styled.div`
  margin: 160px 0 0 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 144px;
`;

const StyledText = styled.p`
  margin-left: 19.2px;
  color: white;
  font-size: 52.8px;
  font-weight: 550;
  letter-spacing: 3.2px;
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
