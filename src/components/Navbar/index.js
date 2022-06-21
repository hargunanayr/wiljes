import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from "./NavbarElements";
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if( window.scrollY > 690 ) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    R&D
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about" smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="discover" smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="services" smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="sign-up" smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">Sign Up</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar