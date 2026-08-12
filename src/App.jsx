import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {

  const [movie, setMovie] = useState(null)

  const handleMovieSearch = async (movieName) => {

    try {

      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=YOUR_API_KEY`
      )

      const data = await response.json()

      console.log(data)

      setMovie(data)

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <>
      <Header />

      <SearchBar onSearch={handleMovieSearch} />

      <div className="container text-center mt-5">

        {movie && movie.Response === "True" && (
          <div>

            <h2>{movie.Title}</h2>

            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "250px" }}
            />

            <p>{movie.Year}</p>

          </div>
        )}

        {movie && movie.Response === "False" && (
          <h3>{movie.Error}</h3>
        )}

      </div>

      <Footer />
    </>
  )
}

export default App