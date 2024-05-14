import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import SearchForm from "../components/SearchForm";

// import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  // const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const movieFilter = params.get("movie") ?? "";

  function notify(errMsg) {
    return toast(errMsg);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const editedValue = e.target.elements.searchInput.value
      .toLowerCase()
      .trim();

    if (!editedValue) {
      notify("Empty! Write something");
    }

    e.target.reset();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {!error && <SearchForm handleSubmit={handleSubmit} />}
      {isLoading && <Loader />}
    </>
  );
}
