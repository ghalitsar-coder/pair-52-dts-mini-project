import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_LATEST_MOVIES,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_SINGLE_MOVIE,
  FETCH_SINGLE_VIDEO,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
} from "../api/apiCalls";
import { resetSingle } from "../redux/moviesSlice";
import { NotFound, SliderContent } from "../components";
const Detail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    movieDetails,
    movieVideoURL,
    popularMovies,
    upComingMovies,
    topRatedMovies,
    latestMovies,
    nowPlayingMovies,
    isFetching,
  } = useSelector((state) => state.moviesList);
  useEffect(() => {
    FETCH_SINGLE_MOVIE(movieId, dispatch);
    FETCH_SINGLE_VIDEO(movieId, dispatch);
    return () => dispatch(resetSingle());
  }, [movieId]);

  useEffect(() => {
    FETCH_LATEST_MOVIES(dispatch);
    FETCH_NOW_PLAYING_MOVIES(dispatch);
    FETCH_POPULAR_MOVIES(dispatch);
    FETCH_TOP_RATED_MOVIES(dispatch);
    FETCH_UPCOMING_MOVIES(dispatch);
  }, []);
  if ((!movieVideoURL || !movieDetails) && !isFetching) {
    return <NotFound />;
  }

  return (
    <div className="overflow-hidden">
      {movieVideoURL ? (
        <iframe
          className="w-full h-[300px] md:h-[750px] "
          src={`https://www.youtube.com/embed/${movieVideoURL?.key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        <div className="flex h-[20vh]">
          <h1 className="m-auto text-2xl font-semibold">
            Video / Trailer Not Found
          </h1>
        </div>
      )}

      <div className="my-14 p-10 grid gap-y-3">
        <h2 className="text-2xl font-semibold">Description</h2>
        <div className="  flex gap-x-3 text-sm">
          {movieDetails?.genres?.map((item) => (
            <span key={item.id}>{item?.name}</span>
          ))}
        </div>
        <p>{movieDetails?.overview}</p>
        <p>
          Rating{" "}
          <span className="font-bold"> {movieDetails?.vote_average}</span> / 10
        </p>
        <p>
          Popularity{" "}
          <span className="font-semibold"> {movieDetails?.popularity} </span>{" "}
        </p>
        <p>
          Budget{" "}
          <span className="font-semibold">
            {" "}
            ${movieDetails?.budget?.toLocaleString("id-ID")}{" "}
          </span>{" "}
        </p>
      </div>

      <SliderContent title="Popular" data={popularMovies} />
      <SliderContent title="Up Coming" data={upComingMovies} />
      <SliderContent title="Top Rated" data={topRatedMovies} />
    </div>
  );
};

export default Detail;
