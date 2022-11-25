import "./about.css"
import ME from "../../assets/me.jpeg"
import {FaAward} from "react-icons/fa"
import {AiOutlineUser} from "react-icons/ai"
import {AiFillFolderOpen} from "react-icons/ai"

export default function About() {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                  <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward/>
                        <h5>Experience</h5>
                        <small>1+ Years Working</small>
                    </article>
                    <article className="about_card">
                        <AiOutlineUser/>
                        <h5>Clients</h5>
                        <small>100+ Worldwide</small>
                    </article>
                    <article className="about_card">
                        <AiFillFolderOpen/>
                        <h5>Projects</h5>
                        <small>50+ Completed</small>
                    </article>
                </div>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic ex perferendis dolore ab dolores, quidem sunt atque libero, minus, quos voluptates laboriosam aut quibusdam fugiat asperiores! Doloribus, dignissimos cum?
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>
  )
}
