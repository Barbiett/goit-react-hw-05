import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const notify = () => toast("Empty! Write something");
import Loader from "../components/Loader";
import SearchForm from "../components/SearchForm";

// import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../Api";

export default function MoviesPage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const ownerParam = searchParams.get("owner") ?? "";

  // const changeOwnerFilter = (newFilter) => {
  //   searchParams.set("owner", newFilter);
  //   setSearchParams(searchParams);
  // };
  function handleSubmit(e) {
    e.preventDefault();

    const editedValue = e.target.elements.searchInput.value
      .toLowerCase()
      .trim();

    if (!editedValue) {
      notify();
    }
    e.target.reset();
  }
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
    </div>
  );
}
