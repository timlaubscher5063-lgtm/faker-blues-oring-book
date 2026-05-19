import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, useParams } from "react-router";

import { getTool } from "../api/tools";

import "./tools.css";

export default function Tool() {
  const { token } = useAuth();
  const { id } = useParams();

  const [tool, setTool] = useState(null);

  useEffect(() => {
    const syncTool = async () => {
      const data = await getTool(id, token);
      setTool(data);
    };
    syncTool();
  }, [id]);

  if (!tool) return <p>Loading...</p>;

  return (
    <div id="tool">
      <section>
        <h1>{tool.series}</h1>
        <table>
          <tr>
            <th>Tool</th>
            <th>O-Ring</th>
            <th>Connection</th>
            <th>Length</th>
            <th>Weight</th>
            <th>Voltage</th>
          </tr>
          <tr>
            <td>{tool.name}</td>
            <td>{tool.oring}</td>
            <td>{tool.connection}</td>
            <td>{tool.length}</td>
            <td>{tool.weight}</td>
            <td>{tool.voltage}</td>
          </tr>
        </table>
      </section>
    </div>
  );
}
