import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

function Login() {
  const router = useRouter();

  const onMain = () => {
    router.push({
      pathname: '/mypage',
    });
  };

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
              <StyledCover>
                <StyledInputWrapper>
                  <StyledInput type='text' placeholder='아이디' onChange={onChangeId} minLength={6} maxLength={20} required />
                  <StyledInput type='password' placeholder='비밀번호' onChange={onChangePw} minLength={8} required />
                </StyledInputWrapper>
                {/* 메인페이지 이동*/}
                <StyledLoginBtn type='submit' onClick={onMain}>
                  Login
                </StyledLoginBtn>
              </StyledCover>
            </form>
          </StyledLoginBox>

          {/* 회원가입 페이지 이동 */}

          <StyledButton onClick={() => router.push('./register')}>
            <p>회원가입</p>
          </StyledButton>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Login;

const StyledContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

const StyledContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.5rem;
`;

const StyledLoginBox = styled.div`
  padding: 1rem;
`;

const StyledTitle = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #059a05;
`;

const StyledCover = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInputWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.7rem;
  all: unset;
  border: 1px solid #4e4e4e;
  background-color: #efefef;
  border-radius: 0.7rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 15rem;
  height: 2rem;
  padding-left: 0.5rem;
  &:focus,
  :hover {
    background-color: #a8e5cf;
    transition: all 0.3s;
  }
`;

const StyledLoginBtn = styled.button`
  margin: 1rem 0.5rem;
  padding: 2rem 2.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 0.5rem;
  display: block;
  border: 0rem;
  font-weight: 700;
  font-size: 1rem;
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

const StyledButton = styled.button`
  all: unset;
  text-align: right;
  color: green;
`;
