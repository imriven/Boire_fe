import React, { useState } from "react";
import { LoginWrapper } from "./style";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:3300/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token, checked);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

    return (
      
    <LoginWrapper>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            &nbsp;Stay signed in.
          </label>
        </label>
        <br />
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </LoginWrapper>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
