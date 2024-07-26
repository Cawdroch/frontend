// Import modules

import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

// Create login function

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // Define input statements
  
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          {" "}Login
        </h1>
        <p>Login and start creating tasks</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

// Export default component module

export default Login
