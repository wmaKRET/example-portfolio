import React from "react"

import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import ME from "../../assets/me.png"
import "./header.css"

function Header(){
    return (
        <header className="container header__container">
            <h5>Hello! My name is</h5>
            <h1>Wojciech</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={ME} alt="picture of me"/>
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
        </header>
    )
}

export default Header