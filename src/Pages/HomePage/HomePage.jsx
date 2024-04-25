import './HomePage.css'
import Skills from '../../Components/Skills/Skills';
import AboutMe from '../../Components/AboutMe/AboutMe';
import MyPortfolio from '../../Components/MyPortfolio/MyPortfolio';
import destineeImg from '../../Assets/destinee.jpg'

export default function HomePage() {

  return (
    <>
    <section id="home" className="home">
      <div className="img-card">
        <img src={destineeImg} alt="" />
      </div>
      <div className="home-section-content-box">
        <div className="home-section-content">
          <p className="section-title">Hi, I'm Destinee</p>
          <h1 className="home-section-title">
            <span>Full Stack<br /> Software Developer</span>
          </h1>
          <button id="btn">Let's get in touch!</button>
        </div>
      </div>
    </section>
    <Skills />
    <AboutMe />
    <MyPortfolio />
    </>
  )
}