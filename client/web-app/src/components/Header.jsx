import { Link } from "react-router-dom";

// Icons
import { FaSignInAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>apply4me</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login" className="nav-link">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
