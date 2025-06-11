import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const TOKEN_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njg0NzdkMmRjNjU1YmM1MzBiNzEwZjUyNjE0ZjFhZCIsIm5iZiI6MTc0OTU3NDU2MC43NTUsInN1YiI6IjY4NDg2M2EwMGVlN2UwYjY2MjM0MmVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XdbEHx_vTbUcvoS-k4a60nILsM015kViTC0f-Os7GJg";

export const getTrendingMovies = async () => {
  const response = await axios.get("/3/trending/movie/day?language=en-US", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};

export const getMovieById = async (movie_id) => {
  const response = await axios.get(`/3/movie/${movie_id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};

export const getMovies = async (searchWord) => {
  const response = await axios.get("/3/search/movie", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
    params: {
      query: searchWord,
    },
  });

  return response.data;
};

export const getCastById = async (movie_id) => {
  const response = await axios.get(`/3/movie/${movie_id}/credits`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};

export const getReviewsById = async (movie_id) => {
  const response = await axios.get(`/3/movie/${movie_id}/reviews`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};
