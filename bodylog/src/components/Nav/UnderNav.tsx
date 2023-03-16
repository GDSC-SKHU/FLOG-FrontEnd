import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

function UnderNav() {
  const router = useRouter();

  // 추후 변경 가능성 O
  const onHome = () => {
    router.push({
      pathname: '/Home',
    });
  };

  const onMylog = () => {
    if (localStorage.getItem('logintoken') == null) {
      alert('로그인 머저 해라');
    } else {
      router.push({
        pathname: '/Mylog',
      });
    }
  };

  const onCalendar = () => {
    if (localStorage.getItem('logintoken') == null) {
      alert('로그인 머저 해라');
    } else {
      router.push({
        pathname: '/Mycalendar',
      });
    }
  };

  const onLog = () => {
    if (localStorage.getItem('logintoken') != null) {
      localStorage.removeItem('logintoken');
      router.push('/');
      return <></>;
    } else {
      return <></>;
    }
  };

  return (
    <StyledNav>
      <UnderNavBox>
        <StyledIcon>
          <StyledImgBox>
            <Image src={'/home.png'} alt={'Home'} width={25} height={25} onClick={onHome} />
          </StyledImgBox>
          <StyledText>Home</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/statistic.png'} alt={'MY LOG'} width={25} height={25} onClick={onMylog} />
          </StyledImgBox>
          <StyledText>My&nbsp;log</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/calendar.png'} alt={'CALENDAR'} width={25} height={25} onClick={onCalendar} />
          </StyledImgBox>
          <StyledText>Calendar</StyledText>
        </StyledIcon>

        <StyledIcon>
          <StyledImgBox>
            <Image src={'/logout.png'} alt={'LOGOUT'} width={25} height={25} onClick={onLog} />
          </StyledImgBox>
          <StyledText>Logout</StyledText>
        </StyledIcon>
      </UnderNavBox>
    </StyledNav>
  );
}

export default UnderNav;

const UnderNavBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 45rem;
`;
const StyledNav = styled.nav`
  width: 100%;
  height: 8%;
  display: flex;
  background-color: #3e7a60;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
`;

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImgBox = styled.div`
  display: flex;
`;

const StyledText = styled.div`
  margin-top: 0.2rem;
  color: white;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 400;
`;
