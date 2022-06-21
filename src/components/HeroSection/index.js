// import { hover } from '@testing-library/user-event/dist/hover'
import React, {useState} from 'react'
import Video from '../../videos/video-2.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Ryan & Dianah</HeroH1>
        <HeroP>2 Januari 2022</HeroP>
        <HeroBtnWrapper>
          <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={false} smooth="true" duration={1200} spy={true} exact='true' offset={-80} activeClass="active">
            Open Invitation! {hover ?  <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero