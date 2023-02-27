import styled from 'styled-components';

function RenderDays() {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    days.push(<StyledCol key={i}>{date[i]}</StyledCol>);
  }
  return <StyledDaysRow>{days}</StyledDaysRow>;
}

export default RenderDays;

const StyledDaysRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCol = styled.div`
  padding: 1rem;
`;
