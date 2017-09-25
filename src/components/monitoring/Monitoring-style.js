import styled           from 'styled-components';
import { fonts }        from '../../resources/styles/fonts';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${fonts.primary};
  font-size: 18px;
  line-height: 1.56;
  h3{
    margin-top: 0;
    font-weight: normal;
  }
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 60%;
    @media screen and (max-width: ${breakpoints.tabletPortrait}) {
        width: 60%;
    }
    @media screen and (max-width: ${breakpoints.mobilePortrait}) {
        width: 100%;
    }
    li{
      display: inline-flex;
      flex-direction: column;
      align-items: left;
      flex-basis: calc(50% - 15px);
      height: 28px;
      min-height: 28px;
      @media screen and (max-width: ${breakpoints.mobilePortrait}) {
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        text-align: left;
        flex-direction: row;
      }
      span{
        display: flex;
        align-items: center;
        white-space: nowrap;
        flex-basis: calc(50% - 15px);
        @media screen and (max-width: ${breakpoints.mobilePortrait}) {
          flex-basis: calc(60% - 0px);
        }
        &:before{
          content: '';
          width: 5px;
          height: 5px;
          margin-right: 10px;
          background-color: #0039ec;
        }
      }
    }
  }
`;