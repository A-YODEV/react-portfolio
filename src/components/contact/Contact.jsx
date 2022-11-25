import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsTwitter} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import { useRef } from 'react';
import emailjs from "emailjs-com"


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_awxmtv3', 'template_zgswf6q', form.current, 'w4WsHis0YgBmTUOGS')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <HiOutlineMail className="contact_option-icon"/>
              <h4>Email</h4>
              <h5>ayodele466@gmail.com</h5>
              <a href="mailto:ayodele466@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
              <BsTwitter className="contact_option-icon"/>
              <h4>Twitter</h4>
              <h5>@ayodel</h5>
              <a href="https://twitter.com" target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
              <IoLogoWhatsapp className="contact_option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+2348102750509</h5>
              <a href="https://api.whatsapp.com/send?phone+2348102750509" target="_blank">Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required> </textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
    </section>
  )
}


