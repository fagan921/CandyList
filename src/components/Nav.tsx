import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Candidate Search</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">🔍 Search Candidates</Link>
        </li>
        <li>
          <Link to="/saved">⭐ Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
