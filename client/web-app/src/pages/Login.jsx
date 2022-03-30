import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Redux Toolkit
import { loginUser, reset } from "../features/auth/authSlice";

// Icons
import { FaSignInAlt } from "react-icons/fa";

// Components
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userLoginData = {
      email,
      password,
    };

    dispatch(loginUser(userLoginData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please use your credentials to login</p>
      </section>

      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-blue">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
