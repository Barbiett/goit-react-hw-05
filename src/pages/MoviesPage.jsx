import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import { fetchMoviesByQuery } from "../Api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  const getUrlParams = params ? params.get("input") ?? "" : "";

  const handleSubmit = async (query) => {
    setParams({ query });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!getUrlParams) return;

      try {
        setIsLoading(true);
        const results = await fetchMoviesByQuery(getUrlParams);
        setMovies(results);
        setParams("");
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [getUrlParams, setParams]);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}
