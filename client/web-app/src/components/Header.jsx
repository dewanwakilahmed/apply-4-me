import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Redux Toolkit
import { logoutUser, reset } from "../features/auth/authSlice";

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
          <p>apply4me</p>
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
          <>
            <li>
              <Link to="/" className="nav-link">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
