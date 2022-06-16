import React from 'react'
import Movie from './Movie'

const MovieList = ({movies,search}) => {
  return (
    <div>
       { movies.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((movies)=> < Movie movies={movies} />) }
    </div>
  )
}

export default MovieList