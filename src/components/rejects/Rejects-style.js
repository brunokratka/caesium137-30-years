import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import { colors } from '../../resources/styles/colors';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  h3{
    font-size: 29px;
    font-style: italic;
    font-weight: normal;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: ${breakpoints.mobilePortrait}) {
    flex-direction: column;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    @media screen and (max-width: ${breakpoints.mobileLandscape}) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
    }
    li{
      display: flex;
      flex-direction: row;
      margin-bottom: 37px;
      @media screen and (max-width: ${breakpoints.mobilePortrait}) {
        margin-bottom: 0;
      }
      img{
        width: 105px;
        height: 105px;
        @media screen and (max-width: ${breakpoints.mobileLandscape}) {
          width: 60px;
        }
      }
      div{
        width: 109px;
        display: flex;
        margin-left: 30px;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: ${breakpoints.mobileLandscape}) {
          margin-left: 10px;
          margin-left: 30px;
        }
        .counter{
          color: #000000;
          ${fonts.secondary}
          font-size: 76px;
          line-height: 1.2;
          text-align: center;
          @media screen and (max-width: ${breakpoints.mobileLandscape}) {
            font-size: 36px;
            text-align: left;
          }
        }
        span{
          font-size: 23px;
          font-weight: 500;
          line-height: 1.48;
          text-align: left;
          color: ${colors.primary};
          &.counter-description{
            margin-top: -20px;
            text-align: center;
            @media screen and (max-width: ${breakpoints.mobileLandscape}) {
              margin-top: -10px;
              text-align: left;
            }
          }
        }
      }
    }
  }
`
