import React, { useState } from "react"

import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

function Nav(){
    const [activeNav, setActiveNav] = useState('#')

    function handleNavChange(value){
        setActiveNav(value)
    }

    return (
        <nav>
            <a 
                href="#" 
                className={activeNav === '#' ? 'active' : ''}
                onClick={() => handleNavChange('#')}
            >
                <AiOutlineHome />
            </a>
            <a 
                href="#about" 
                className={activeNav === '#about' ? 'active' : ''}
                onClick={() => handleNavChange('#about')}
            >
                <AiOutlineUser />
            </a>
            <a 
                href="#experience" 
                className={activeNav === '#experience' ? 'active' : ''}
                onClick={() => handleNavChange('#experience')}
            >
                <BiBook />
            </a>
            <a 
                href="#services" 
                className={activeNav === '#services' ? 'active' : ''}
                onClick={() => handleNavChange('#services')}
            >
                <RiServiceLine />
            </a>
            <a 
                href="#contact" 
                className={activeNav === '#contact' ? 'active' : ''}
                onClick={() => handleNavChange('#contact')}
            >
                <BiMessageDetail />
            </a>
        </nav>
    )
}

export default Nav