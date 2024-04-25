import './AboutMe.css';
import destineeImg from '../../Assets/destinee.jpg'

export default function() {
  return (
    <section id="about" className="about-me">
      <div className="about-me-content">
        <div className="about-me-title">
          <h1>About Me</h1>
        </div>
          <div className="about-me-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </div>
      </div>
        <div className='about-me-img'>
          <img src={destineeImg} alt="" />
        </div>
    </section>
  )
}