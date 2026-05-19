import { Outlet } from "react-router";
import "./layout.css";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
