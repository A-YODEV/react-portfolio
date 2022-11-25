import "./footer.css"
import {ImFacebook2} from "react-icons/im"
import {ImInstagram} from "react-icons/im"
import {FaTwitterSquare} from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">AYODEL</a>
      <ul className="permalinks">
         <li><a href="#">Home</a></li>
         <li><a href="about">About</a></li>
         <li><a href="experience">Experience</a></li>
         <li><a href="services">Services</a></li>
         <li><a href="portfolio">Portfolio</a></li>
         <li><a href="testimonials">Testimonials</a></li>
         <li><a href="contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><ImFacebook2/></a>
        <a href="https://instagram.com"><ImInstagram/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>

      <div className="footer_copyright">
         <small>&copy; AYODEL. All rights reserved.</small>
      </div>
    </footer>
  )
}
