import './NavBar.css';
import logo from '../../Assets/da_logo.png';

export default function NavBar() {
  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Skills</li>
        <li>About Me</li>
        <li>Portfolio</li>
      </ul>
    </div>
  );
}
