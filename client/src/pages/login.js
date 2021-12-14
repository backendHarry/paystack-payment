import React, { useState, useRef } from "react";
import "../css/login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/login", formData)
      .then((response) => {
        const { data } = response;
        if (data.loggedIn) {
          history.push("/");
        }
      })
      .catch((err) => {
        if (err.response.data.info) {
          let errorObj = err.response.data.info.error;
          const stateErrors = { ...errors };
          let updatedObject = Object.assign(stateErrors, errorObj);
          setErrors(updatedObject);
        }
      });
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
      <div className="inline-errors">
        <p>
          {errors["username"] && errors["username"] !== null
            ? errors["username"]
            : ""}
        </p>
        <p>
          {errors["password"] && errors["password"] !== null
            ? errors["password"]
            : ""}
        </p>
      </div>
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
