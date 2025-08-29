import React, { useState, useEffect } from 'react';

const VideoBackground = ({ movieId }) => {
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const fetchMovieVideos = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDAwMjgzMjAyMmRjMWUxY2JkN2VkMTYxMmJmZmE1ZiIsIm5iZiI6MTc1NjM3OTEyMC4zNTYsInN1YiI6IjY4YjAzN2YwYWQ3ZGU2NTc1OGZhOTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AMr7vd2kBE_Yg2_zsp0ZqzU-ad48Sx3EC3J78f2SRyg'
        }
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          options
        );
        const data = await response.json();
        console.log("movie data is",data);
        // Find the first YouTube trailer
        const trailer = data.results?.find(video => 
          video.type === 'Trailer' && video.site === 'YouTube'
        );
        
        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (err) {
        console.error('Error fetching movie videos:', err);
      }
    };

    if (movieId) {
      fetchMovieVideos();
    }
  }, [movieId]);

  // Fallback to a default video if no trailer is found
  const defaultVideoKey = 'ApnrYpdBrco';
  const embedKey = videoKey || defaultVideoKey;

  return (
    <div className='w-screen'>
      <iframe 
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${embedKey}?si=2WLMNyjUnv8v6pIe&autoplay=1&mute=1`}
        title="YouTube video player" 
        frameBorder="0"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;