import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Akad Nikah</ServicesH2>
                <ServicesP>Minggu, 02 Januari 2022</ServicesP>
                <ServicesP>08:00 s/d 10:00 WIB</ServicesP>
                <ServicesP>Puri Betal Hall</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Resepsi</ServicesH2>
                <ServicesP>Minggu, 02 Januari 2022</ServicesP>
                <ServicesP>11:00 s/d 13:00 WIB</ServicesP>
                <ServicesP>Puri Betal Hall</ServicesP>
            </ServicesCard>
            {/* <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
            </ServicesCard> */}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services