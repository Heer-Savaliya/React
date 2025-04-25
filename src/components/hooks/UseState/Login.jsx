import React, { useState } from "react";
import "./Registration.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
  };
  const handleChange = (e) => {
    const {name,value} = e.target;
    setUser((prev)=>({...prev ,[name]:value}))
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <h1>Login Form</h1>
          <p>Login Here , to enter</p>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            id=""
            required
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            id=""
            required
            autoComplete="off" 
            value={user.password}
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
              Logg In 
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
