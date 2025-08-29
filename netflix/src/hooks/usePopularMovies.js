import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/popular");
        const data = await response.json();

        console.log("Popular movies:", data);

        // ✅ Send movies to Redux
        dispatch(getPopularMovies(data));
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default usePopularMovies;
