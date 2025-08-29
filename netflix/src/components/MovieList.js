import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-8 my-6'>
      <h1 className='text-white text-3xl mb-4'>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))
          ) : (
            <p className="text-gray-400">No movies available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieList
