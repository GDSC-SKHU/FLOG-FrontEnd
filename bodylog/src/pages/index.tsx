import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

function Home() {

  const router = useRouter();

  const onProlog = () => {
    router.push({
      pathname: '/Prolog1',
    });
  };
  return (
    <StyledIndexBox>
      <ImageBox>
        <Image src={'/Flogo.png'} alt={'logoimg'} width={170} height={170} />
        <br></br>
        <StyledText>FLOG</StyledText>
      </ImageBox>

      <StyledP onClick={onProlog}>Hi</StyledP>
    </StyledIndexBox>
  );
}

export default Home;

const StyledIndexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5cc189;
  min-height: 100%;
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

const StyledP = styled.p`
  cursor: pointer;
  color: white;
  margin-bottom: 2rem;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
`;

