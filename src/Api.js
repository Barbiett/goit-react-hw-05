import axios from "axios";
// export default function Api() {
//   const url =
//     "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

//   const options = {
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWQ5YWI4MDkwOWM0ZjMyNTdlMDA5ZWIyMmZkZTRkMCIsInN1YiI6IjY2NDA5YzE1YWIxM2NiNWE3N2ExYjkxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnsOzpRhNqFp9Kyqr4O35yBdRs-sjw4m9Z7DCYzXdN4",
//     },
//   };

//   axios
//     .get(url, options)
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWQ5YWI4MDkwOWM0ZjMyNTdlMDA5ZWIyMmZkZTRkMCIsInN1YiI6IjY2NDA5YzE1YWIxM2NiNWE3N2ExYjkxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnsOzpRhNqFp9Kyqr4O35yBdRs-sjw4m9Z7DCYzXdN4",
};

const params = {
  language: "en-US",
};

const config = {
  headers,
  params,
};

export async function fetchTrends() {
  const res = await axios.get("/trending/movie/day", config);
  return res.data;
}

export async function fetchMovieDetails(movie_id) {
  const res = await axios.get(`/movie/${movie_id}`, config);
  return res.data;
}

export async function fetchMovieReviews(movie_id) {
  const res = await axios.get(`/movie/${movie_id}/reviews`, config);
  return res.data;
}

export async function fetchMovieCast(movie_id) {
  const res = await axios.get(`/movie/${movie_id}/credits`, config);
  return res.data;
}

export async function fetchMoviesByQuery(query) {
  const res = await axios.get(`/search/movie`, {
    ...config,
    params: {
      ...params,
      include_adult: true,
      query,
    },
  });
  return res.data;
}
