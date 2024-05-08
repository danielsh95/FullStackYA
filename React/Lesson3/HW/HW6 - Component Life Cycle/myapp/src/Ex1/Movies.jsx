import { useEffect, useState } from "react"
import { getAllData } from './../utils';
import MovieComp from "./Movie";

function MoviesComp() {

  const [moviesIds, setMoviesIds] = useState([])

  useEffect(() => {
    const fetchEffect = async () => {
      const url_movies = 'https://api.tvmaze.com/shows'
      const data = await getAllData(url_movies)
      setMoviesIds(data.map(movie => movie.id).slice(0, 10))
    }
    fetchEffect()
  }, [])

  return (
    <div style={{ border: '5px solid red', width: '400px', textAlign: 'center' }}>
      <h1>Movies</h1>
      {
        moviesIds.map((movieId, index) => {
          return <div key={index}>
            <MovieComp movieId={movieId} /><br />
          </div>
        })
      }
    </div>
  )
}

export default MoviesComp
