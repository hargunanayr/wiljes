// import { hover } from '@testing-library/user-event/dist/hover'
import React, {useState} from 'react'
import Video from '../../videos/video-2.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import '../../App.css'

const Hero = ( {changeStyle, buttonClick, hidebutton} ) => {
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
        <HeroBtnWrapper hidebutton={hidebutton}>
          <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary={1} dark={0} smooth="true" duration={1200} spy={true} exact='true' offset={-80} activeClass="active" onClick={() => {changeStyle(); buttonClick();}}>
            Open Invitation! {hover ?  <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero