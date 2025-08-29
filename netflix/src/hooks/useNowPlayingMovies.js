import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/movies");
        const data = await response.json();

        console.log("Fetched movies:", data);

        // ✅ Send movies to Redux
        dispatch(getNowPlayingMovies(data));
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
