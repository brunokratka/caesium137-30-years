import styled from 'styled-components';
import { fonts } from '../../resources/styles/fonts';
import { colors } from '../../resources/styles/colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: wrap;
`;

const SimpleContent = styled.div`
    box-sizing: border-box;
    align-items: end;
    padding: 30px 50px 30px 20px;
    z-index: 2;
    opacity: 0;

    ${props => (props.orientation === 'toRight') && `
        transform: translate(-50%, 0);
    `}

    ${props => (props.orientation === 'toLeft') && `
        transform: translate(50%, 0);
    `}

    ${props => (props.orientation === 'toTop') && `
        transform: translate(0, 50%);
    `}

    &.animate{
        transition: transform 1s, opacity 2s;
        opacity: 1;
        transform: translate(0, 0);
    }

    @media screen and (max-width: 414px) {
        flex-direction: column;
    }
`;

export const LeftContent = SimpleContent.extend`
    width: 55%;
    height: 320px;
    background-color: #0c74fa;
    display: flex;
    color: #FFF;
`;

export const RightContent = SimpleContent.extend`
    width: 45%;
    height: 320px;
    background-color: #66c5ee;
    color: ${colors.vibrantBlue};
    display: flex;
`;

export const MiddleContent = SimpleContent.extend`
    width: 80%;
    padding: 30px;
    margin-top: -225px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 414px) {
        width: 100%;
        padding: 10px;
        margin-top: -125px;
    }
`;

export const Destaque = styled.div`
    font-size: 47px;
    font-weight: bold;
    span{
        ${fonts.secondary};
    }
`;

export const Info = styled.div`
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    margin-left: 10px; 
`;