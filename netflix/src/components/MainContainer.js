import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const moviesData = useSelector(store => store.movie?.nowPlayingMovies);

  // Agar data nahi aaya ya results empty hain
  if (!moviesData || !moviesData.results || moviesData.results.length === 0) {
    return;
  }

  // movies array ke andar first movie ko use karo
  const mainMovie = moviesData.results[0];

  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  )
}

export default MainContainer
