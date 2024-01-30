import React, { useState } from "react";
import PropTypes from "prop-types";
import useToken from "./useToken";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

async function loginUser(credentials, setToken) {
  return fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json();
    })
    .then((token) => {
      setToken(token);
      console.log("Login successful"); // Log success message
      <link to="/dashboard"></link>;
    })
    .catch((error) => {
      console.error("Login failed:", error.message); // Log error message
    });
}

export default function Login() {
  const { token, setToken } = useToken(); // Use the useToken hook
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({ username, password }, setToken);
    // navigateTo("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
          {/* <Link to="/dashborad"></Link> */}
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
