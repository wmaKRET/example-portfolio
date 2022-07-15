import React from "react"

import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Experience() {
    return (
        <section id="experience">
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill />
                        <h4>HTML</h4>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill />
                        <h4>CSS</h4>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill />
                        <h4>Sass</h4>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill />
                        <h4>Javascript</h4>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill />
                        <h4>React</h4>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill />
                        <h4>Git</h4>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Experience