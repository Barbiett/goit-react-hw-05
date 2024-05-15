import { useState } from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import { fetchMoviesByQuery } from "../Api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (query) => {
    setIsLoading(true);
    try {
      const results = await fetchMoviesByQuery(query);
      setMovies(results);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}
