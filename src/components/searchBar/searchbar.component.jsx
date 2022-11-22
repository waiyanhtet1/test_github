import "./searchbar.css";
import React, { useState } from "react";

const SearchBarComponent = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const keyPressHandler = (event) => {
    if (event.key === "Enter") onSubmit(search);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default SearchBarComponent;
