import styled           from 'styled-components';
import { colors }       from '../../resources/styles/colors';
import { breakpoints }  from '../../resources/styles/breakpoints';
export const ArrowButton = styled.button`
    bottom: 45px;
    left: calc(50% - 20px);
    outline: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    display: inline-flex;
    background-color: transparent;
    border: solid 1px ${colors.primary};
    box-shadow: 0 0 10px -2px ${colors.primary}, inset 0 0 10px -2px ${colors.primary};
    @media screen and (max-width: ${breakpoints.mobileLandscape}) {
        margin-top: 20px;
    }
    &:before{
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% - 5.6px);
        transform: rotate(134deg);
        border-top: solid 1px ${colors.primary};
        border-right: solid 1px ${colors.primary};
    }
    @media screen and (max-width: ${breakpoints.mobileLandscape}) {
       bottom: 20px;
    }
`