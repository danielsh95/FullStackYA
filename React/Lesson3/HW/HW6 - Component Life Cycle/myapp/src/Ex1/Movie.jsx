import { useEffect, useState } from "react"
import { getAllData } from './../utils';

function MovieComp({ movieId }) {

  const [movie, setMovie] = useState({})

  useEffect(() => {

    const fetchEffect = async () => {

      const url_movies = 'https://api.tvmaze.com/shows/' + movieId
      const data = await getAllData(url_movies)
      setMovie({ name: data.name, urlImage: data.image.medium })
    }
    fetchEffect()

  }, [])
  return (
    <div style={{ border: '5px solid blue', width: '300px' }}>
      <h2>{movie.name}</h2>
      <img src={movie.urlImage} />
    </div>
  )
}

export default MovieComp
