import './NavBar.css';
import logo from '../../Assets/da_logo.png';
import { Link } from 'react-scroll';

export default function NavBar() {

  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="" />
      <ul>
        <li><Link to='home' smooth duration={500}>Home</Link></li>
        <li><Link to='portfolio' smooth duration={2000}>Portfolio</Link></li>
        <li><Link to='about' smooth duration={1200}>About Me</Link></li>
      </ul>
        <Link to='contact' smooth duration={1200}><button id="btn">Contact Me</button></Link>
    </div>
  );
}
