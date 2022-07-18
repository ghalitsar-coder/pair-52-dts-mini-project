import {
  movieStart,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchLatestMovies,
  fetchUpComingMovies,
  fetchNowPlayingMovies,
  movieEnd,
  fetchSingleMovie,
  fetchSingleVideo,
  fetchBySearch,
} from "../redux/moviesSlice";
import * as api from "./";

export const FETCH_POPULAR_MOVIES = async (dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchPopularMovies();
    dispatch(fetchPopularMovies(data.results));
  } catch (err) {
    dispatch(movieEnd());
  }
};
export const FETCH_BY_SEARCH = async (query, dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchBySearch(query);
    console.log("DATA by search =>", data);
    dispatch(fetchBySearch(data.results));
  } catch (err) {
    dispatch(movieEnd());
  }
};
export const FETCH_SINGLE_MOVIE = async (movieId, dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchMovie(movieId);
    dispatch(fetchSingleMovie(data));
  } catch (err) {
    dispatch(movieEnd());
  }
};
export const FETCH_SINGLE_VIDEO = async (movieId, dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchVideo(movieId);
    dispatch(fetchSingleVideo(data.results[0]));
  } catch (err) {
    dispatch(movieEnd());
  }
};

export const FETCH_TOP_RATED_MOVIES = async (dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchTopRatedMovies();
    dispatch(fetchTopRatedMovies(data.results));
  } catch (err) {
    dispatch(movieEnd());
  }
};
export const FETCH_LATEST_MOVIES = async (dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchLatestMovies();
    dispatch(fetchLatestMovies(data.results));
  } catch (err) {
    dispatch(movieEnd());
  }
};
export const FETCH_UPCOMING_MOVIES = async (dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchUpComingMovies();
    dispatch(fetchUpComingMovies(data.results));
  } catch (err) {
    dispatch(movieEnd());
  }
};
export const FETCH_NOW_PLAYING_MOVIES = async (dispatch) => {
  dispatch(movieStart());
  try {
    const { data } = await api.fetchNowPlayingMovies();
    dispatch(fetchNowPlayingMovies(data.results));
  } catch (err) {
    dispatch(movieEnd());
  }
};
