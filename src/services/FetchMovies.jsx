import axios from "axios";

const API_KEY = 'e8d94f3e976148bda0a5c640d4df112b';

export const TrendingsFilms = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);

  return response.data;
}

export const FilmByName = async name => {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const responce = await axios.get(`${BASE_URL}?query=${name}&api_key=${API_KEY}&page=1`)

    return responce.data
}

export const FilmDetailsById = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const response = await axios.get(`${BASE_URL}${movieId}?api_key=${API_KEY}`);

  return response.data;
};

export const FilmCreditsByID = async movieId => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/'
    const responce = await axios.get(`${BASE_URL}${movieId}/credits?api_key=${API_KEY}`)

    return responce.data
}

export const FilmReviewsByID = async movieId => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/'
    const responce = await axios.get(`${BASE_URL}${movieId}/reviews?api_key=${API_KEY}`)

    return responce.data
}