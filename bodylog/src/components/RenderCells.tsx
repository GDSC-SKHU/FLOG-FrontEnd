import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { format } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

interface CProps {
  currentMonth: any;
  selectedDate: any;
  onDateClick: any;
}
//format(date, "yy-MM-dd");
function RenderCells({ currentMonth, selectedDate, onDateClick }: CProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';
  const [onClickDate, setOnClickDate] = useState(new Date()); // 아직 사용 용도 지정 X

  const on = () => {};

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = format(day, 'MM-dd-yyyy'); // Date 형식 지정
      // modal 창이 열려야 하는 로직
      const onClick = () => {
        console.log('선택된 날짜: ' + cloneDay);
        Swal.fire({
          icon: 'question',
          title: '선택된 날짜는...?',
          text: cloneDay,
          confirmButtonColor: '#168657',
        });
        //setOnClickDate(cloneDay); //! 첫 클릭시 undefined 두번째 클릭 시 이전 클릭 날짜가 나옴
      };
      days.push(
        <StyledDay className={`col cell ${!isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : format(currentMonth, 'M') !== format(day, 'M') ? 'notvalid' : 'valid'}`} key={day} onClick={on}>
          <p className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>{formattedDate}</p>
          <StyledImg src={'/logoimg.png'} alt={'test'} width={30} height={30} onClick={onClick} />
        </StyledDay>
      );
      day = addDays(day, 1);
    }
    rows.push(<StyledRow key={day}>{days}</StyledRow>);
    days = [];
  }
  return <StyledBody>{rows}</StyledBody>;
}

export default RenderCells;

// image div
const StyledImg = styled.img`
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

// day
const StyledDay = styled.div`
  cursor: default;
  /* &.disable {
    color: red;
  } */
  // valid: selected month's days
  &.cell.valid {
    color: black;
  }
  // notvalid: 먹통임
  &.notvalid {
    color: blue;
  }
  // selected: today 오늘 날짜는 green으로 보임
  &.cell.selected {
    color: green;
  }
  // cell: 달력에 보이는 모든 day들
  &.cell {
    color: lightgray;
  }
  // col: 달력에 보이는 모든 day들
  &.col {
  }
`;

const StyledRow = styled.div`
  border: 1px solid red;
  width: 100%;
  max-width: 30em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
