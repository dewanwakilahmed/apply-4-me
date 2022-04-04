import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Redux Toolkit
import { registerUser, reset } from "../features/auth/authSlice";

// Icons
import { FaUser } from "react-icons/fa";

// Components
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && message) {
      toast.success(message);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password === password2) {
      const userRegistrationData = {
        name,
        email,
        password,
      };

      dispatch(registerUser(userRegistrationData));
    } else {
      toast.error("Passwords do not match");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (user.email !== "admin@admin.com") {
    return toast.error("Unauthorized");
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an account for a new user</p>
      </section>

      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter the user's name"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter the user's email"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter a password for the user"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              placeholder="Confirm Password"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-blue">
              Register User
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
