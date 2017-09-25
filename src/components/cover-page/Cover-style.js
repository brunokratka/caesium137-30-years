import styled           from 'styled-components';
import { fonts }        from '../../resources/styles/fonts';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  .home-main{
    display: flex;
    height: 100vh;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: ${breakpoints.tabletPortrait}) {
      height: auto;
    }
    div{
      display: flex;
      flex-direction: column;
      figure{
      margin: 1em 0px;
      margin-bottom: 45px;
        img{
          width: 100%;
        }
      }
      span{
      ${fonts.primary};
      font-size: 18px;
      font-style: italic;
      line-height: 1.72;
      text-align: justify;
      color: #4a4a4a;
      @media screen and (max-width: ${breakpoints.tabletPortrait}) {
        margin-bottom: 30px;
        }
      }
    }
  }
`