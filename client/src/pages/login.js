import React, { useState, useRef } from "react";
import "../css/login.css";
import axios from "axios";

const LogIn = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/login", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    console.log(formData);
    formRef.current.reset();
  };

  const handleChange = (e) => {
    let prevData = { ...formData };
    prevData[e.target.name] = e.target.value;
    setFormData(prevData);
  };

  return (
    <div className="login">
      <p>
        username is "fakeAdmin" and password is "admin123", and please enter
        your real email to get a receipt
      </p>
      <h1>login</h1>
      <div className="form">
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            className="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            name="email"
          />
          <input
            className="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            name="username"
          />
          <input
            type="password"
            placeholder="password"
            className="placeholder"
            onChange={handleChange}
            name="password"
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
