import { useState } from "react";
import { addTool } from "../api/tools";
import { useAuth } from "../auth/AuthContext";
import "./tools.css";

export default function AddTool() {
  const { token } = useAuth();

  const [error, setError] = useState(null);

  const tryAddTool = async (formData) => {
    setError(null);

    const name = formData.get("name");
    const series = formData.get("series");
    const oring = formData.get("oring");
    const connection = formData.get("connection");
    const length = formData.get("length");
    const weight = formData.get("weight");
    const voltage = formData.get("voltage");

    try {
      await addTool(token, {
        name,
        series,
        oring,
        connection,
        length,
        weight,
        voltage,
      });
      // syncTools();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Add a new tool</h2>
      <form id="toolAdd" action={tryAddTool}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Series
          <input type="text" name="series" />
        </label>
        <label>
          O-Ring
          <input type="integer" name="oring" />
        </label>
        <label>
          Connection
          <input type="text" name="connection" />
        </label>
        <label>
          Length
          <input type="integer" name="length" />
        </label>
        <label>
          Weight
          <input type="integer" name="weight" />
        </label>
        <label>
          Voltage
          <input type="integer" name="voltage" />
        </label>
        <button>Add Tool</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}
