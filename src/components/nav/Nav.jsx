import "./nav.css"
import {FaHome} from "react-icons/fa"
import {AiOutlineUser} from "react-icons/ai"
import {FaAward} from "react-icons/fa"
import {RiServiceFill} from "react-icons/ri"
import {TbMessage} from "react-icons/tb"
import { useState } from "react"



export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaAward/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage/></a>
    </nav>
  )
}
