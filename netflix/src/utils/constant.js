import { autoBatchEnhancer } from "@reduxjs/toolkit";

export const API_END_POINT="http://localhost:8080/api/v1/user";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDAwMjgzMjAyMmRjMWUxY2JkN2VkMTYxMmJmZmE1ZiIsIm5iZiI6MTc1NjM3OTEyMC4zNTYsInN1YiI6IjY4YjAzN2YwYWQ3ZGU2NTc1OGZhOTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AMr7vd2kBE_Yg2_zsp0ZqzU-ad48Sx3EC3J78f2SRyg'
  }
};

// export const Now_Playing_Movie="https://api.themoviedb.org/3/account/22264432";


export const TMDB_IMG_URL="https://image.tmdb.org/t/p/w500";