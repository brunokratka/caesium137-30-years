import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  // padding: 15px 0 25px 0;
  flex-direction: column;
  justify-content: center;
  ul{
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
    li{
      display: flex;
      margin-top: 30px;
      flex-direction: row;
      padding-bottom: 30px;
      align-items: flex-end;
      border-bottom: solid 1px #ffffff;
      @media screen and (max-width: ${breakpoints.mobileLandscape}) {
        align-items: flex-start;
      }
      &:first-of-type{
        margin-top: 0;
      }
      span{
        font-size: 18px;
        text-align: left;
        &:first-of-type{
          ${fonts.secondary};
          font-size: 76px;
          line-height: 0.74;
          margin-right: 16px;
          min-width: 65px;
        }
      }
    }
  }
  div{
    width: 100%;
    line-height: 1;
    padding: 0 40px;
    font-size: 16px;
    ${fonts.primary};
    text-align: left;
    font-weight: bold;
    box-sizing: border-box;
  }
`




