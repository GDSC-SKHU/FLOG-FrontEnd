import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function login() {
  const router = useRouter();

  // onSubmit과 기능 겹침
  // const onMain = () => {
  //   router.push({
  //     pathname: '/mypage',
  //   });
  // };

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // 로그인 버튼 로직
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = async () => {
      const response = await axios
        .post('/api/login', {
          userId: id,
          userPassword: password,
        })

        .then((response) => {
          localStorage.setItem('logintoken', response.data.accessToken);
          console.log('axios.post 성공 후');
          console.log('logintoken: ' + localStorage.getItem('logintoken'));
        });
    };
    // 로그인 버튼을 누르면
    login()
      // 로그인 성공 시 mypage로 이동
      .then(() => {
        console.log('mypage로 페이지 이동');
        router.push('/mypage');
      })
      // 서버에 없는 로그인 정보로 인해 에러가 발생하면 alert!
      .catch(() => {
        swal('Please check your imformation!');
      });
  };
  return (
    <>
      <StyledContainer>
        <StyledContent>
          <StyledLoginBox>
            <StyledTitle>FLOG</StyledTitle>
            <form onSubmit={onSubmit}>
              <StyledCover>
                <StyledInputWrapper>
                  <StyledInput type='text' placeholder='아이디' onChange={onChangeId} minLength={6} maxLength={20} required />
                  <StyledInput type='password' placeholder='비밀번호' onChange={onChangePw} minLength={8} required />
                </StyledInputWrapper>
                {/* 메인페이지 이동*/}
                <StyledLoginBtn type='submit'>Login</StyledLoginBtn>
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

export default login;

const StyledContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
  min-width: 100%;
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
  color: #272d2f;
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  min-width: 5rem;
  max-width: 15rem;
  height: 2rem;
  padding-left: 0.5rem;
  &:focus,
  :hover {
    background-color: #fce8af;
    transition: all 0.3s;
  }
`;

const StyledLoginBtn = styled.button`
  margin: 1rem 0.5rem;
  padding: 2rem 2.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  background-size: 200% auto;
  color: white;
  border-radius: 0.5rem;
  display: block;
  border: 0rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  background-color: #fe7240;
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
  color: #44ee4e;
`;
