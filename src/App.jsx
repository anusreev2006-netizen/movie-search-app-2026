import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";
import "./App.css";

function App() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovie = async (movieName) => {
    setLoading(true);
    setError("");
    setMovie(null);

    try {
      // First API call - search movie
      const searchResponse = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=f28eabc0`);

      const searchData = await searchResponse.json();

      if (searchData.Response === "False") {
        setError("Movie not found");
        setLoading(false);
        return;
      }

      // Get the first movie from search results
      const imdbID = searchData.Search[0].imdbID;

      // Second API call - get movie details
      const detailsResponse = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=f28eabc0`);

      const detailsData = await detailsResponse.json();

      if (detailsData.Response === "False") {
        setError("Movie not found");
      } else {
        setMovie(detailsData);
      }
    } catch (error) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="text-center">
      <Header/>
      <h1>Movie Search App</h1>

      <SearchBar  onSearch={searchMovie} />

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {movie && <Movie movie={movie} />}
      <Footer/>
    </div>
  );
}

export default App;