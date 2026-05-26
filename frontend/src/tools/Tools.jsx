import { Link } from "react-router";
import { useState, useEffect } from "react";
import { getTools } from "../api/tools";
import { useAuth } from "../auth/AuthContext";

import "./tools.css";

export default function Tools() {
  const [tools, setTools] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const syncTools = async () => {
      const data = await getTools(token);
      setTools(data);
    };
    syncTools();
  }, []);

  const [filter, setFilter] = useState("");
  const filteredTools = tools.filter((tool) =>
    new RegExp(filter, "i").test(tool.name + tool.series),
  );

  return (
    <>
      <h1 id="title">Tool List</h1>
      <SearchForm setFilter={setFilter} />
      <ul id="tools">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </ul>
    </>
  );
}

function SearchForm({ setFilter }) {
  const onSearch = (formData) => {
    const search = formData.get("search");
    setFilter(search);
  };
  return (
    <form action={onSearch} id="search">
      <input
        name="search"
        type="search"
        placeholder="Search for a tool..."
        aria-label="Search for a tool"
      />
      <button>Search</button>
    </form>
  );
}

function ToolCard({ tool }) {
  return (
    <li className="tool">
      {/* <figure className="center-children">
        <img src={tool.image} alt={"Image of " + tool.name} />
      </figure> */}
      <div>
        <h2>
          <Link to={"/tools/" + tool.id}>
            {tool.series}: {tool.name}
          </Link>
        </h2>
        <p>O-Ring: {tool.oring}</p>
      </div>
    </li>
  );
}
