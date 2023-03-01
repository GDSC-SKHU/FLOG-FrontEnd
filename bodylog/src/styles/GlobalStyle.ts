// Global style 지정

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color:#ffffff;
  font-family: 'Noto Sans KR', sans-serif;
}
`;

export default GlobalStyle;
