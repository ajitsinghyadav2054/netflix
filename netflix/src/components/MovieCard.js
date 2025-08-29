import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-2'>
      <img src={`${TMDB_IMG_URL}/${posterpath}`} alt="movie-banner"/>
    </div>
  )
}

export default MovieCard
