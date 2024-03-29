import './NavBar.css';
import logo from '../../Assets/da_logo.png';
import { Link } from 'react-scroll';

export default function NavBar() {

  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="" />
        <Link to='home' smooth duration={500}>Home</Link>
        <Link to='portfolio' smooth duration={1200}>Portfolio</Link>
        <Link to='about' smooth duration={1200}>About Me</Link>
        <button>Contact Me</button>
    </div>
  );
}
