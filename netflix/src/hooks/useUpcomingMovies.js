import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/upcoming");
        const data = await response.json();

        console.log("Upcoming movies:", data);

        // ✅ Send movies to Redux
        dispatch(getUpcomingMovies(data));
      } catch (err) { 
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
