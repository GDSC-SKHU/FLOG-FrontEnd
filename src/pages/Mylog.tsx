import Nav from '@/components/Nav/Nav';
import styled from 'styled-components';
import UnderNav from '@/components/Nav/UnderNav';
import { idState, jsonState, memberIdState } from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { RecoilState } from 'recoil';
import type { ObjectEx } from '@/store/store';
function Mylog() {
  const TypeofEntoKo = new Map([
    ['HEALTH', '건강식'],
    ['BALANCE', '균형식'],
    ['INSTANT', '인스턴스식'],
  ]);

  const AmountEntoKo = new Map([
    ['LIGHT', '소식'],
    ['FITNESS', '적당'],
    ['OVEREATING', '과식'],
  ]);

  axios.defaults.withCredentials = true;
  const [globalJson, setGlobalJson] = useRecoilState(jsonState);
  const globalId = useRecoilValue(idState);
  const [typeofMeal, setTypeofMeal] = useState<null | Map<string, number>>(
    new Map<string, number>([
      ['HEALTH', 0],
      ['BALANCE', 0],
      ['INSTANT', 0],
    ])
  );
  const [typeofAmount, setTypeofAmount] = useState<null | Map<string, number>>(
    new Map<string, number>([
      ['LIGHT', 0],
      ['FITNESS', 0],
      ['OVEREATING', 0],
    ])
  );

  useEffect(() => {
    const url = `/api/${globalId}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('logintoken'),
        },
        withCredentials: true,
      })
      .then((response) => {
        const currentMonth = new Date().getMonth() + 1;
        const filterResponse: ObjectEx[] = response.data as ObjectEx[];
        const filterArr = filterResponse.filter((eachData) => {
          return (
            new Date(eachData.selectedDate as string).getMonth() + 1 ===
            currentMonth
          );
        });
        filterArr.forEach((eachData) => {
          setTypeofMeal(
            (prev) =>
              new Map(
                prev.set(
                  eachData.type as string,
                  prev.get(eachData.type as string) + 1
                )
              )
          );
          setTypeofAmount(
            (prev) =>
              new Map(
                prev.set(
                  eachData.quantity as string,
                  prev.get(eachData.quantity as string) + 1
                )
              )
          );
          setGlobalJson(filterArr);
        });

        if (filterResponse.length > 0) {
          setGlobalJson(filterArr);
        }
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <>
      <Nav />

      <StyledLogWrapper>
        <h3>이번 달 식사량 통계</h3>
        {Array.from(typeofMeal).map((eachMealData) => (
          <div key={eachMealData[0]} style={{ display: 'flex' }}>
            <span>{TypeofEntoKo.get(eachMealData[0])}</span>
            <div>{eachMealData[1]}번</div>
          </div>
        ))}

        {Array.from(typeofAmount).map((eachAmountData) => (
          <div key={eachAmountData[0]} style={{ display: 'flex' }}>
            <span>{AmountEntoKo.get(eachAmountData[0])}</span>
            <div>{eachAmountData[1]}번</div>
          </div>
        ))}
      </StyledLogWrapper>
      <UnderNav />
    </>
  );
}

const StyledLogWrapper = styled.div`
  display: flex;
  gap: 25px;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Mylog;
