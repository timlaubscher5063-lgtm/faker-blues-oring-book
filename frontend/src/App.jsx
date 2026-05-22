import { Route, Routes } from "react-router";

import { useEffect, useState } from "react";
import axios from "axios";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Tool from "./tools/Tool";
import Tools from "./tools/Tools";
import AddTool from "./tools/AddTool";
import Error404 from "./Error404";
import Layout from "./layout/Layout";
import ProtectedComponent from "./ProtectedComponent";

function App() {
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/")
      .then((data) => setBackend(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route element={<ProtectedComponent />}>
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:id" element={<Tool />} />
          <Route path="/tools/add" element={<AddTool />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
export default App;
