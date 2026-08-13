import React from "react";

function Movie({ movie }) {
  return (
    <div className="movie-card">
      <img className="rounded-4" height={300} width={300} src={movie.Poster !== "N/A" ? movie.Poster : ""} alt={movie.Title}
      />

      <div className="movie-details ">
        <h2>{movie.Title}</h2>

        <p> <strong>Release Year:</strong> {movie.Year} </p>

        <p> <strong>Rating:</strong> {movie.imdbRating} </p>

        <p> <strong>Plot:</strong> {movie.Plot} </p>
      </div>
    </div>
  );
}

export default Movie;