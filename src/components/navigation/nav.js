import React from "react";
import { Nav } from "grommet";
import { NavLink, useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    render();
  };

  return (
    <Nav direction="row" background="brand" pad="medium">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/preferences">Settings</Link>
      <NavLink to="/" onClick={handleClick}>
        Logout
      </NavLink>
    </Nav>
  );
}
