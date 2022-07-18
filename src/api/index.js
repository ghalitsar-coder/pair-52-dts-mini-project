import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmRiMmI1ZWRkM2Y0NTFmYjk4YjY0ZTAzY2QxOWFlOCIsInN1YiI6IjYyZDJjYWMxNmVlY2VlMDY3ZDk0ZjNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mhSrdBix6Q_ul6Fbd4do_HVjfWIzUNt38Jypd_zR03k",
  },
});
const apiSearch = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmRiMmI1ZWRkM2Y0NTFmYjk4YjY0ZTAzY2QxOWFlOCIsInN1YiI6IjYyZDJjYWMxNmVlY2VlMDY3ZDk0ZjNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mhSrdBix6Q_ul6Fbd4do_HVjfWIzUNt38Jypd_zR03k",
  },
});

export const fetchPopularMovies = () => API.get("/popular");
export const fetchBySearch = (query) => apiSearch.get(`/?query=${query}`);
export const fetchMovie = (id) => API.get(`/${id}`);
export const fetchVideo = (id) => API.get(`/${id}/videos`);
export const fetchLatestMovies = () => API.get("/latest");
export const fetchNowPlayingMovies = () => API.get("/now_playing");
export const fetchTopRatedMovies = () => API.get("/top_rated");
export const fetchUpComingMovies = () => API.get("/upcoming");
