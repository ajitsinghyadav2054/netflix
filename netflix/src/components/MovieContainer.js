import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {

  const movie=useSelector(store=>store.movie);

  console.log(movie);

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
        <MovieList title={"Popular Movies"} movies={movie?.popularMovies?.results}/>
        <MovieList title={"Top Rated Movies"} movies={movie?.topRatedMovies?.results}/>
        <MovieList title={"Now Playing Movies"} movies={movie?.nowPlayingMovies?.results}/>
        <MovieList title={"Upcoming Movies"} movies={movie?.upcomingMovies?.results}/>
      </div>
    </div>
  )
}

export default MovieContainer;
