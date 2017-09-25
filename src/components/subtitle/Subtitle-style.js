import styled from 'styled-components';

export const Container = styled.div`
    width: 189px;
    height: 100%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-left: -219px;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-right: 5px;
        margin-left: 0;
        margin-right: 0;
    }

    @media screen and (max-width: 414px) {
        order: 2;
    }
`;

export const AlignBottom = styled.div`
    border-top: 3px solid #979797;
    padding-top: 12px;

    @media screen and (max-width: 414px) {
        border-top: none;
    }
`;

export const Paragraph = styled.span`
    font-size: 16px;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 16px;
        order: 2;
    }
`;