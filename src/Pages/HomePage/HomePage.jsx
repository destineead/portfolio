import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <section id="home" className="home">
      <div className="home-section-content-box">
        <div className="home-section-content">
          <p className="section-title">Hi, I'm Destinee</p>
          <h1 className="home-section-title">
            <span>Full Stack Developer</span>
          </h1>
        </div>
      </div>
    </section>
    <section className="skills">Skill Section</section>
    <section className="about-me">About Me Section</section>
    <section className="my-portfolio">Portfolio Section</section>
    </>
  )
}