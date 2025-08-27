import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Café Delight</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signin" className="signin-btn">Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
