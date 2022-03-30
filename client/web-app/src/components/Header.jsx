import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Redux Toolkit
import { logoutUser, reset } from "../features/auth/authSlice";

// Logos
import Logo from "../assets/logos/apply4me-logo-web.png";

// Icons
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/dashboard">
          <img src={Logo} alt="Company Logo" className="company-logo" />
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={logoutHandler}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </header>
  );
};

export default Header;
