import './Skills.css';

export default function Skills() {
  return (
  <section id="skills" className="skills">
    <h1 className='skills-h1'>Skills &<br /> Proficiencies</h1>
    <div className="skill-card-container">
      <div className="skill-card">
        <p className="card-title">Frontend</p><br />
        <p className="card-content">I'm passionate about creating beautiful and intuitive web experiences. With expertise in HTML, CSS, JavaScript, Python and more, I craft applications that not only look stunning but also function seamlessly across devices.</p>
      </div>
      <div className="skill-card">
        <p className="card-title">Backend</p><br />
        <p className="card-content">I excel in building robust backend systems using technologies like Node.js and Express, ensuring seamless data management and API development. My expertise extends to database design, with proficiency in SQL and NoSQL databases, enabling efficient and scalable solutions for complex web applications.</p>
      </div>
      <div className="skill-card">
        <p className="card-title">UI</p><br />
        <p className="card-content">I specialize in crafting visually appealing and responsive user interfaces through proficient utilization of CSS, employing techniques such as flexbox, grid layouts, and advanced styling to ensure elegant design and seamless user experiences.</p>
      </div>
    </div>
  </section>
  )
}