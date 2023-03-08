import styled from "styled-components";

function RenderDays() {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    days.push(
      <StyledCol key={i} className={`${i == 0 ? 'sun' : i == 6 ? 'sat' : ''}`}>
        {date[i]}
      </StyledCol>
    );
  }
  return (
    <Bundle>
      <StyledDaysRow>{days}</StyledDaysRow>
    </Bundle>
  );
}

export default RenderDays;

const Bundle = styled.div`
  border: solid 1px blue;
  display: flex;
  justify-content: center;
`;

const StyledDaysRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //max-width: 30rem;
  border: orange 1px dotted;
`;
const StyledCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: orange 1px solid;
  width: 4.5rem;
  &.sun {
    color: red;
  }
  &.sat {
    color: blue;
  }
`;

