import React, { useState } from 'react'

function SearchBar({ onSearch }) {

  const [movieName, setMovieName] = useState("")

  const searchHandle = () => {
    console.log(movieName)
    onSearch(movieName)
  }

  return (
    <div className="container-fluid text-center py-5">

      <h1>Find Your Favorite Movie</h1>

      <p>
        Search for a movie and discover its details
      </p>

      <div className="row justify-content-center mt-4">

        <div className="col-md-8 col-lg-6 d-flex gap-3">

          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title..."
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />

          <button
            onClick={searchHandle}
            className="btn btn-primary"
          >
            Search
          </button>

        </div>

      </div>

      {/* Image */}
      <div className="mt-5">

        <img
          src="/pop.jpg"
          alt="Movie"
          className="img-fluid"
          style={{ maxWidth: "350px" }}
        />

      </div>

    </div>
  )
}

export default SearchBar