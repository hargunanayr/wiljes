import React from 'react'
// import { Button } from 'react-scroll'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from './InfoElements'

import { Button } from '../ButtonElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, img2, alt2, topLine2, headline2, description2}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home" smooth="true" duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img2} alt={alt2}/>
                        </ImgWrap>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine2}</TopLine>
                            <Heading lightText={lightText}>{headline2}</Heading>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <BtnWrap>
                                <Button to="home" smooth="true" duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection