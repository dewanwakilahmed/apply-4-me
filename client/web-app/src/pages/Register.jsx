import { useState } from "react";

// Icons
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Create an account for an individual user</p>
      </section>

      <section className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
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
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              placeholder="Confirm Password"
              onSubmit={changeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register User
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
