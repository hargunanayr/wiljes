import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import styled from "styled-components";

export const GalleryContainer = styled.section`
    position: relative;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        height: 400px;
    }
`;

export const ImgGallery = styled.img`
    width: 1100px;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const RightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const GalleryWrap = styled.div`
    opacity: 0;
    transition: all 0.8s ease-in-out;

    &.active {
        opacity: 1;
        transform: scale(1.05);
        transition: all 0.8s ease-in-out;
    }
`;

export const GalleryH1 = styled.h1`
    margin-top: 200px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 2.5rem;
    color: #ba8300;

    @media screen and (max-width: 480px) {
        margin-top: 50px;
        margin-bottom: 0;
    }
`;