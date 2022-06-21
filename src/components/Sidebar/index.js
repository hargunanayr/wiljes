import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle} smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle} smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">Discover</SidebarLink>
                <SidebarLink to="services" onClick={toggle} smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">Services</SidebarLink>
                <SidebarLink to="sign-up" onClick={toggle} smooth="true" duration={500} spy={true} exact='true' offset={-80} activeClass="active">Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="sign-in">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar