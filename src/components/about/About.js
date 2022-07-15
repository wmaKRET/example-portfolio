import React from "react"

import "./about.css"
import ME from "../../assets/av.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

function About(){
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <img src={ME} alt="about image" />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>300+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>  
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit? Impedit dolorum cupiditate cumque eaque quos dicta repellendus distinctio adipisci autem tenetur! Minus quae quos modi perspiciatis illo error magnam.
                    </p>   
                    <a href="#contact" className="btn btn-primary">Let's talk</a>          
                </div>                
            </div>
        </section>
    )
}

export default About