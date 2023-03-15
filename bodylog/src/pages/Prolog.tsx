import Prolog1 from '@/components/Prolog/Prolog1';
import Prolog2 from '@/components/Prolog/Prolog2';
import Prolog3 from '@/components/Prolog/Prolog3';
import styled from 'styled-components';
import Nav from '@/components/Nav/Nav';
import UnderNav from '@/components/Nav/UnderNav';

function Prolog() {
  return (
    <>
      <Nav />
      <StyledContainer>
        <Prolog1 />
        <Prolog2 />
        <Prolog3 />
      </StyledContainer>
      <UnderNav />
    </>
  );
}

export default Prolog;

const StyledContainer = styled.div`
  padding: 10%;
`;
