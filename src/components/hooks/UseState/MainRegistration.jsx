import React, { useState } from "react";
import "./Registration.css";

const MainRegistration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section
        className="summary"
        style={{ textAlign: "center", margin: "10px" }}
      >
        <p>
          Hello , my name is
          <span>
            {" "}
            {user.firstName} {user.lastName}
          </span>
          .My email address is <span>{user.email}</span>
          and my phone number is <span>{user.phone}</span>
        </p>
      </section>

      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={user.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={user.lastName}
            onChange={handleChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            autoComplete="current-password"
            value={user.password}
            onChange={handleChange}
          />

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="1234567897"
            required
            value={user.phone}
            onChange={handleChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default MainRegistration;
