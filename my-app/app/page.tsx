'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = '36796d1c'   // ✅ NEW OMDB API KEY

export default function Home() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<any[]>([])
  const [favorites, setFavorites] = useState<any[]>([])
  const [selectedMovie, setSelectedMovie] = useState<any>(null)
  const [showFavorites, setShowFavorites] = useState(false)

  /* Load default movies & favorites */
  useEffect(() => {
    fetchDefaultMovies()
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(favs)
  }, [])

  const fetchDefaultMovies = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=avengers&type=movie&apikey=${API_KEY}`
      )
      setMovies(res.data.Search || [])
    } catch (err) {
      console.error(err)
    }
  }

  /* Search movies */
  const searchMovies = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query) return

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${API_KEY}`
      )
      setMovies(res.data.Search || [])
      setSelectedMovie(null)
      setShowFavorites(false)
    } catch (err) {
      console.error(err)
    }
  }

  /* Movie details */
  const showDetails = async (id: string) => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      )
      setSelectedMovie(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  /* Favorites */
  const toggleFavorite = (movie: any) => {
    let updated
    if (favorites.some(f => f.imdbID === movie.imdbID)) {
      updated = favorites.filter(f => f.imdbID !== movie.imdbID)
    } else {
      updated = [...favorites, movie]
    }
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const isFavorite = (id: string) =>
    favorites.some(f => f.imdbID === id)

  return (
    <div className="container">
      <h1>Movie Explorer</h1>

      {/* NAV */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setShowFavorites(false)}>
          All Movies
        </button>
        <button onClick={() => setShowFavorites(true)}>
          Favorites ({favorites.length})
        </button>
      </div>

      {/* SEARCH */}
      {!showFavorites && (
        <form onSubmit={searchMovies}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
      )}

      {/* MOVIE LIST */}
      {!selectedMovie && !showFavorites && (
        <div className="grid">
          {movies.map(movie => (
            <div key={movie.imdbID} className="card">
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/300x450'
                }
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>

              <button onClick={() => showDetails(movie.imdbID)}>
                Details
              </button>

              <button onClick={() => toggleFavorite(movie)}>
                {isFavorite(movie.imdbID)
                  ? '❤️ Remove'
                  : '🤍 Favorite'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* FAVORITES LIST */}
      {!selectedMovie && showFavorites && (
        <div className="grid">
          {favorites.length === 0 ? (
            <p>No favorite movies added.</p>
          ) : (
            favorites.map(movie => (
              <div key={movie.imdbID} className="card">
                <img
                  src={
                    movie.Poster !== 'N/A'
                      ? movie.Poster
                      : 'https://via.placeholder.com/300x450'
                  }
                  alt={movie.Title}
                />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>

                <button onClick={() => showDetails(movie.imdbID)}>
                  Details
                </button>

                <button onClick={() => toggleFavorite(movie)}>
                  ❌ Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* MOVIE DETAILS */}
      {selectedMovie && (
        <div>
          <button onClick={() => setSelectedMovie(null)}>⬅ Back</button>

          <h2>{selectedMovie.Title}</h2>
          <img
            src={
              selectedMovie.Poster !== 'N/A'
                ? selectedMovie.Poster
                : 'https://via.placeholder.com/400x550'
            }
          />
          <p>{selectedMovie.Plot}</p>
          <p>⭐ {selectedMovie.imdbRating}</p>

          <button onClick={() => toggleFavorite(selectedMovie)}>
            {isFavorite(selectedMovie.imdbID)
              ? '❤️ Remove Favorite'
              : '🤍 Add Favorite'}
          </button>
        </div>
      )}
    </div>
  )
}
