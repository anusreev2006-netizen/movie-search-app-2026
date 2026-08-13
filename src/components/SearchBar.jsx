import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [movieName, setMovieName] = useState("");

  const searchHandle = () => {
    if (movieName.trim() !== "") {
      onSearch(movieName);
    }
  };

  return (
    <div className="search-container text-center mb-5  ">
      <input type="text"  placeholder="Enter movie name" className="w-50 rounded" value={movieName} onChange={(e) => setMovieName(e.target.value)}/>

      <button className="btn btn-primary ms-3 py-1" onClick={searchHandle}> Search </button>
    </div>
  );
}

export default SearchBar;