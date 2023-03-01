import styled from 'styled-components';
import Image from 'next/image';

function Nav() {
  return (
    <>
      <StyledNav>
        <StyledLogo>
          <Image src={'/Flogo.png'} alt={'logoimg'} width={50} height={50} />
        </StyledLogo>
        <StyledText>FLOG</StyledText>
      </StyledNav>
    </>
  );
}

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  background-color: #5cc189;
`;

const StyledLogo = styled.div`
  margin-right: 0.2rem;
  padding: 0.5rem;
`;

const StyledText = styled.div`
  margin-top: 1rem;
  color: white;
  font-size: 1.7rem;
  font-weight: 550;
  letter-spacing: 0.1rem;
`;
