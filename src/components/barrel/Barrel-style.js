import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  h3{
    font-size: 23px;
    font-style: italic;
    font-weight: normal;
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 430px;
  .barrel{
    &-images{
      display: flex;
      flex-direction: column;
      img{
        opacity: 0;
        transition-property: transform, opacity;
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        transition-duration: 650ms;
        transition-delay: 50ms;
        transform: translateY(-100%);

        &.animate{
          opacity: 1;
          &:nth-of-type(1){
            transition-duration: 1100ms;
            transform: translateY(10%);
            z-index: 3;
          }
          &:nth-of-type(2){
            transition-duration: 950ms;
            transform: translateY(-14%);
            z-index: 2;
          }
          &:nth-of-type(3){
            transition-duration: 800ms;
            transform: translate(1%,-40%);
            z-index: 1;
          }
          &:nth-of-type(4){
            transition-duration: 650ms;
            transform: translate(2%,-68%);
            z-index: 0;
          }
        }
      }
      @media screen and (max-width: ${breakpoints.mobilePortrait}) {
        transform: scale(0.8);
      }
    }
    &-description{
      ul{
        list-style: none;
        text-align: left;
        li{
          opacity: 0;
          margin-bottom: 19px;

          transition-property: transform, opacity;
          transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
          transition-duration: 650ms;
          transition-delay: 50ms;
          transform: translateX(100%);

          &:nth-of-type(1){
            transition-duration: 650ms;
          }
          &:nth-of-type(2){
            transition-duration: 800ms;
          }
          &:nth-of-type(3){
            transition-duration: 950ms;
          }
          &:nth-of-type(4){
            transition-duration: 1100ms;
          }
          &.animate{
            opacity: 1;
            transform: translateX(0%);
          }
          span{
            font-size: 23px;
            ${fonts.secondary}
          }
          p{
            font-size: 18px;
            margin-top: 4px;
          }
        }
        @media screen and (max-width: 414px) {
          padding: 0;
        }
      }
      @media screen and (max-width: ${breakpoints.mobilePortrait}) {
        transform: scale(0.8);
        margin-left: -70px;
      }
    }
  }
`