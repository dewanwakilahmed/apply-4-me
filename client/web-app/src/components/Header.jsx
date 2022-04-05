import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Redux Toolkit
import { logoutUser, reset } from "../features/auth/authSlice";

// Logos
import Logo from "../assets/logos/apply4me-logo-web.png";

// Icons
import { FaSignOutAlt, FaUser, FaSearch, FaUpload } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="">
          <img src={Logo} alt="Company Logo" className="company-logo" />
        </Link>
      </div>
      <nav className="header__nav">
        {user ? (
          <>
            <NavLink to="" className="header__nav-item">
              <FaSearch />
              <span className="header__nav-item-title">Search & Deliver</span>
            </NavLink>
            <NavLink to="upload-application" className="header__nav-item">
              <FaUpload />
              <span className="header__nav-item-title">Application Upload</span>
            </NavLink>
          </>
        ) : (
          <></>
        )}
        {user && user.email === "admin@admin.com" && (
          <NavLink to="register" className="header__nav-item">
            <FaUser />
            <span className="header__nav-item-title">Register User</span>
          </NavLink>
        )}
        {user && (
          <button className="btn btn-gray" onClick={logoutHandler}>
            <FaSignOutAlt />{" "}
            <span className="header__nav-item-title">Logout</span>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
