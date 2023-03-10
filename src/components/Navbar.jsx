import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Cv">Cv</Link>
      <Link to="/Activities">Activities</Link>
    </nav>
  );
}

export default Navbar;
