import { createGlobalStyle } from 'styled-components';

/*COLORS*/
/*#1d1d1f darkgrey*/
/*#434344 grey*/
/*#868686 font lg*/
/*#dadada lightgrey*/
/*#f5f5f7 almost white*/
/*#fff white*/
/*#0071e3 blue*/

export const AppStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    font-family: 'Mulish', sans-serif;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
  }
`;
