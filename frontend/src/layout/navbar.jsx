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
            <NavLink to="/tools">Tools</NavLink>
            <NavLink to="/tools/add">Add Tool</NavLink>
            <a href="#" onClick={() => logout()}>
              Log out
            </a>
          </>
        ) : (
          <>
            <NavLink to="/login">Log in</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
