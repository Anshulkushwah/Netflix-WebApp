// constants.js or constants.jsx
export const API_END_POINT = import.meta.env.VITE_BASE_URL;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_AUTHORIZATION_SECRET
  }
};

export const Now_Playing_API = BASE_URL + '/movie/upcoming?language=en-US&page=1';
export const Popular_Movie_API = BASE_URL + "/movie/popular";
export const Top_Rated_Movie_API = BASE_URL + "/movie/top_rated";
export const Upcoming_Movie_API = BASE_URL + "/movie/upcoming";
export const SEARCH_MOVIE_URL = BASE_URL + "/search/movie?query=";

export const TMDB_IMG_url = import.meta.env.VITE_TMDB_IMG_URL;