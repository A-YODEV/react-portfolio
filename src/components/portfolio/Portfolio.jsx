import "./portfolio.css"
import IMG1 from "../../assets/IMG1.webp"

export default function Portfolio() {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>This Is a Porfolio Item Title</h3>
                <div className="portfolio_item-cta">
                    <a href="http://github.com" className="btn" target="_blank">Github</a>
                    <a href="http://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>This Is a Porfolio Item Title</h3>
                <div className="portfolio_item-cta">
                    <a href="http://github.com" className="btn" target="_blank">Github</a>
                    <a href="http://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>This Is a Porfolio Item Title</h3>
                <div className="portfolio_item-cta">
                    <a href="http://github.com" className="btn" target="_blank">Github</a>
                    <a href="http://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>This Is a Porfolio Item Title</h3>
                <div className="portfolio_item-cta">
                    <a href="http://github.com" className="btn" target="_blank">Github</a>
                    <a href="http://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>This Is a Porfolio Item Title</h3>
                <div className="portfolio_item-cta">
                    <a href="http://github.com" className="btn" target="_blank">Github</a>
                    <a href="http://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>This Is a Porfolio Item Title</h3>
                <div className="portfolio_item-cta">
                    <a href="http://github.com" className="btn" target="_blank">Github</a>
                    <a href="http://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
        </div>
    </section>
  )
}
