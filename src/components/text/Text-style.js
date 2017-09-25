import styled from 'styled-components';
import { colors } from '../../resources/styles/colors';
import { fonts } from '../../resources/styles/fonts';

export const Paragraph = styled.p`
  color: #000000;
  text-align: justify;
  ${props => props.eye && 'font-weight: 500;'}
  font-size: ${props => props.eye ? '23px' : '18px'};
  line-height: ${props => props.eye ? '34px' :'28px'};
  @media only screen and (max-width: 568px){
    font-size: ${props => props.eye ? '18px' : '16px'};
    line-height: ${props => props.eye ? '26px' :'24px'};
  }
  a{
    ${fonts.primary};
    color: ${colors.scarlet};
    font-size: 18px;
    font-weight: 900;
    line-height: 1.56;
    text-align: justify;
  }
`;