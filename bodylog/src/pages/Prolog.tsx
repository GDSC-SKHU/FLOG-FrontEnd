import Prolog1 from '@/components/Prolog/Prolog1';
import Prolog2 from '@/components/Prolog/Prolog2';
import Prolog3 from '@/components/Prolog/Prolog3';
import styled from 'styled-components';
import Nav from '@/components/Nav/Nav';

function Prolog() {
  return (
    <>
      <Nav />
      <StyledContainer>
        <Prolog1 />
        <Prolog2 />
        <Prolog3 />
      </StyledContainer>
    </>
  );
}

export default Prolog;

const StyledContainer = styled.div`
  
`;
