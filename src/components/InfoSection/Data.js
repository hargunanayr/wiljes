import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa'



export const homeOjbOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Ryan Anugrah',
    description: 'Putra Kedua dari Bapak Yudi Susilo dan Ibu Siti Nurhamsyah',
    buttonLabel: <FaInstagram />,
    imgStart: false,
    img: require('../../images/PP1.png'),
    alt: 'Img1',
    dark: true,
    primary: false,
    darkText: false
};

export const homeOjbTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline: 'Dianah Razan',
    description: 'Putri Pertama dari Bapak Muhammad Siddik dan Ibu Nurjanah S',
    buttonLabel: <FaInstagram />,
    imgStart: true,
    img: require('../../images/PP2.png'),
    alt: 'Img2',
    dark: false,
    primary: true,
    darkText: true
};
export const homeOjbThree = {
    id: 'sign-up',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Get access to our exclusive app that allow you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../images/svg-3.svg').default,
    alt: 'Img3',
    dark: false,
    primary: true,
    darkText: true
};