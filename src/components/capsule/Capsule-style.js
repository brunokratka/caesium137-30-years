import styled, { keyframes } from 'styled-components';
import { colors } from '../../resources/styles/colors';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    margin: 8em 0;
    @media only screen and (max-width: 64em){
        margin: 4em 0;
        padding: 0;
    }
`
export const BgCapsule = styled.img`
    width: 100%;
    object-fit: contain;
`

const LightAndGlow = `
    position: absolute;
    width: 22%;
    height: 27%;
    margin-left: 10%;
    border-radius: 1.6rem;
    top: 37%;
    left: 38.5%;
    @media only screen and (max-width: 568px){
        border-radius: 0.6rem;
    }
    @media only screen and (min-width: 48em) and (max-width: 64em){
        border-radius: 1.3rem;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366px){
        border-radius: 1rem;
    }
`;

export const Caesium = styled.div`
    ${LightAndGlow}
    background-color: #16c5ff;
    background-image: url(${process.env.PUBLIC_URL}/img/caesium-texture.png);
    background-size: 230%;
    background-position: center;
    overflow: hidden;
    z-index: 4;
`
export const Texture = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${process.env.PUBLIC_URL}/img/caesium-texture.png);
    background-size: 230%;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: 3;
`

const LightAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`

export const Light = styled.div`
    width: 100%;
    height: 100%;
    background-color: #87e1ff;
    animation: ${LightAnimation} 2.5s linear infinite;
    z-index: 2;
`

export const Glow = styled.div`
    ${LightAndGlow}
    animation: evwVtB 2.5s linear infinite;
    z-index: 1;
    box-shadow: 0 0 40px 5px #16c5ff;
    @media only screen and (max-width: 568px){
        box-shadow: 0 0 15px 2px #16c5ff;
    }
    @media only screen and (min-width: 48em) and (max-width: 64em){
        box-shadow: 0 0 20px 5px #16c5ff;
    }
`

export const Infos = styled.div`
    ${LightAndGlow}
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    top: 0;
    left: 38.5%;
    @media only screen and (max-width: 568px){
        top: 50%;
        height: 140%;
        margin: -20% 0 -20% 10%;
    }
    @media only screen and (min-width: 48em) and (max-width: 64em){
        padding: 0.8em;
        font-size: 23px;
    }
`
export const Info = styled.div`
    color: ${colors.primary};
    font-size: 29px;
    font-weight: bold;
    padding-top: 0.5em;
    &:last-child{
        border-top: dashed 0.15em ${colors.primary};
    }
    @media only screen and (max-width: 568px){
        &:last-child{
            border-top: dashed 0.15em ${colors.primary};
        }
        padding-top: 0.3em;
        font-size: 18px;
    }
    @media only screen and (min-width: 48em) and (max-width: 64em){
        &:last-child{
            border-top: dashed 0.15em ${colors.primary};
        }
        padding-top: 0.6em;
        font-size: 26px;
    }
`