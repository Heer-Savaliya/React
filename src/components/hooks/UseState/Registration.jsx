import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        firstName,
        lastName,
        email,
        password,
        phone
    }
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
    }
    // setLastName(e.target.value);
    // setEmail(e.target.value);
    // setPassword(e.target.value);
    // setPhone(e.target.value);
  };
  return (
    <>
    <section className="summary" style={{textAlign:"center" ,margin:"10px"}}>
        <p>Hello , my name is  
            <span> {firstName} {lastName}</span>
            .My email address is <span>{email}</span>
            and my phone number is <span>{phone}</span>
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
            value={firstName}
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
            value={lastName}
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
            value={email}
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
            value={password}
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
            value={phone}
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

export default Registration;
