// 회원가입 페이지

import router from 'next/router';
import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

function Register() {
  const [registerId, setRegisterId] = useState(''); // 회원가입용(이하 Rgis) 아이디 상태
  const [registerPw, setRegisterPw] = useState(''); // Rgis 비밀번호 상태
  const [registerPwCheck, setRegisterPwCheck] = useState(''); // Rgis 비밀번호 확인 상태
  const [errMessage, setErrMessage] = useState(''); // 에러 메세지 상태
  // Rgis 아이디 input 상태 변화 핸들
  const handleRegisterId = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterId(e.target.value);
  };
  // Rgis 비밀번호 input 상태 변화 핸들
  const handleRegisterPw = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterPw(e.target.value);
  };
  // Rgis 비밀번호 확인 input 상태 변화 핸들
  const handleRegisterPwCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterPwCheck(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerId == '') {
      setErrMessage('아이디를 입력하세요');
    } else if (registerPw == '') {
      setErrMessage('비밀번호를 입력하세요');
    } else if (registerPw != registerPwCheck) {
      setErrMessage('두 개의 비밀번호가 같지 않습니다');
    } else {
      router.push('./');
    }
  };
  return (
    <StyledRegisterPage>
      <StyledH1>BodyLog</StyledH1>
      <SttledRgis>Register</SttledRgis>
      <StyledRegisterBox onSubmit={onSubmit}>
        <StyledInputText>ID</StyledInputText>
        <StyledInput value={registerId} onChange={handleRegisterId} placeholder='아이디를 입력하세요' />
        <StyledInputText>PASSWORD</StyledInputText>
        <StyledInput value={registerPw} onChange={handleRegisterPw} placeholder='비밀번호를 입력하세요' type='password' />
        <StyledInputText>PASSWORD CHECK</StyledInputText>
        <StyledInput value={registerPwCheck} onChange={handleRegisterPwCheck} placeholder='비밀번호를 다시 입력하세요' type='password' />
        <StyledErrBox>{errMessage}</StyledErrBox>
        <StyledButtonBox type='submit'>
          <StyledButtonText>Join Us</StyledButtonText>
        </StyledButtonBox>
      </StyledRegisterBox>
    </StyledRegisterPage>
  );
}

export default Register;

const StyledH1 = styled.h1`
  margin-top: 2rem;
  font-weight: bold;
  font-size: 3rem;
  color: #4e4e4e;
`;

const SttledRgis = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  color: #4e4e4e;
`;
const StyledErrBox = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  color: #ff8b95;
`;

const StyledRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRegisterBox = styled.form``;

const StyledInputText = styled.p`
  padding-left: 0.5rem;
  font-size: 0.7rem;
  margin-top: 2rem;
  color: #4e4e4e;
`;

const StyledInput = styled.input`
  all: unset;
  border: 1px solid #4e4e4e;
  background-color: #efefef;
  border-radius: 0.7rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 20rem;
  height: 2rem;
  padding-left: 0.5rem;
  &:focus,
  :hover {
    background-color: #a8e5cf;
    transition: all 0.3s;
  }
`;

const StyledButtonText = styled.div`
  color: #efefef;
  background-color: #3e7a60;
`;
const StyledButtonBox = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e7a60;
  border-radius: 0.7rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 20.5rem;
  height: 3rem;
  &:hover {
    cursor: pointer;
    ${StyledButtonText} {
      font-size: 1.2rem;
      font-weight: bold;
      transition: all 0.3s;
    }
  }
`;
