import styled from 'styled-components';

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
  return <StyledDaysRow>{days}</StyledDaysRow>;
}

export default RenderDays;

const StyledDaysRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 30rem;
  border: orange 1px dotted;
`;
const StyledCol = styled.div`
  display: flex;
  align-items: center;
  border: orange 1px solid;
  &.sun {
    color: red;
  }
  &.sat {
    color: blue;
  }
`;
