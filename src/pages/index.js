import '../App.css'
import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeOjbOne } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Countdown from '../components/Countdown';
import Gallery from '../components/Gallery';
import { SliderData } from '../components/Gallery/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [overflow, setOverflow] = useState(document.body.classList.add('removeScroll'))

    const changeStyle = () => {
      setOverflow(document.body.classList.add('addScroll'))
    }

    const [hidebutton, setHidebutton] = useState(false)

    const buttonClick = () => {
        setHidebutton(!hidebutton)
    }

    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            {/* <Navbar toggle={toggle} /> */}
            <HeroSection overflow={overflow} changeStyle={changeStyle} hidebutton={hidebutton} buttonClick={buttonClick}/>
            <InfoSection {...homeOjbOne} />
            <Services />
            <Gallery slides={SliderData}/>
            <Countdown />
            <Footer />
        </>
    )
}

export default Home