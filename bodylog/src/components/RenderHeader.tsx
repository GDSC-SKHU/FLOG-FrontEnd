import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

interface HProps {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
}

function RenderHeader({ currentMonth, prevMonth, nextMonth }: HProps) {
  return (
    <StyledHeaderRow>
      <Icon icon='bi:arrow-left-circle-fill' onClick={prevMonth} />
      <div className='col col-start'>
        <span className='text'>
          {format(currentMonth, 'yyyy-')}
          <span className='text month'>{format(currentMonth, 'M')}월</span>
        </span>
      </div>
      <Icon icon='bi:arrow-right-circle-fill' onClick={nextMonth} />
    </StyledHeaderRow>
  );
}

export default RenderHeader;

const StyledHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;
