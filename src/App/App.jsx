import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import MovieReviews from "../components/MovieReviews";
import MovieCast from "../components/MovieCast";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesPage />}>
          <Route path="reviews" element={<MovieReviews />}></Route>
          <Route path="cast" element={<MovieCast />}></Route>
        </Route>
        ;
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
