import React from "react"

import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"

function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__email">
                    <MdOutlineEmail />
                    <h4>Email</h4>
                    <h5>wkret91.2@gmail.com</h5>
                    <a href="mailto:wkret91.2@gmail.com">Send Message</a>
                </div>
                <form className="contact__form">
                    <input type="text" name="name" placeholder="Name..."></input>
                    <input type="email" name="email" placeholder="Email..." required></input>
                    <textarea name="message" placeholder="Your message..." required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact