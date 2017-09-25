import styled from 'styled-components';
import { breakpoints }  from '../../resources/styles/breakpoints';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    @media screen and (max-width: ${breakpoints.mobilePortrait}) {
        width: 100vw;
        max-width: 100%;
    }
    figure{
        margin: 0;
    }
`;

export const Map = styled.div`
    padding: 30px;
`;
