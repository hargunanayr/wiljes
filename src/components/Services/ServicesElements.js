import styled from "styled-components";
import bgImage from '../../images/gallery/slide2.jpg'

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #ba8300; */
    background-image: url(${bgImage});
    background-size: cover;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    z-index: 12;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 50px;
    row-gap: 50px;
    padding: 0 50px;
    z-index: 11;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: rgba(255,255,255,0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 10px;
    border-radius: 20px;
    max-height: 400px;
    width: 500px;
    padding: 30px;
    box-shadow: 3px 3px 3px rgba(255,228,196,0.3);
    /* box-shadow: 5px 5px; */
    transition: all 0.2s ease-in-out;
    

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center ;
`;

export const ServiceOverlay = styled.div`
    background: #000;
    position: absolute;
    opacity: 0.2;
    height: inherit;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 10;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`;