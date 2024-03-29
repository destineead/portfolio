import './HomePage.css'
import destineeImg from '../../Assets/destinee.jpg'

export default function HomePage() {

  return (
    <>
    <section id="home" className="home">
      <img src={destineeImg} alt="" />
      <div className="home-section-content-box">
        <div className="home-section-content">
          <p className="section-title">Hi, I'm Destinee</p>
          <h1 className="home-section-title">
            <span>Full Stack Software Developer</span>
          </h1>
          <button id="btn">Contact Me</button>
        </div>
      </div>
    </section>
    <section id="skills" className="skills">
      <div className="skill-section-title">
        <p>MY SKILLS</p>
      </div>
      <div className="skill-title"></div>
        <h1>Skills & Proficiencies</h1>
      <div className="skill-card">
        <p className="skill-title">Frontend</p>
        <p className="skill-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="skill-card">
        <p className="skill-title">Backend</p>
        <p className="skill-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>
    <section id="about" className="about-me">
      <div className="about-me-title">
        <h1>About Me</h1>
      </div>
      <div className="about-me-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
    </section>
    <section id="portfolio" className="my-portfolio">
      <div className="portfolio-section-title"><p>RECENT PROJECTS</p></div>
      <div className="portfolio-title">Portfolio</div>
      <button id="btn"><a href="https://github.com/destineead">Visit My GitHub</a></button>
      <div className="portfolio-card">
        <img src="" alt="" />
        <p>Garment of God</p>
        <div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className="portfolio-card">
        <img src="" alt="" />
        <p>Inspire Me Home Decor</p>
        <div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className="portfolio-card">
        <img src="" alt="" />
        <p>Never Enough Novels</p>
        <div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className="portfolio-card">
        <img src="" alt="" />
        <p>Spaceman</p>
        <div className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </section>
    </>
  )
}