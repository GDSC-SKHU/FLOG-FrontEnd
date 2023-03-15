import Calendar from '@/components/Calendar/Calendar';
import Nav from '@/components/Nav/Nav';
import SubNav from '@/components/Nav/SubNav';
import UnderNav from '@/components/Nav/UnderNav';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { idState, toogleState } from '../store/store';
import getFirst from '@/components/getFirst';
function Mycalendar() {
  const [isLogin, setIsLogin] = useState('');
  const [toogle, setToogle] = useRecoilState(toogleState);
  const globalToogle = useRecoilValue(toogleState);
  const globalId = useRecoilValue(idState);
  useEffect(() => {
    const isLoginLogic = () => {
      if (localStorage.getItem('logintoken') != null) {
        setIsLogin('로그인 O');
      } else {
        setIsLogin('로그인 X');
      }
    };
    isLoginLogic();
    // onClick(); // type에서 새로고침 시 문제 없음 | amount 일 때 새로고침 시 문제 발행
  }, []);

  const onClick = () => {
    if (globalToogle == 'TYPE') {
      setToogle('AMOUNT');
    } else if (globalToogle == 'AMOUNT') {
      setToogle('TYPE');
    }
  };

  return (
    <>
      <Nav />
      <SubNav />
      <MyPageBox>
        <button onClick={onClick}>{globalToogle}</button>
        <Calendar />
        <IsLoginBox>현재 로그인 여부: {isLogin}</IsLoginBox>
        <UnderNav />
      </MyPageBox>
    </>
  );
}

export default Mycalendar;

const IsLoginBox = styled.div`
  border: orange 2px solid;
`;
const MyPageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  height: 100%;
  width: 100%;
`;
