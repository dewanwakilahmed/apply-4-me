import { useState } from "react";

// Icons
import { FaSearch } from "react-icons/fa";

const SearchDeliver = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    dateOfFiling: "2022-01-01",
    dateOfAppointment: "2022-01-01",
  });

  const { name, type, dateOfFiling, dateOfAppointment } = formData;

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
      <section className="heading search-deliver-heading">
        <h1>
          <FaSearch /> Search & Deliver
        </h1>
        <p>Search for a processed Application</p>
      </section>

      <div className="search-deliver">
        <section className="form search-form">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name of Applicant
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Enter the Applicant's name"
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type" className="form-label">
                Type of Application
              </label>
              <select
                name="type"
                id="type"
                value={type}
                onChange={changeHandler}
                className="form-control"
              >
                <option value="passport">Passport</option>
                <option value="visa">Visa</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfFiling" className="form-label">
                Filing Date
              </label>
              <input
                type="date"
                name="dateOfFiling"
                id="dateOfFiling"
                value={dateOfFiling}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfAppointment" className="form-label">
                Appointment Date
              </label>
              <input
                type="date"
                name="dateOfAppointment"
                id="dateOfAppointment"
                value={dateOfAppointment}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-blue">
                Search
              </button>
            </div>
          </form>
        </section>
        <section className="files-found-container">
          <p className="files-found-label">Files Found</p>
          <div className="files-found"></div>
          <button className="btn btn-blue btn-confirm">Confirm Delivery</button>
        </section>
      </div>
    </>
  );
};

export default SearchDeliver;
