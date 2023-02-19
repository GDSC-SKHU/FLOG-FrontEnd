import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

function Login() {
  const router = useRouter();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledContainer>
        <StyledContent>
          <StyledLoginBox>
            <StyledTitle>BodyLog</StyledTitle>
            <form onSubmit={onSubmit}>
              <StyledInputWrapper>
                <StyledInput type='text' placeholder='아이디' onChange={onChangeId} maxLength={20} required />
                <StyledInput type='password' placeholder='비밀번호' onChange={onChangePw} minLength={8} required />
              </StyledInputWrapper>
              {/* 메인페이지 이동*/}
              <StyledBtnBox>
                <StyledLoginBtn type='submit'>Login</StyledLoginBtn>
              </StyledBtnBox>
            </form>
          </StyledLoginBox>

          {/* 회원가입 페이지 이동 */}
          <StyledLink href=''>
            <StyledP>회원가입</StyledP>
          </StyledLink>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Login;

const StyledContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

const StyledContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: rgba(139, 200, 170, 0.48) 0.375rem 0.125rem 1rem 0rem, rgba(223, 255, 218, 0.8) 0.375rem 0.125rem 1rem 0rem;
  border-radius: 1.5rem;
  background-color: #d2ffca;
`;

const StyledLoginBox = styled.div``;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #059a05;
`;

const StyledInputWrapper = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
`;

const StyledBtnBox = styled.div`
  float: right;
`;

const StyledLoginBtn = styled.button`
  margin: 1.5rem;
  padding: 1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 0.5rem;
  display: block;
  border: 0rem;
  font-weight: 700;
  box-shadow: 0rem 0rem 1rem 0.5rem #cdfcaa;
  background-image: linear-gradient(45deg, #009c1d 0%, #05cd23 51%, #8dd701 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StyledLink = styled(Link)``;
const StyledP = styled.p``;