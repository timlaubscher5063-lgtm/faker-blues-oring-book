import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      navigate("/tools");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Login to O-Ring Book Account</h1>
      <form action={onLogin}>
        <label>
          Username
          <input type="username" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to="/register">First time users register here.</Link>
    </>
  );
}
