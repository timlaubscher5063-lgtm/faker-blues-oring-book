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
      <div id="titlesearch">
        <h1 id="title">Tool List</h1>
        <SearchForm setFilter={setFilter} />
      </div>
      <ul class="toolcard">
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
    <li>
      {/* <figure>
        <img src={tool.image} alt={"Image of " + tool.name} />
      </figure> */}
      <Link id="toolname" to={"/tools/" + tool.id}>
        <div class="toolitems">
          <h2>
            {tool.series}: {tool.name}
          </h2>
          <p>O-Ring: {tool.oring}</p>
        </div>
      </Link>
    </li>
  );
}
