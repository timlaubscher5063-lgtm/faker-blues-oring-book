import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <img src="/FBW.png" alt="Faker Blues Logo" />
        <p>O-Ring Book</p>
      </NavLink>
      <nav>
        {token ? (
          <>
            <NavLink id="link" to="/tools">
              Tools
            </NavLink>
            <NavLink id="link" to="/tools/add">
              Add Tool
            </NavLink>
            <NavLink id="link" to="/login" onClick={() => logout()}>
              Log out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink id="link" to="/login">
              Log in
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
