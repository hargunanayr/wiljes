import styled from "styled-components";

export const CountdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
`;

export const CountdownWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1000px;
    align-items: center;
    padding: 50px 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const CountdownCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: auto 25px;
    font-size: 28px;
    text-align: center;
    padding: 10px 10px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const CountdownTitle = styled.h1`
    color: #ba8300;
    font-size: 48px;
    text-align: center;
`;