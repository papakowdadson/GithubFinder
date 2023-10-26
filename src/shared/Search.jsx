import React from "react";

function Search({ placeholder, buttonDetails }) {
  return (
    <div className="search">
      <form onSubmit={null}>
        <input
          className="searchInput"
          type="search"
          placeholder={placeholder}
        />
        <button className="searchButton" type="submit">
          {buttonDetails}
        </button>
      </form>
    </div>
  );
}

export default Search;
