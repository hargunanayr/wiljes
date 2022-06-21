import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeOjbOne, homeOjbThree, homeOjbTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Countdown from '../components/Countdown';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeOjbOne} />
            <InfoSection {...homeOjbTwo} />
            <Services />
            <InfoSection {...homeOjbThree} />
            <Countdown />
            <Footer />
        </>
    )
}

export default Home