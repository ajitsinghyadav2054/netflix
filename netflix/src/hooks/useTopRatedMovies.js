import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/top-rated");
        const data = await response.json();

        console.log("Top-rated movies:", data);

        // ✅ Send movies to Redux
        dispatch(getTopRatedMovies(data));
      } catch (err) { 
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
