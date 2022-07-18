import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    latestMovies: [],
    upComingMovies: [],
    nowPlayingMovies: [],
    topRatedMovies: [],
    filteredMovies: [],
    movieDetails: {},
    movieVideoURL: {},
    isFetching: false,
    isError: false,
  },
  reducers: {
    movieStart: (state, { payload }) => {
      state.isError = false;
      state.isFetching = true;
    },
    fetchPopularMovies: (state, { payload }) => {
      state.popularMovies = payload;
      state.isFetching = false;
    },
    fetchBySearch: (state, { payload }) => {
      state.filteredMovies = payload;
      state.isFetching = false;
    },
    fetchSingleMovie: (state, { payload }) => {
      state.movieDetails = payload;
      state.isFetching = false;
    },
    fetchSingleVideo: (state, { payload }) => {
      state.movieVideoURL = payload;
      state.isFetching = false;
    },
    fetchTopRatedMovies: (state, { payload }) => {
      state.topRatedMovies = payload;
      state.isFetching = false;
    },
    fetchLatestMovies: (state, { payload }) => {
      state.latestMovies = payload;
      state.isFetching = false;
    },
    fetchUpComingMovies: (state, { payload }) => {
      state.upComingMovies = payload;
      state.isFetching = false;
    },
    fetchNowPlayingMovies: (state, { payload }) => {
      state.nowPlayingMovies = payload;
      state.isFetching = false;
    },
    resetSingle: (state, { payload }) => {
      state.movieDetails = {};
      state.movieVideoURL = {};
      state.filteredMovies = [];
    },
    movieEnd: (state, { payload }) => {
      state.isError = true;
      state.isFetching = false;
    },
  },
});

export const {
  movieStart,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchLatestMovies,
  fetchUpComingMovies,
  fetchNowPlayingMovies,
  fetchSingleMovie,
  movieEnd,
  fetchSingleVideo,
  resetSingle,
  fetchBySearch,
} = moviesSlice.actions;
export default moviesSlice.reducer;
